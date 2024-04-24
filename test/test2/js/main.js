import * as checkAccount from './checkAccount.js';
import * as checkAccount2 from './checkAccount2.js';
import * as addAccount from './addAccount.js';
import { appendAlert } from './appendAlert.js';

document.addEventListener("DOMContentLoaded", () => {
  const resultDiv = document.getElementById('result'); // 获取结果显示的 <div> 元素
  resultDiv.innerHTML = '';
  const generateButton = document.getElementById("generateVariants");

  generateButton.addEventListener("click", function (event) {
    event.preventDefault();
    const inputContent = document.getElementById('NumberInput').value.trim();
    if (inputContent.length !== 11) {
      console.log("起始帳號長度錯誤");
      appendAlert("起始帳號長度錯誤", 'danger');
      console.log(inputContent.length);
    } else {
      // 调用 generateVariants() 函数处理表单提交并获取生成的变体
      const variants = addAccount.generateVariants(inputContent);
      check(variants)
      console.log(variants);
    }    
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("NumberForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const variants = addAccount.generateVariants2();
    check(variants);
  });
});


function check(variants) {
  const resultDiv = document.getElementById('result'); // 获取结果显示的 <div> 元素
  resultDiv.innerHTML = '';

  if (!isValidNumber(variants)) {
    console.log("帳號需為數字");
    appendAlert("帳號需為數字", 'danger');
    return; // 如果不是有效的数字字符串，跳过当前 variant 的处理
  }

  variants.forEach(variant => {
    const char = variant.charAt(3);
    const char2 = variant.charAt(4);
    const suJect = variant.substring(3, 5);
    const firstThreeChars = variant.substring(0, 3);
    const invalidSubjects = ["10", "20", "30", "40", "50", "51", "77", "88"];

    if (!invalidSubjects.includes(suJect)) {
      resultDiv.innerHTML += "科目別錯誤<br>"
      console.log("科目別錯誤");
    } else if (char === "2" && char2 === "0") {
      const checksum2 = checkAccount2.validateAccount(variant);
      console.log(checksum2);
      appendAlert(checksum2, 'info');
    } else if (
      firstThreeChars >= "001" &&
      firstThreeChars <= "007" &&
      (suJect === "30" || suJect === "40" || suJect === "66")
    ) {
      const checksum2 = checkAccount2.validateAccount(variant);
      console.log(checksum2);
      appendAlert(checksum2, 'info');
    } else {
      const checksum = checkAccount.validateAccount(variant);
      console.log(checksum);
      appendAlert(checksum, 'info');
    }
  });
};


// 判断字符串是否为有效的数字字符串
function isValidNumber(str) {
  return /^\d+$/.test(str);
}