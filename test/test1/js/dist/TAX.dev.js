"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChecksum = calculateChecksum;
exports.calculateTAXChecksum = calculateTAXChecksum;

// 計算統一編號的檢查碼
function calculateChecksum(taxNumber) {
  var firstPart = 0;
  var secondPart = 0;
  var weight = [1, 2, 1, 2, 1, 2, 4, 1]; // 權重陣列  

  for (var i = 0; i < taxNumber.length; i++) {
    var number = parseInt(taxNumber.charAt(i)) * weight[i];
    firstPart += Math.floor(number / 10);
    secondPart += number % 10;
  }

  var sum = firstPart + secondPart;
  return sum;
}

;

function calculateTAXChecksum(taxNumber) {
  var cleanedInput = taxNumber.trim(); // 檢查統一編號格式

  var expectedChecksum = calculateChecksum(cleanedInput);

  for (var i = 0; i < cleanedInput.length; i++) {
    var reg = cleanedInput[i].charCodeAt(0);

    if (reg < 48 || reg > 57) {
      return "\u7D71\u4E00\u7DE8\u865F\u61C9\u8A72\u5168\u70BA\u6578\u5B57";
    }
  }

  if (expectedChecksum % 10 === 0) {
    return "\u7D71\u4E00\u7DE8\u865F ".concat(cleanedInput, " \u7684\u6AA2\u67E5\u78BC\u6B63\u78BA");
  } else if (cleanedInput[6] === '7' && (expectedChecksum + 1) % 10 === 0) {
    return "\u7D71\u4E00\u7DE8\u865F ".concat(cleanedInput, " \u7684\u6AA2\u67E5\u78BC\u6B63\u78BA\u8036");
  } else {
    return "\u60A8\u7684\u7D71\u4E00\u7DE8\u865F ".concat(cleanedInput, " \u932F\u8AA4\u3002");
  }
}
//# sourceMappingURL=TAX.dev.js.map
