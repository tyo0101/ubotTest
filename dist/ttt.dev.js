"use strict";

// 定义生成变体的函数
function generateVariants() {
  // 获取输入的数字
  var NumberInput = document.getElementById('NumberInput').value.trim(); // 检查输入的是否是数字

  if (!isValidNumber(NumberInput)) {
    alert('请输入有效的数字！');
    return;
  } // 生成三个变体并显示结果


  var variants = [];

  for (var i = 0; i < 3; i++) {
    var variant = generateVariant(NumberInput, i);
    variants.push(variant);
  } // 显示变体结果


  var result = document.getElementById('result');
  result.innerHTML = ''; // 清空结果区域

  variants.forEach(function (variant) {
    result.innerHTML += "<p>".concat(variant, "</p>");
  });
} // 检查输入的是否是数字


function isValidNumber(input) {
  return /^\d+$/.test(input); // 使用正则表达式检查是否是纯数字
} // 生成单个变体的函数（整体逐位递增）


function generateVariant(NumberInput, index) {
  var number = parseInt(NumberInput); // 将输入的数字转换为整数
  // 在原数字的基础上逐位递增

  number += index; // 将递增后的数字转换为字符串返回

  return number.toString();
}
//# sourceMappingURL=ttt.dev.js.map
