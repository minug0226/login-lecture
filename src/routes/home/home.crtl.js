"use strict"; 

// 컨트롤러 작성 js이다.


const home =  (req, res) => { 
    res.render("home/index")
}

const login = (req,res) => { 
    res.render("home/login")
}

module.exports = { // key : value 여야하는데 Key만 쓰면 Key : Key로 밸류가 된다
    home,
    login,
};