import * as ARC from './ARC.js';
import * as ID from './ID.js';
import * as TAX from './TAX.js';


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('NumberForm');
    const resultDiv = document.getElementById('result'); // 获取结果显示的 <div> 元素

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 獲取居留證號碼輸入框的值
        const inputContent = document.getElementById('NumberInput').value;
        const firstchar = inputContent.charCodeAt(0);

        // 清空上次显示的内容
        resultDiv.textContent = '';

        // 使用匯入的函式計算檢查碼
        if(inputContent.length === 8)
        {
            const checksum = TAX.calculateTAXChecksum(inputContent);
            console.log(`${checksum}`);
        }

        if(inputContent.length === 10 && firstchar>64 && firstchar<91)
        {
            const reg = inputContent[1];
            if(reg === '1' || reg === '2')
            {
                const checksum2 = ID.calculateIDChecksum(inputContent);
                console.log(`${checksum2}`);
            }
            else
            {
                const checksum3 = ARC.calculateARCChecksum(inputContent);
                console.log(`${checksum3}`);
            }
        }
        if(inputContent.length === 10 && (firstchar<65 || firstchar>90))
        {
            
            console.log("檢查首碼是否為大寫英文");
        }
        if(inputContent.length > 10 || inputContent.length < 8)
        {
            console.log("not any");
        }
        
    });
    const originalLog = console.log; //保存原始的 console.log() 方法
    //重寫 console.log() 方法
    console.log = function(...args) {
        // 将所有参数拼接成字符串，并显示在 <div> 中
        resultDiv.textContent += args.join(' ') + '\n';
        // 同时也调用原始的 console.log() 方法，保留在控制台中的输出
        originalLog.apply(console, args);
    };
});
