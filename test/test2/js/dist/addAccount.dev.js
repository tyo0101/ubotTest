"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateVariants = generateVariants;
exports.isValidNumber = isValidNumber;
exports.generateVariant = generateVariant;

// addAccount.js
// 导出生成变体的函数
function generateVariants() {
  var NumberInput = document.getElementById('NumberInput').value.trim();

  if (!isValidNumber(NumberInput)) {
    alert('请输入有效的数字！');
    return;
  }

  var variants = [];

  for (var i = 1; i <= 3; i++) {
    var variant = generateVariant(NumberInput, i);
    variants.push(variant);
  }

  var result = document.getElementById('result');
  result.innerHTML = ''; // 清空结果区域

  variants.forEach(function (variant) {
    result.innerHTML += "<p>".concat(variant, "</p>");
  });
  return variants;
} // 导出检查输入是否是数字的函数


function isValidNumber(input) {
  return /^\d+$/.test(input);
} // 导出生成单个变体的函数


function generateVariant(NumberInput, index) {
  var number = NumberInput;
  var incrementedNumber = parseInt(number) + index;
  var variant = incrementedNumber.toString().padStart(number.length, '0');
  return variant;
}
//# sourceMappingURL=addAccount.dev.js.map
