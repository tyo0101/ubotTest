export function calculateChecksum(account) {
  let total = 0;
  const weight = [0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 11; i++) {
    total += parseInt(account.charAt(i)) * weight[i];
  }
  const totalModulo = total % 11;
  let checksum = 11 - totalModulo;
  if (checksum === 11) {
    checksum = 1;
  } else if (checksum === 10) {
    checksum = 0;
  }
  return checksum;
}

export function validateAccount(account) {
  const checksum = calculateChecksum(account);
  const lastDigit = parseInt(account.charAt(account.length - 1));

  if (checksum === lastDigit) {
    return "校验成功";
  } else {
    return `校验失败，檢查碼應為：${checksum}`;
  }
}
