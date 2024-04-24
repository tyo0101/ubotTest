"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var checkAccount = _interopRequireWildcard(require("./checkAccount.js"));

var checkAccount2 = _interopRequireWildcard(require("./checkAccount2.js"));

var addAccount = _interopRequireWildcard(require("./addAccount.js"));

var _appendAlert = require("./appendAlert.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener("DOMContentLoaded", function () {
  var resultDiv = document.getElementById('result'); // 获取结果显示的 <div> 元素

  resultDiv.innerHTML = '';
  var generateButton = document.getElementById("generateVariants");
  generateButton.addEventListener("click", function (event) {
    event.preventDefault();
    var inputContent = document.getElementById('NumberInput').value.trim();

    if (inputContent.length !== 11) {
      console.log("起始帳號長度錯誤");
      (0, _appendAlert.appendAlert)("起始帳號長度錯誤", 'danger');
      console.log(inputContent.length);
    } else {
      // 调用 generateVariants() 函数处理表单提交并获取生成的变体
      var variants = addAccount.generateVariants(inputContent);
      check(variants);
      console.log(variants);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("NumberForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var variants = addAccount.generateVariants2();
    check(variants);
  });
});

function check(variants) {
  var resultDiv = document.getElementById('result'); // 获取结果显示的 <div> 元素

  resultDiv.innerHTML = '';

  if (!isValidNumber(variants)) {
    console.log("帳號需為數字");
    (0, _appendAlert.appendAlert)("帳號需為數字", 'danger');
    return; // 如果不是有效的数字字符串，跳过当前 variant 的处理
  }

  variants.forEach(function (variant) {
    var _char = variant.charAt(3);

    var char2 = variant.charAt(4);
    var suJect = variant.substring(3, 5);
    var firstThreeChars = variant.substring(0, 3);
    var invalidSubjects = ["10", "20", "30", "40", "50", "51", "77", "88"];

    if (!invalidSubjects.includes(suJect)) {
      resultDiv.innerHTML += "科目別錯誤<br>";
      console.log("科目別錯誤");
    } else if (_char === "2" && char2 === "0") {
      var checksum2 = checkAccount2.validateAccount(variant);
      console.log(checksum2);
      (0, _appendAlert.appendAlert)(checksum2, 'info');
    } else if (firstThreeChars >= "001" && firstThreeChars <= "007" && (suJect === "30" || suJect === "40" || suJect === "66")) {
      var _checksum = checkAccount2.validateAccount(variant);

      console.log(_checksum);
      (0, _appendAlert.appendAlert)(_checksum, 'info');
    } else {
      var checksum = checkAccount.validateAccount(variant);
      console.log(checksum);
      (0, _appendAlert.appendAlert)(checksum, 'info');
    }
  });
}

; // 判断字符串是否为有效的数字字符串

function isValidNumber(str) {
  return /^\d+$/.test(str);
}
//# sourceMappingURL=main.dev.js.map
