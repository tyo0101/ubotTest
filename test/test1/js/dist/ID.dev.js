"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChecksum = calculateChecksum;
exports.calculateIDChecksum = calculateIDChecksum;

function calculateChecksum(idNumber) {
  var areaCodeMap = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 34,
    J: 18,
    K: 19,
    L: 20,
    M: 21,
    N: 22,
    O: 35,
    P: 23,
    Q: 24,
    R: 25,
    S: 26,
    T: 27,
    U: 28,
    V: 29,
    W: 32,
    X: 30,
    Y: 31,
    Z: 33
  };
  var firstChar = idNumber.charAt(0);
  var genderNumber = parseInt(idNumber.charAt(1));
  var areaCode = areaCodeMap[firstChar];
  var firstPart = Math.floor(areaCode / 10) + areaCode % 10 * 9;
  var digits = idNumber.substr(1);
  var secondPart = 0;

  for (var i = 0; i < 8; i++) {
    secondPart += parseInt(digits.charAt(i)) * (8 - i);
  }

  var sum = firstPart + secondPart;
  var checksum = (10 - sum % 10) % 10;
  return checksum;
}

function calculateIDChecksum(idNumber) {
  var cleanedInput = idNumber.trim();
  var enteredChecksum = parseInt(cleanedInput.charAt(cleanedInput.length - 1)); // 使用者輸入的檢查碼

  var expectedChecksum = calculateChecksum(cleanedInput.substr(0, cleanedInput.length - 1)); // 預期的檢查碼

  if (enteredChecksum === expectedChecksum) {
    return "\u8EAB\u4EFD\u8B49\u5B57\u865F ".concat(cleanedInput, " \u7684\u6AA2\u67E5\u78BC\u6B63\u78BA\uFF1A").concat(enteredChecksum);
  } else {
    var correctIdNumber = cleanedInput.substr(0, cleanedInput.length - 1) + expectedChecksum;
    return "\u60A8\u8F38\u5165\u7684\u6AA2\u67E5\u78BC ".concat(enteredChecksum, " \u932F\u8AA4\uFF0C\u6B63\u78BA\u7684\u6AA2\u67E5\u78BC\u61C9\u70BA ").concat(expectedChecksum, "\u3002\u91CD\u65B0\u8A08\u7B97\u5F8C\u7684\u8EAB\u4EFD\u8B49\u5B57\u865F\uFF1A").concat(correctIdNumber);
    idNumberInput.value = correctIdNumber; // 更新輸入框的值為正確的身份證字號
  }
}
//# sourceMappingURL=ID.dev.js.map
