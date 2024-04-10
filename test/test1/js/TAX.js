// 檢查統一編號是否合法（必須是 8 位數字）
function isValidTaxNumber(taxNumber) {
  return /^\d{8}$/.test(taxNumber);
}

// 計算統一編號的檢查碼
function calculateTaxNumberChecksum(taxNumber) {
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
    const form = document.getElementById('taxNumberForm');
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taxNumberInput = document.getElementById('taxNumberInput');
    const taxNumber = taxNumberInput.value.trim();

    // 檢查統一編號格式
    if (!isValidTaxNumber(taxNumber)) {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = '統一編號格式錯誤，必須是 8 個數字。';
        return;
    }
    const calculateChecksum = calculateTaxNumberChecksum(taxNumber)
    if (calculateChecksum % 10 === 0) {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `統一編號 ${taxNumber} 的檢查碼正確`;
    } else if (taxNumber[6] === '7' && (calculateChecksum + 1) % 10 === 0) {
      const resultDiv = document.getElementById('result');
      resultDiv.textContent = `統一編號 ${taxNumber} 的檢查碼正確耶`;
    }else {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `您的統一編號 ${taxNumber} 錯誤。`;
    }
  });