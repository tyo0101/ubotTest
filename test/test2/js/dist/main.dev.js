"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var checkAccount = _interopRequireWildcard(require("./checkAccount.js"));

var checkAccount2 = _interopRequireWildcard(require("./checkAccount2.js"));

var addAccount = _interopRequireWildcard(require("./addAccount.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener("DOMContentLoaded", function () {
  var generateButton = document.getElementById("generateVariants");
  generateButton.addEventListener("click", function (event) {
    event.preventDefault(); // 調用 generateVariants() 函數處理表單提交並獲取生成的變體

    var variants = addAccount.generateVariants(); // 遍歷每個變體，並計算檢查碼

    variants.forEach(function (variant) {
      var _char = variant.charAt(3);

      var char2 = variant.charAt(4);
      var suJect = variant.substring(3, 5);
      var firstThreeChars = variant.substring(0, 3);
      var invalidSubjects = ["10", "20", "50", "51", "77", "88"];

      if (!invalidSubjects.includes(suJect)) {
        console.log("科目別錯誤");
      } else if (_char === "2" && char2 === "0") {
        var checksum2 = checkAccount2.validateAccount(variant);
        console.log(checksum2);
      } else if (firstThreeChars >= "001" && firstThreeChars <= "007" && (suJect === "30" || suJect === "40" || suJect === "66")) {
        var _checksum = checkAccount2.validateAccount(variant);

        console.log(_checksum);
      } else {
        var checksum = checkAccount.validateAccount(variant);
        console.log(checksum);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("NumberForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputContent = document.getElementById("NumberInput").value;

    var _char2 = inputContent.charAt(3);

    var char2 = inputContent.charAt(4);
    var suJect = inputContent.substring(3, 5);
    var firstThreeChars = inputContent.substring(0, 3);
    var invalidSubjects = ["10", "20", "50", "51", "77", "88"]; // 檢查科目別是否為無效值

    if (!invalidSubjects.includes(suJect)) {
      console.log("科目別錯誤");
    } else if (_char2 === "2" && char2 === "0") {
      var checksum2 = checkAccount2.validateAccount(inputContent);
      console.log(checksum2);
    } else if (firstThreeChars >= "001" && firstThreeChars <= "007" && (suJect === "30" || suJect === "40" || suJect === "66")) {
      var _checksum2 = checkAccount2.validateAccount(inputContent);

      console.log(_checksum2);
    } else {
      var checksum = checkAccount.validateAccount(inputContent);
      console.log(checksum);
    }
  });
});
//# sourceMappingURL=main.dev.js.map
