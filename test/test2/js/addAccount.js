// addAccount.js

// 检查输入的是否是数字
export function isValidNumber(input) {
    return /^\d+$/.test(input); // 使用正则表达式检查是否是纯数字
}

// 生成单个变体的函数（整体逐位递增）
export function generateVariant(NumberInput, index) {
    let number = NumberInput; // 复制输入的数字

    // 将字符串转换为数字进行递增
    let incrementedNumber = parseInt(number) + index;

    // 将递增后的数字转换为字符串，并保持开头的零位
    const variant = incrementedNumber.toString().padStart(number.length, '0');
    return variant;
}

// 生成变体的主函数
export function generateVariants() {
    // 获取输入的数字
    const NumberInput = document.getElementById('NumberInput').value.trim();

    // 检查输入的是否是数字
    if (!isValidNumber(NumberInput)) {
        alert('请输入有效的数字！');
        return;
    }

    // 生成三个变体并显示结果
    const variants = [];
    for (let i = 1; i <= 3; i++) {
        const variant = generateVariant(NumberInput, i);
        variants.push(variant);
    }

    // 显示变体结果
    const result = document.getElementById('result');
    result.innerHTML = ''; // 清空结果区域
    variants.forEach(variant => {
        result.innerHTML += `<p>${variant}</p>`;
    });

    // 加载主模块
    import('./main.js')
        .then(mainModule => {
            mainModule.init(); // 调用主模块的初始化函数
        })
        .catch(error => {
            console.error('Failed to load main module:', error);
        });
}
