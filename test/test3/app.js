// 引入 Express.js 模組
const express = require('express');
// 建立 Express 應用程式
const app = express();
// 設定使用 JSON 解析
app.use(express.json());

// 定義路由及處理程序
app.get('/', (req, res) => {
    res.send('歡迎使用後端 API');
});

// 啟動伺服器，監聽特定的埠
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`伺服器正在監聽埠 ${PORT}`);
});
