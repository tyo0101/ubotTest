"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChecksum = calculateChecksum;
exports.validateAccount = validateAccount;

function calculateChecksum(account) {
  var total = 0;
  var weight = [5, 4, 3, 2, 8, 7, 6, 5, 4, 3, 2];

  for (var i = 0; i < account.length; i++) {
    total += parseInt(account.charAt(i)) * weight[i];
  }

  var totalModulo = total % 11;
  var checksum = 11 - totalModulo;
  return checksum;
}

;

function validateAccount(account) {
  var checksum = calculateChecksum(account);
  var lastDigit = parseInt(account.charAt(11));

  if (checksum === lastDigit) {
    return "校验成功";
  } else {
    return "校验失败";
  }
}

;
var accountNumber = "058500243605";
var result = validateAccount(accountNumber);
console.log(result); // 输出 "校验成功" 或者 "校验失败"
//# sourceMappingURL=checkAccount.dev.js.map
