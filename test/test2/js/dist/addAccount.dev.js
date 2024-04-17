"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidNumber = isValidNumber;
exports.generateVariant = generateVariant;
exports.generateVariants = generateVariants;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// addAccount.js
// 检查输入的是否是数字
function isValidNumber(input) {
  return /^\d+$/.test(input); // 使用正则表达式检查是否是纯数字
} // 生成单个变体的函数（整体逐位递增）


function generateVariant(NumberInput, index) {
  var number = NumberInput; // 复制输入的数字
  // 将字符串转换为数字进行递增

  var incrementedNumber = parseInt(number) + index; // 将递增后的数字转换为字符串，并保持开头的零位

  var variant = incrementedNumber.toString().padStart(number.length, '0');
  return variant;
} // 生成变体的主函数


function generateVariants() {
  // 获取输入的数字
  var NumberInput = document.getElementById('NumberInput').value.trim(); // 检查输入的是否是数字

  if (!isValidNumber(NumberInput)) {
    alert('请输入有效的数字！');
    return;
  } // 生成三个变体并显示结果


  var variants = [];

  for (var i = 1; i <= 3; i++) {
    var variant = generateVariant(NumberInput, i);
    variants.push(variant);
  } // 显示变体结果


  var result = document.getElementById('result');
  result.innerHTML = ''; // 清空结果区域

  variants.forEach(function (variant) {
    result.innerHTML += "<p>".concat(variant, "</p>");
  }); // 加载主模块

  Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./main.js'));
  }).then(function (mainModule) {
    mainModule.init(); // 调用主模块的初始化函数
  })["catch"](function (error) {
    console.error('Failed to load main module:', error);
  });
}
//# sourceMappingURL=addAccount.dev.js.map
