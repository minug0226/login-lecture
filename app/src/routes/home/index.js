"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.crtl"); // home.crtl 불러오기

// /<- 꼭 넣어줘야한다.
// 브라우저에서 "/" 경로로 들어오면 ~ 동작을 해주겠다.
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
// 외부 파일에서도 실행 할 수 있도록 module.exprots를 사용
module.exports = router;