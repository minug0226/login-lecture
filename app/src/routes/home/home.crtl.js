"use strict"; 

const UserStorage = require("../../models/UserStorage");

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
    login : (req,res) => {
        const user = new User(req.body);
        const response = user.login();
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