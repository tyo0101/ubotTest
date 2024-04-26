"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ARC = _interopRequireWildcard(require("./ARC.js"));

var ID = _interopRequireWildcard(require("./ID.js"));

var TAX = _interopRequireWildcard(require("./TAX.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('NumberForm');
  var resultDiv = document.getElementById('result'); // 获取结果显示的 <div> 元素

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // 獲取居留證號碼輸入框的值

    var inputContent = document.getElementById('NumberInput').value;
    var firstchar = inputContent.charCodeAt(0); // 清空上次显示的内容

    resultDiv.textContent = ''; // 使用匯入的函式計算檢查碼

    if (inputContent.length === 8) {
      var checksum = TAX.calculateTAXChecksum(inputContent);
      console.log("".concat(checksum));
    }

    if (inputContent.length === 10 && firstchar > 64 && firstchar < 91) {
      var reg = inputContent[1];

      if (reg === '1' || reg === '2') {
        var checksum2 = ID.calculateIDChecksum(inputContent);
        console.log("".concat(checksum2));
      } else {
        var checksum3 = ARC.calculateARCChecksum(inputContent);
        console.log("".concat(checksum3));
      }
    }

    if (inputContent.length === 10 && (firstchar < 65 || firstchar > 90)) {
      console.log("檢查首碼是否為大寫英文");
    }

    if (inputContent.length > 10 || inputContent.length < 8) {
      console.log("not any");
    }
  });
  var originalLog = console.log; //保存原始的 console.log() 方法
  //重寫 console.log() 方法

  console.log = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // 将所有参数拼接成字符串，并显示在 <div> 中
    resultDiv.textContent += args.join(' ') + '\n'; // 同时也调用原始的 console.log() 方法，保留在控制台中的输出

    originalLog.apply(console, args);
  };
});
//# sourceMappingURL=main.dev.js.map
