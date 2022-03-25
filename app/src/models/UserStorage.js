"use strict";

const fs = require("fs").promises; 
// 파일시스템 promises를 쓰면 fs메서드 붙은 애들은 다 promise가 됨 유지보수가 하기 좋아진다
// promise가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기처리에 아주 효과적이다.

class UserStorage { 
    static #getUseInfo() { // 프라이빗한 변수나 메서드는 항상 최상단에 놔두자. 이건 getUserInfo와 다른것. 은닉화 해준것.
        const users = (JSON.parse(data)); // JSON.parse를 써야함. 그래야 16진수 읽을수있다.
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, password, name]
        const UserInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx]
        return newUser;
    }, {});
    
    return userInfo;
    }
    
    static getUsers(...fields) {
        // const users = this.#users;
        // reduce라는 배열의 메서드를 사용하기, 파라티머로는 새로운 오브젝트를 생성될거를 써주고, 이게 반복문인데 field의 대한 원소가 하나씩 순회됨.
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) { // users에 field에 해당하는 키값이 있는지 물어보는것
                newUsers[field] = users[field];
            };
            return newUsers;  // 이 리턴되는 newUsers가 파라미터인 newUsers에 들어가게 됨 계속 반복됨
        }, {});
        return newUsers;
    }    
    // 유저 정보
    static getUserInfo(id) {
     return  fs
            .readFile("./src/databases/users.json") // 불러와라 16진수로
            .then((data) => {
                return this.#getUseInfo(data, id) // 옴닉화된 메서드를 호출
            })
            .catch((err) => console.error(err));
    }

    static save(userInfo) { // 클라이언트에서 오는 데이터를 저장해주는 함수
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };
    }
};
  

module.exports = UserStorage;