"use strict";

// // 왜 express를 써야하는지 체감할수 있는 코드들

// const http = require("http") // http는 내장모듈이라 npm으로 따로 받을필요없음.
// const app = http.createServer((req, res) => { // 콜백함수를 작성해주고, req에 탄 url로 들어오면 / 이후에 있는 url들을 파싱할수있다는것.
//     res.writeHead(200, { "content-Type" : "test/html; charset=utf-8" }); // 내가 보내는게 text 는 html이고 charset은 utf-8이니까 해석해라.
//     if (req.url === '/') { // http에서는 send라는 메소드가 없다. 따라서 end
//         res.end("여기는 루트 입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     } // 여기까지만 쓰면 한글이 깨져서 나온다.따라서 res.writeHead를 이용해서 이슈처리 (여기서 부터 이슈고 코드도 가독성이 떨어짐.)
// });
// app.listen(3001, () => { // 루트 경로가 없다면 빙빙빙 돌기만 한다.
//     console.log("http로 가동된 서버입니다.");
// });

// 아래는 express를 다뤄서 만든 서버이다.

// 모듈
const express = require("express"); // express 모듈 npm install express -s
const app = express();


// 라우팅
const home = require("./src/routes/home"); // ./routes/home 에 있는 js들을 불러와줘

// 앱 세팅
app.set("views", "./src/views"); // views 라는 엔진 세팅 npm install ejs -s
app.set("view engine", "ejs"); // view 엔진을 ejs를 쓰겠다.

// use는 미들 웨어를 등록해주는 메서드이다. 
app.use("/", home); 
app.use(express.static(`${__dirname}/src/public`)) // static이란 메서드로 정적 경로를 추가해줄것임. 

//__dirname는 현재 디렉토리이름을 가져오는것 현재 app.js가 있는 디렉토리이름을 가져오게된다.


// app 내보내주기
module.exports = app;



// 아래 두개의 get은 브라우저가 요청한 경로로 이동해주는 라우팅기능이다. (정말 간단한것)
// app.get("/", (req, res) => { // 브라우저에서 "/" 경로로 들어오면 ~ 동작을 해주겠다.
//     res.render("home/index")
// });

// app.get("/login", (req,res) => { // /<- 꼭 넣어줘야한다.
//     res.render("home/login")
// });

// 이것만 있으면 서버가 뜬다. 주석처리 한 이유는 모듈화를 해줬기 떄문.
// app.listen(PORT,() => {
//     console.log("서버 가동")
// });