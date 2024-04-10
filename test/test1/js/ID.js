function calculateChecksum(idNumber) {
    const areaCodeMap = {
        A: 10, B: 11, C: 12, D: 13, E: 14,
        F: 15, G: 16, H: 17, I: 34, J: 18,
        K: 19, L: 20, M: 21, N: 22, O: 35,
        P: 23, Q: 24, R: 25, S: 26, T: 27,
        U: 28, V: 29, W: 32, X: 30, Y: 31, Z: 33
    };

    const firstChar = idNumber.charAt(0);
    const genderNumber = parseInt(idNumber.charAt(1));
    const areaCode = areaCodeMap[firstChar];
    const firstPart = Math.floor(areaCode / 10) + (areaCode % 10) * 9;
    const digits = idNumber.substr(1);
    let secondPart = 0;
    for (let i = 0; i < 8; i++) {
        secondPart += parseInt(digits.charAt(i)) * (8 - i);
    }
    const sum = firstPart + secondPart;
    const checksum = (10 - (sum % 10)) % 10;
    return checksum;
}

const form = document.getElementById('idNumberForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const idNumberInput = document.getElementById('idNumberInput');
    const idNumber = idNumberInput.value.trim();
    const enteredChecksum = parseInt(idNumber.charAt(idNumber.length - 1)); // 使用者輸入的檢查碼
    const expectedChecksum = calculateChecksum(idNumber.substr(0, idNumber.length - 1)); // 預期的檢查碼

    if (enteredChecksum === expectedChecksum) {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `身份證字號 ${idNumber} 的檢查碼正確：${enteredChecksum}`;
    } else {
        const correctIdNumber = idNumber.substr(0, idNumber.length - 1) + expectedChecksum;
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `您輸入的檢查碼 ${enteredChecksum} 錯誤，正確的檢查碼應為 ${expectedChecksum}。重新計算後的身份證字號：${correctIdNumber}`;
        idNumberInput.value = correctIdNumber; // 更新輸入框的值為正確的身份證字號
    }
});