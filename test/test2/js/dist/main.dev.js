"use strict";

// import * as checkAccount from './checkAccount.js';
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('NumberForm');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const inputContent = document.getElementById('NumberInput').value;
//         const checksum = checkAccount.validateAccount(inputContent);
//     });
// });
function calculateChecksum(account) {
  var total = 0;
  var weight = [5, 4, 3, 2, 8, 7, 6, 5, 4, 3, 2];

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
    return "帳號正確";
  } else {
    return "\u5E33\u865F\u932F\u8AA4\uFF0C\u6AA2\u67E5\u78BC\u61C9\u70BA\uFF1A".concat(checksum);
  }
}

;
var accountNumber = "002300001473";
var result = validateAccount(accountNumber);
console.log(result); // 输出 "校验成功" 或者 "校验失败"
//# sourceMappingURL=main.dev.js.map
