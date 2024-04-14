// 計算統一編號的檢查碼
export function calculateChecksum(taxNumber) {
  let firstPart = 0;
  let secondPart = 0;
  const weight = [1, 2, 1, 2, 1, 2, 4, 1]; // 權重陣列  
  for (let i = 0; i < taxNumber.length; i++) {
    const number = parseInt(taxNumber.charAt(i)) * weight[i];
    firstPart += Math.floor(number / 10);
    secondPart += number % 10;
  }
  const sum = firstPart + secondPart;
  return sum;
};
    
export function calculateTAXChecksum(taxNumber) {  
    const cleanedInput = taxNumber.trim();
    // 檢查統一編號格式
    const expectedChecksum = calculateChecksum(cleanedInput)

    for(let i = 0; i < cleanedInput.length; i++)
    {
      const reg = cleanedInput[i].charCodeAt(0);
      if(reg<48 || reg>57)
      {
        return `統一編號應該全為數字`;
      }
    }

    if (expectedChecksum % 10 === 0) {
        return `統一編號 ${cleanedInput} 的檢查碼正確`;
    } else if (cleanedInput[6] === '7' && (expectedChecksum + 1) % 10 === 0) {
      return `統一編號 ${cleanedInput} 的檢查碼正確耶`;
    }else {
        return `您的統一編號 ${cleanedInput} 錯誤。`;
    }
  }