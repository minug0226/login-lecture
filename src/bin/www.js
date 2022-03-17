"use strict";

const app = require("../app") // 상위 폴더 app을 찾아가기.
// 서버 포트
const PORT = 3000;

app.listen(PORT,() => {
    console.log("서버 가동")
});