"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChecksum = calculateChecksum;
exports.validateAccount = validateAccount;

function calculateChecksum(account) {
  var total = 0;
  var weight = [0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2];

  for (var i = 0; i < 11; i++) {
    total += parseInt(account.charAt(i)) * weight[i];
  }

  var totalModulo = total % 11;
  var checksum = 11 - totalModulo;

  if (checksum === 11) {
    checksum = 1;
  } else if (checksum === 10) {
    checksum = 0;
  }

  return checksum;
}

function validateAccount(account) {
  var checksum = calculateChecksum(account);
  var lastDigit = parseInt(account.charAt(account.length - 1));

  if (checksum === lastDigit) {
    return "校验成功";
  } else {
    return "\u6821\u9A8C\u5931\u8D25\uFF0C\u6AA2\u67E5\u78BC\u61C9\u70BA\uFF1A".concat(checksum);
  }
}
//# sourceMappingURL=checkAccount2.dev.js.map
