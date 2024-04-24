"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateVariants = generateVariants;
exports.generateVariants2 = generateVariants2;
exports.isValidNumber = isValidNumber;
exports.generateVariant = generateVariant;

//產生三個
function generateVariants() {
  var NumberInput = document.getElementById('NumberInput').value.trim();
  var variants = [];

  for (var i = 1; i <= 3; i++) {
    var variant = generateVariant(NumberInput, i);
    variants.push(variant);
  }

  return variants;
} //一個


function generateVariants2() {
  var NumberInput = document.getElementById('NumberInput').value.trim();
  console.log(NumberInput);
  var variants = [];
  variants.push(NumberInput);
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
