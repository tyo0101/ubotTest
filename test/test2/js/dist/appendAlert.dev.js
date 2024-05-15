"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendAlert = appendAlert;
var alertPlaceholder = document.getElementById('result'); // 导出 appendAlert 函数

function appendAlert(message, type) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = "\n    <div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">\n      <div>").concat(message, "</div>\n    </div>\n  "); // alertPlaceholder.innerHTML = ''; // 清空原有内容

  alertPlaceholder.append(wrapper); // 将 alert 添加到页面中
}
//# sourceMappingURL=appendAlert.dev.js.map
