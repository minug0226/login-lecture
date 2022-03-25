"use strict";
class UserStorage { // 이런식의 코드는 좋지않습니다. 데이터베이스 이용하자.
    static #users = { // 정적  #변수 이러면 외부에서 못불러옴.
        id : ["minwook", "나개발", "김팀장"],
        password : ["1234", "1234", "123456"],
        name: ["민욱박", "스파이더맨", "김마루"],
    };

    // 이것을 이용하면 원하는 정보만 빼올수 있음.
    static getUsers(...fields) {
        const users = this.#users;
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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, password, name]
        const UserInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser;
        }, {});
        return userInfo;
    }
    
    static save(userInfo) { // 클라이언트에서 오는 데이터를 저장해주는 함수
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.psword);
        return { success: true };
    }
};
  

module.exports = UserStorage;