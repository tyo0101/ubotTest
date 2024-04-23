import * as checkAccount from './checkAccount.js';
import * as checkAccount2 from './checkAccount2.js';
import * as addAccount from './addAccount.js';



//-----
function check(variants) {
  variants.forEach(variant => {
    const char = variant.charAt(3);
    const char2 = variant.charAt(4);
    const suJect = variant.substring(3, 5);
    const firstThreeChars = variant.substring(0, 3);
    const invalidSubjects = ["10", "20", "50", "51", "77", "88"];

    if (!invalidSubjects.includes(suJect)) {
      console.log("科目別錯誤");
    } else if (char === "2" && char2 === "0") {
      const checksum2 = checkAccount2.validateAccount(variant);
      console.log(checksum2);
    } else if (
      firstThreeChars >= "001" &&
      firstThreeChars <= "007" &&
      (suJect === "30" || suJect === "40" || suJect === "66")
    ) {
      const checksum2 = checkAccount2.validateAccount(variant);
      console.log(checksum2);
    } else {
      const checksum = checkAccount.validateAccount(variant);
      console.log(checksum);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("generateVariants");
  generateButton.addEventListener("click", function (event) {

    event.preventDefault();
    // 調用 generateVariants() 函數處理表單提交並獲取生成的變體
    const variants = addAccount.generateVariants();
    check(variants);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("NumberForm");
  const resultDiv = document.getElementById('result'); // 获取结果显示的 <div> 元素

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const variants = addAccount.generateVariants2();
    check(variants);
  });
});

//-----


    // document.addEventListener("DOMContentLoaded", () => {
    //   const generateButton = document.getElementById("generateVariants");
    //   generateButton.addEventListener("click", function (event) {
    //     event.preventDefault();

    //     // 調用 generateVariants() 函數處理表單提交並獲取生成的變體
    //     const variants = addAccount.generateVariants();

    //     // 遍歷每個變體，並計算檢查碼
    //     variants.forEach(variant => {
    //       const char = variant.charAt(3);
    //       const char2 = variant.charAt(4);
    //       const suJect = variant.substring(3, 5);
    //       const firstThreeChars = variant.substring(0, 3);
    //       const invalidSubjects = ["10", "20", "50", "51", "77", "88"];

    //       if (!invalidSubjects.includes(suJect)) {
    //         console.log("科目別錯誤");
    //       } else if (char === "2" && char2 === "0") {
    //         const checksum2 = checkAccount2.validateAccount(variant);
    //         console.log(checksum2);
    //       } else if (
    //         firstThreeChars >= "001" &&
    //         firstThreeChars <= "007" &&
    //         (suJect === "30" || suJect === "40" || suJect === "66")
    //       ) {
    //         const checksum2 = checkAccount2.validateAccount(variant);
    //         console.log(checksum2);
    //       } else {
    //         const checksum = checkAccount.validateAccount(variant);
    //         console.log(checksum);
    //       }
    //     });
    //   });
    // });


    // document.addEventListener("DOMContentLoaded", () => {
    //   const form = document.getElementById("NumberForm");
    //   const resultDiv = document.getElementById('result'); // 获取结果显示的 <div> 元素

    //   form.addEventListener("submit", function (event) {
    //     event.preventDefault();
    //     const inputContent = document.getElementById("NumberInput").value;
    //     const char = inputContent.charAt(3);
    //     const char2 = inputContent.charAt(4);
    //     const suJect = inputContent.substring(3, 5);
    //     const firstThreeChars = inputContent.substring(0, 3);
    //     const invalidSubjects = ["10", "20", "50", "51", "77", "88"];
    //     resultDiv.textContent = '';

    //     // 檢查科目別是否為無效值
    //     if (!invalidSubjects.includes(suJect)) {
    //       console.log("科目別錯誤");
    //     } else if (char === "2" && char2 === "0") {
    //       const checksum2 = checkAccount2.validateAccount(inputContent);
    //       console.log(checksum2);
    //     } else if (
    //       firstThreeChars >= "001" &&
    //       firstThreeChars <= "007" &&
    //       (suJect === "30" || suJect === "40" || suJect === "66")
    //     ) {
    //       const checksum2 = checkAccount2.validateAccount(inputContent);
    //       console.log(checksum2);
    //     } else {
    //       const checksum = checkAccount.validateAccount(inputContent);
    //       console.log(checksum);
    //     }
    //   });
    //   // const originalLog = console.log; //保存原始的 console.log() 方法
    //   // //重寫 console.log() 方法
    //   // console.log = function(...args) {
    //   //     // 将所有参数拼接成字符串，并显示在 <div> 中
    //   //     resultDiv.textContent += args.join(' ') + '\n';
    //   //     // 同时也调用原始的 console.log() 方法，保留在控制台中的输出
    //   //     originalLog.apply(console, args);
    //   // };
    // });