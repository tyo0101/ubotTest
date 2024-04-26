import * as checkAccount from './checkAccount.js';
import * as checkAccount2 from './checkAccount2.js';
import * as addAccount from './addAccount.js';
import { appendAlert } from './appendAlert.js';

$(document).ready(function() {
  const resultDiv = $('#result'); // 获取结果显示的 <div> 元素
  resultDiv.empty(); // 清空结果显示区域

  // 监听按钮点击事件
  $('#generateVariants').click(function(event) {
    event.preventDefault();
    const inputContent = $('#NumberInput').val().trim();
    const countDown = inputContent.substring(5, 11);
    const invalidAccount = ["999997", "999998", "999999"];

    // 判断帐号是否为数字
    if (!$.isNumeric(inputContent)) {
      console.log("帳號需為數字");
      appendAlert("帳號需為數字", "danger");
      return;
    } else {
      if (inputContent.length !== 11) {
        console.log("起始帳號長度錯誤");
        appendAlert("起始帳號長度錯誤", "danger");
        console.log(inputContent.length);
      } else if (invalidAccount.includes(countDown)) {
        console.log("帳號錯誤");
        appendAlert("帳號錯誤", "danger");
      } else {
        // 调用 generateVariants() 函数处理表单提交并获取生成的变体
        const variants = addAccount.generateVariants(inputContent);
        check(variants);
        console.log(variants);
      }
    }
  });
});


$('#NumberForm').submit(function(event) {
  event.preventDefault();
  const variants = addAccount.generateVariants2();
  check(variants);
});

function check(variants) {
  const resultDiv = $('#result'); // 获取结果显示的 <div> 元素
  resultDiv.empty();

  variants.forEach(variant => {
      const char = variant.charAt(3);
      const char2 = variant.charAt(4);
      const suJect = variant.substring(3, 5);
      const firstThreeChars = variant.substring(0, 3);
      const invalidSubjects = ["10", "20", "30", "40", "50", "51", "77", "88"];

      if (firstThreeChars >= "001" && firstThreeChars <= "099" && firstThreeChars === "019") {
          console.log("分行別錯誤");
          appendAlert("分行別錯誤", 'info');
      } else {
          if (!invalidSubjects.includes(suJect)) {
              console.log("科目別錯誤");
              appendAlert("科目別錯誤", 'info');
          } else if (char === "2" && char2 === "0") {
              const checksum2 = checkAccount2.validateAccount(variant);
              console.log(checksum2);
              appendAlert(checksum2, 'info');
          } else if (firstThreeChars >= "001" && firstThreeChars <= "007" && (suJect === "30" || suJect === "40" || suJect === "66")) {
              const checksum2 = checkAccount2.validateAccount(variant);
              console.log(checksum2);
              appendAlert(checksum2, 'info');
          } else {
              const checksum = checkAccount.validateAccount(variant);
              console.log(checksum);
              appendAlert(checksum, 'info');
          }
      }
  });
}
