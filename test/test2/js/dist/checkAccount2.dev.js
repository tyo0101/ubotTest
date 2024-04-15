"use strict";

function calculateChecksum(account) {
  var total = 0;
  var weight = [0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2];

  for (var i = 0; i < 11; i++) {
    total += parseInt(account.charAt(i)) * weight[i];
  }

  var totalModulo = total % 11;
  var checksum = 11 - totalModulo;
  return checksum;
}

;

function validateAccount(account) {
  var checksum = calculateChecksum(account);
  var lastDigit = parseInt(account.charAt(account.length - 1));

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
//# sourceMappingURL=checkAccount2.dev.js.map
