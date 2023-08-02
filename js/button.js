const plus = () => {
    // 연결된 html문서에서 선택자(querySelector)를 참고해라
    // .result인 h1의 정보를 다들고와서 resultObj.innerHTML = 0이 출력됌
    //가지고온 0은 text 따라서 parseInt 숫자로 바꿔줌
    const resultObj = document.querySelector(".result");
    let oldNumber = parseInt(resultObj.innerHTML);
    // oldNumber 이미 존재하는 수에 +1한값을 
    // 원래 0이었던 자리 resultObj.innerHTML에 넣어서 다시 출력
    resultObj.innerHTML = oldNumber + 1;
}

const  minus = () => {
    const resultObj = document.querySelector(".result");
    let oldNumber = parseInt(resultObj.innerHTML);
    
    resultObj.innerHTML = oldNumber - 1;
}
