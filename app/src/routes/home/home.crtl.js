"use strict"; 

// 컨트롤러 작성 js이다.

// 단순히 렌더링 해주는 함수


const output = {
home :  (req, res) => { 
   res.render("home/index")
    },

login : (req, res) => { 
    res.render("home/login")
    },
};

const users = {
    id : ["minwook", "나개발", "김팀장"],
    password : ["1234", "1234", "123456"],
};

const process = {
    login : (req,res) => {
        const id = req.body.id,
        password = req.body.password;

        if (users.id.includes(id)) {
             const idx = users.id.indexOf(id);
             if (users.password[idx] === password) {
                 return res.json({
                     success : true,
                 });
             }
        }

        return res.json ({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

module.exports = { // key : value 여야하는데 Key만 쓰면 Key : Key로 밸류가 된다
    output,
    process,
};