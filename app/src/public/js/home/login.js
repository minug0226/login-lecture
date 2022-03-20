"use strict";

// DOM -> Document Object Model 일종의 인터페이스인데 이걸 사용해서 HTML의 존재하는 데이터들을 가져와서 사용하게해준다.

const id = document.querySelector("#id"); // 질의 선택자 ("선택자")를 가져올수있다. #id -> 태그에 id로 부여되는애를 선택해서 "id" 가져올수있도록
const password = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password : password.value,
    };
    // 데이터를 전달하는 과정
    fetch("/login", {
        method: "POST", // Restful API에 관련된것
        headers: { 
            "content-Type" : "application/json",
    },
        body: JSON.stringify(req) // JSON으로 감싸기 stringify는 문자열로 바꿔주는메서드 
    }).then((res) => res.json()).then((res) => res);
}