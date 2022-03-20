"use strict"; 

const UserStorage = require("../../models/UserStorage");

const output = {
home :  (req, res) => { 
   res.render("home/index")
    },

login : (req, res) => { 
    res.render("home/login")
    },
};


const process = {
    login : (req,res) => {
        const id = req.body.id,
        password = req.body.password;
        
        const users = UserStorage.getUsers("id", "password");


        
        const response = {};
        if (users.id.includes(id)) {
             const idx = users.id.indexOf(id);
             if (users.password[idx] === password) {
                 response.success = true;
                 return res.json(response);
             }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다."
        return res.json (response);
    },
};

module.exports = { // key : value 여야하는데 Key만 쓰면 Key : Key로 밸류가 된다
    output,
    process,
};