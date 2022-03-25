"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    // async 를 쓰는 함수를 만들어야 await 사용 가능
    async login() {  
    const client = this.body;
        // 코드를 불러오고 데이터를 불러올때까지 기다려라 await
        // await은 항상 promise를 반환하는 아이한테만 해줄 수 있다.
        // .then() 으로도 접근해서 가져올 수는 있지만 await은 가독성이 좋아진다.
        // fs(파일시스템) 에서도 await으로 가져올 수 있다.
        // 편한대로 쓰자. 
    const { id, password } = await UserStorage.getUserInfo(client.id);

        if (id) {
            if(id === client.id && password === client.password) {
                return { success : true };
            }
            return { success : false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success : false, msg: "존재하지 않는 아이디입니다." };
    }

    
    register() { // 회원가입 정보를 UserStorage에 저장하기
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    };
};

module.exports = User;