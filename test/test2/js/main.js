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
    let total = 0;
    const weight = [5, 4, 3, 2, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 11; i++) {
      total += parseInt(account.charAt(i)) * weight[i];
    }
    const totalModulo = total % 11;
    const checksum = 11 - totalModulo;
    return checksum;
  };
  
function validateAccount(account) {
    const checksum = calculateChecksum(account);
    const lastDigit = parseInt(account.charAt(account.length - 1));
  
    if (checksum === lastDigit) {
      return "帳號正確";
    } else {
      return `帳號錯誤，檢查碼應為：${checksum}`;
    }
  };
  
  const accountNumber = "002300001473";
  const result = validateAccount(accountNumber);
  console.log(result); // 输出 "校验成功" 或者 "校验失败"