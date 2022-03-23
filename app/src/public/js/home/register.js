"use strict";

// DOM -> Document Object Model 일종의 인터페이스인데 이걸 사용해서 HTML의 존재하는 데이터들을 가져와서 사용하게해준다.

const id = document.querySelector("#id"); // 질의 선택자 ("선택자")를 가져올수있다. #id -> 태그에 id로 부여되는애를 선택해서 "id" 가져올수있도록
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confrimPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
        confrimPassword : confrimPassword.value,
    };
 
    // 프론트를 먼저 개발하기전에 백엔드 API를 먼저 만들고 하자.
    // 데이터를 전달하는 과정
    fetch("/register", {
        method: "POST", // Restful API에 관련된것, 담아서 전달할 것이기에 POST
        headers: { 
            "content-Type" : "application/json",
    },
        body: JSON.stringify(req) // JSON으로 감싸기 stringify는 문자열로 바꿔주는메서드 
        // 서버로 부터 응답이 오면 JSON 메서드를 호출해서 
    })
    .then((res) => res.json()) // JSON 메서드를 호출해서 서버에 응답이 다 받아와지는 순간  Promise 객체를 반환하게될거고
    .then((res) => { // 그 Promise 객체를 반환을 했으니 두번째 then으로 또 접근이 가능해짐, 거기서 res로 접근해서
        if (res.success) { // success라는걸 받아와서
            location.href = "/login"; // 성공하면 이동하게 함 (여기는 루트입니다.라는곳으로)
        } else { 
            alert(res.msg); // 실패했다고 뜬다.
        }
    })
    .catch((err) => { 
        console.error(new Error("회원가입 중 에러 발생"))
    });
}