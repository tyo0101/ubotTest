"use strict";

// 引入 Express.js 模組
var express = require('express'); // 建立 Express 應用程式


var app = express(); // 設定使用 JSON 解析

app.use(express.json()); // 定義路由及處理程序

app.get('/', function (req, res) {
  res.send('歡迎使用後端 API');
}); // 啟動伺服器，監聽特定的埠

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("\u4F3A\u670D\u5668\u6B63\u5728\u76E3\u807D\u57E0 ".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
