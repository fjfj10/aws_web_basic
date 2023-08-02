window.onload = () => {
    main();
}

function main() {
    var a = 10      //변수
    let b = 20;     //변수
    const c = 30;   //conset = 상수

    console.log(a);
    console.log(b);
    console.log(c);

    // var는 중복 변수 선언 가능 따라서 쓰지 말것 중복 때문에 오류남-> let사용
    var a = 40;
    console.log(a);
    // let b = 50;
    // let은 중복 변수선언 불가 대입은 가능
    b = 50;
    console.log(b);
    // c = 60;
    // console.log(c);

    let name = "김준일";
    // let name = '김준일';
    let age = 30;
    let score = 80.5;
    let status = true;

    console.log("이름: " + name + "-type(" + typeof(name) + ")");
    console.log("나이: " + age + "-type(" + typeof(age) + ")");
    console.log("성적: " + score + "-type(" + typeof(score) + ")");
    console.log("상태: " + status + "-type(" + typeof(status) + ")");

    console.log("10" == 10);     //true 출력 = 값만 비교
    console.log("10" === 10);   //false 출력 = 값 + 자료형 비교
    console.log("10" != 10);    //false 출력
    console.log("10" !== 10);   //true 출력

    let count;          //js는 값을 넣어야 자료형을 인지함
    console.log(count); //undefined: 변수 선언은 되었지만 초기화가 되지 않아 자료형 결정X
    let count2 = null;  // 값이 없는것과 null은 다름
    console.log(count2);

    if(typeof(count) === undefined) {
        console.log(true);      //값이 undefined인지 확인
    }
    if(typeof(count) === undefined || count === null || count === 0 || count === "") {
        console.log(true);      //빈값확인
    }

    // count = 0;      값이 없음 출력
    count = 10;     //값이 있음 출력
    //자바스크립트는 값이 undefined, null, 0, ""이면 false의 결과를 반환한다
    if(!count) {        //!를 붙이면 boolean값 반환
        console.log("값이 없음");
    }
    if(!!count) {
        console.log("값이 있음");
    }
}