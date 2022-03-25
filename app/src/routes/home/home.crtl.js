"use strict"; 

const User = require("../../models/User");

const output = {
        home :  (req, res) => { 
            res.render("home/index")
    },

        login : (req, res) => {
            res.render("home/login")
    },

        register: (req, res) => {
            res.render("home/register");
    },

};


const process = {
    login : async (req,res) => {
        const user = new User(req.body);
        const response = await user.login(); // async await 함수는 자체적으로 promise를 반환해주도록 되어있음.
        return res.json(response);
     },
     register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
      },
    };

module.exports = { // key : value 여야하는데 Key만 쓰면 Key : Key로 밸류가 된다
    output,
    process,
};