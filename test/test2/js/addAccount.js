//產生三個
export function generateVariants() {
    const NumberInput = document.getElementById('NumberInput').value.trim();
    const variants = [];
    for (let i = 1; i <= 3; i++) {
        const variant = generateVariant(NumberInput, i);
        variants.push(variant);
    }
    return variants;
}
//一個
export function generateVariants2() {
    const NumberInput = document.getElementById('NumberInput').value.trim();
    console.log(NumberInput)
    const variants = [];
    variants.push(NumberInput);
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
