function calculateChecksum(account) {
    let total = 0;
    const weight = [0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2];
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
      return "校验成功";
    } else {
      return "校验失败";
    }
  };
  
  const accountNumber = "058500243605";
  const result = validateAccount(accountNumber);
  console.log(result); // 输出 "校验成功" 或者 "校验失败"