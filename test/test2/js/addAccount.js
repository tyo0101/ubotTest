//產生三個
export function generateVariants(NumberInput, quantity) {
    const frontNumber =NumberInput.substring(0, 5);
    const variants = [];
    for (let i = 1; i <= quantity; i++) {
        const variant = generateVariant(NumberInput, i-1);
        if(frontNumber === variant.substring(0, 5)){
            variants.push(variant);
        }
    }
    return variants;
}
//一個
export function generateVariants2() {
    const NumberInput = $('#NumberInput').val().trim();
    console.log(NumberInput)
    const variants = [];
    variants.push(NumberInput);
    return variants;
}

// 導出檢查輸入是否是數字的函数
export function isValidNumber(input) {
    return /^\d+$/.test(input);
}

// 導出生成單個變體的函数
export function generateVariant(NumberInput, index) {
    let number = NumberInput;
    let incrementedNumber = parseInt(number) + index;
    const variant = incrementedNumber.toString().padStart(number.length, '0');
    return variant;
}