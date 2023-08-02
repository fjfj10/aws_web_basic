window.onload = () => {
    const numbers = [1,2,3,4,5];
    
    // const fx = (n) => {
    //     return n * 2;
    // }
    // const numbers2 = numbers.map(fx);
    
    //map에 함수를 바로 넣어 코드 줄이기
    const numbers2 = numbers.map((n) => {
        return n * 2;
    });
    //join을 쓰면 문자열로 변함 [1,2,3,4,5] -> 12345
    console.log(numbers.join(""));
    console.log(numbers2);

    console.log(userList);
    //` ${} `를 이용하면 문자열 안에 변수를 넣을 수 있다 
    console.log(`username: ${userList[0].username}`);
    // 출력값: username: aaa
    lodeUserList();
}

const userList = new Array();
// const userlist = []; 가능
userList.push({username: "aaa", password: "1111"});
userList.push({username: "bbb", password: "2222"});
userList.push({username: "ccc", password: "3333"});
userList.push({username: "ddd", password: "4444"});
userList.push({username: "eee", password: "5555"});
userList.push({username: "fff", password: "6666"});

const lodeUserList = () => {
    const userListTbody = document.querySelector(".user-list");

    for(let i = 0; i < userList.length; i++) {
        userListTbody.innerHTML += `
            <tr>
                <td>${userList[i].username}</td>
                <td>${userList[i].password}</td>
            </tr>
        `;
    }
    //forEach와 기능 동일
    //map: user를 가지고와서 구성을 변경함?
    const mapTest = userList.map((user) => {
        return`
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
            </tr>
        `
    });
    console.log(mapTest);

    userListTbody.innerHTML = mapTest.join("");
    
    //불필요한 변수 줄이기 가능
    userListTbody.innerHTML = userList.map((user) => {
        return`
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
            </tr>
        `
    }).join("");

    
};