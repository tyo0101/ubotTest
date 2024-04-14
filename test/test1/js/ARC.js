export function calculateChecksum(arcNumber) {
    const areaCodeMap = {
        A: 10, B: 11, C: 12, D: 13, E: 14,
        F: 15, G: 16, H: 17, I: 34, J: 18,
        K: 19, L: 20, M: 21, N: 22, O: 35,
        P: 23, Q: 24, R: 25, S: 26, T: 27,
        U: 28, V: 29, W: 32, X: 30, Y: 31, Z: 33
    };

    const firstChar = arcNumber.charAt(0);
    const secondChar = arcNumber.charAt(1);
    const areaCode = areaCodeMap[firstChar];
    const genderCode = areaCodeMap[secondChar];

    let firstPart;
    if (secondChar === 'A' || secondChar === 'B' || secondChar === 'C' || secondChar === 'D') {
        firstPart = Math.floor(areaCode / 10) * 1 + (areaCode * 9) % 10 + (genderCode % 10) * 8;
        const digits = arcNumber.substr(2);
        let secondPart = 0;
        for (let i = 0; i < 7; i++) {
            secondPart += parseInt(digits.charAt(i)) * (7 - i);
        }

        const sum = firstPart + secondPart;
        const checksum = 10 - (sum % 10);
        oldnew = 1;
        return checksum;
    } else {
        firstPart = Math.floor(areaCode / 10) * 1 + (areaCode * 9) % 10;
        const digits = arcNumber.substr(1);
        let secondPart = 0;
        for (let i = 0; i < 8; i++) {
            secondPart += parseInt(digits.charAt(i)) * (8 - i);
        }

        const sum = firstPart + secondPart;
        const checksum = 10 - (sum % 10);
        return checksum;
    }       
}

let oldnew = 0;

export function calculateARCChecksum(arcNumber) {
    const cleanedInput = arcNumber.trim();
    const enteredChecksum = parseInt(cleanedInput.charAt(cleanedInput.length - 1), 10); // 使用者輸入的檢查碼
    const expectedChecksum = calculateChecksum(cleanedInput.substr(0, cleanedInput.length - 1)); // 預期的檢查碼

    if (enteredChecksum === expectedChecksum) {
        if(oldnew === 0)
        {
            return `新式居留證號碼 ${cleanedInput} 的檢查碼正確：${enteredChecksum}`;
        }
        else
        {
            oldnew=0;
            return `舊式居留證號碼 ${cleanedInput} 的檢查碼正確：${enteredChecksum}`;
        }
        
    } else {
        const correctArcNumber = cleanedInput.substr(0, cleanedInput.length - 1) + expectedChecksum;
        return `您輸入的檢查碼 ${enteredChecksum} 錯誤，正確的檢查碼應為 ${expectedChecksum}。重新計算後的居留證號碼：${correctArcNumber}`;
    }
}