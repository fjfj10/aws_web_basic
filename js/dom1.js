// console.log(document.getElementById("box1"));
// console.log(document.getElementsByClassName("box2")[0]);
//list형태로 들고옴 = 인덱스로 꺼내기 가능
// console.log(document.getElementsByTagName("div")[0]);
//list형태로 들고옴 = 인덱스로 꺼내기 가능


const box1 = document.getElementById("box1");
const box2Array = document.getElementsByClassName("box2");
const divArray = document.getElementsByTagName("div");

//위와 다르게 고급선택자까지 사용가능
const box1_qs = document.querySelector("#box1:hover");
const box2Array_qs = document.querySelectorAll(".box2");
//
const usernameInput = box2Array_qs[1].querySelector(".username-input")
const divArray_qs = document.querySelectorAll("div");

// box2Array_qs[0].value 에서 []를 안주면 첫번째를 들고옴 = [0]은 생략가능
// box2Array_qs[1].value = "text";
usernameInput.vlaue = "text";
//.box2 .username-input 선택가능
console.log(box2Array_qs);

//
box1.innerHTML = '<input type = "password">';
// box2Array[1].innerHTML = '<input type = "text">';