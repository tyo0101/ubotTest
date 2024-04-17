"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var checkAccount = _interopRequireWildcard(require("./checkAccount.js"));

var checkAccount2 = _interopRequireWildcard(require("./checkAccount2.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('NumberForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var inputContent = document.getElementById('NumberInput').value;

    var _char = inputContent.charAt(3);

    var char2 = inputContent.charAt(4);
    var suJect = inputContent.substring(3, 5);
    var firstThreeChars = inputContent.substring(0, 3);

    if (_char === '2' && char2 === '0') {
      var checksum2 = checkAccount2.validateAccount(inputContent);
      console.log(checksum2);
    } else if (firstThreeChars >= '001' && firstThreeChars <= '007' && (suJect === '30' || suJect === '40' || suJect === '66')) {
      var _checksum = checkAccount2.validateAccount(inputContent);

      console.log(_checksum);
    } else {
      var checksum = checkAccount.validateAccount(inputContent);
      console.log(checksum);
    }
  });
});
//# sourceMappingURL=main.dev.js.map
