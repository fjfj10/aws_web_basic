// 객체는 key와 value값으로 이루어 진다
const user = {
    username: null,
    password: null,
    name: null,
    email: null,
    toString: () => {
        return "user(" + user.username + ", " + user.password + ", " + user.name + ", " + user.email +")";
    },
}

user.username = "aaa";
user.password = "1234";
user.name = "김준일";
user.email = "aaa@gmail.com";

console.log(user.toString());
console.log(user);

class User {
    username;
    password;

    //생성자
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    usernameAndpasswordCheck(username, password) {
        console.log("입력한 아이디: " + username);
        console.log("입력한 비밀번호: " + password);

        if(username !== this.username && password !==this.password) {
            alert("로그인 실패");
            return;
        }
        alert("로그인 성공")
    }
}

const bbb = new User("bbb", "1234");

bbb.usernameAndpasswordCheck("ccc", "1234")