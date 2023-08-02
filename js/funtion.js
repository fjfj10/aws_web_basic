// function add(x, y) {
//     return x + y;
// }

// console.log(add(10, 20));

function sub(x, y) {
    return;     //중간에 끊김(return 원래 기능대로 작동함)
}

//호이스팅 : 먼저 부르고 구현하는것이 가능
// 초기화는 안됌 선언만 호이스팅 가능
console.log(add(10, 20));

function add(x, y) {
    return x + y;
}

// 변수에 함수를 정의해서 넣음 = 람다식
const printInfo = function () {
    console.log("정보 출력")
};

console.log(printInfo);

printInfo();    //함수를 대입했기 때문에 함수처럼 호출 가능

console.log(typeof(printInfo));    //type에 funtion타입이 있음

function callback(fx) {     //함수의 정의를 매개변수로 줌
    console.log("콜백 함수")
    fx();       //fx에 어떤 함수를 주는지에 따라 달라짐 변수처럼 사용가능
}

callback(printInfo);

const fx1 = function (a) {
    console.log("a: " + a);
}

fx1(10);

//화살표함수(람다)

// const fx2 = function (b) {
//     console.log("b: " + b);
// }

const fx2 = (b) => {
    console.log("b: " + b);
}

fx2(20);