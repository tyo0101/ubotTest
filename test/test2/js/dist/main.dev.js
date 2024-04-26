"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var checkAccount = _interopRequireWildcard(require("./checkAccount.js"));

var checkAccount2 = _interopRequireWildcard(require("./checkAccount2.js"));

var addAccount = _interopRequireWildcard(require("./addAccount.js"));

var _appendAlert = require("./appendAlert.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

$(document).ready(function () {
  var resultDiv = $('#result'); // 获取结果显示的 <div> 元素

  resultDiv.empty(); // 清空结果显示区域
  // 监听按钮点击事件

  $('#generateVariants').click(function (event) {
    event.preventDefault();
    var inputContent = $('#NumberInput').val().trim();
    var countDown = inputContent.substring(5, 11);
    var invalidAccount = ["999997", "999998", "999999"]; // 判断帐号是否为数字

    if (!$.isNumeric(inputContent)) {
      console.log("帳號需為數字");
      (0, _appendAlert.appendAlert)("帳號需為數字", "danger");
      return;
    } else {
      if (inputContent.length !== 11) {
        console.log("起始帳號長度錯誤");
        (0, _appendAlert.appendAlert)("起始帳號長度錯誤", "danger");
        console.log(inputContent.length);
      } else if (invalidAccount.includes(countDown)) {
        console.log("帳號錯誤");
        (0, _appendAlert.appendAlert)("帳號錯誤", "danger");
      } else {
        // 调用 generateVariants() 函数处理表单提交并获取生成的变体
        var variants = addAccount.generateVariants(inputContent);
        check(variants);
        console.log(variants);
      }
    }
  });
});
$('#NumberForm').submit(function (event) {
  event.preventDefault();
  var variants = addAccount.generateVariants2();
  check(variants);
});

function check(variants) {
  var resultDiv = $('#result'); // 获取结果显示的 <div> 元素

  resultDiv.empty();
  variants.forEach(function (variant) {
    var _char = variant.charAt(3);

    var char2 = variant.charAt(4);
    var suJect = variant.substring(3, 5);
    var firstThreeChars = variant.substring(0, 3);
    var invalidSubjects = ["10", "20", "30", "40", "50", "51", "77", "88"];

    if (firstThreeChars >= "001" && firstThreeChars <= "099" && firstThreeChars === "019") {
      console.log("分行別錯誤");
      (0, _appendAlert.appendAlert)("分行別錯誤", 'info');
    } else {
      if (!invalidSubjects.includes(suJect)) {
        console.log("科目別錯誤");
        (0, _appendAlert.appendAlert)("科目別錯誤", 'info');
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
    }
  });
}
//# sourceMappingURL=main.dev.js.map
