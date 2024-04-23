// addAccount.js

// 导出生成变体的函数
export function generateVariants() {
    const NumberInput = document.getElementById('NumberInput').value.trim();

    if (!isValidNumber(NumberInput)) {
        alert('请输入有效的数字！');
        return;
    }

    const variants = [];
    for (let i = 1; i <= 3; i++) {
        const variant = generateVariant(NumberInput, i);
        variants.push(variant);
    }

    const result = document.getElementById('result');
    result.innerHTML = ''; // 清空结果区域
    variants.forEach(variant => {
        result.innerHTML += `<p>${variant}</p>`;
    });
    return variants;
}

// 导出检查输入是否是数字的函数
export function isValidNumber(input) {
    return /^\d+$/.test(input);
}

// 导出生成单个变体的函数
export function generateVariant(NumberInput, index) {
    let number = NumberInput;
    let incrementedNumber = parseInt(number) + index;
    const variant = incrementedNumber.toString().padStart(number.length, '0');
    return variant;
}
