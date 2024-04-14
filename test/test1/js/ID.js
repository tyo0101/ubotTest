export function calculateChecksum(idNumber) {
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

export function calculateIDChecksum(idNumber) {
    const cleanedInput = idNumber.trim();
    const enteredChecksum = parseInt(cleanedInput.charAt(cleanedInput.length - 1)); // 使用者輸入的檢查碼
    const expectedChecksum = calculateChecksum(cleanedInput.substr(0, cleanedInput.length - 1)); // 預期的檢查碼

    if (enteredChecksum === expectedChecksum) {
        return `身份證字號 ${cleanedInput} 的檢查碼正確：${enteredChecksum}`;
    } else {
        const correctIdNumber = cleanedInput.substr(0, cleanedInput.length - 1) + expectedChecksum;
        return `您輸入的檢查碼 ${enteredChecksum} 錯誤，正確的檢查碼應為 ${expectedChecksum}。重新計算後的身份證字號：${correctIdNumber}`;
        idNumberInput.value = correctIdNumber; // 更新輸入框的值為正確的身份證字號
    }
}