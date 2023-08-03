window.onload = () => {
    const cupimg = document.querySelector(".img-border img");
    cupimg.src = "./imges/cup1.jpg";
    //이벤트를 추가 -> HTML에서 onclick를 준 것과 같음
    //<img src="" alt="" onclick="cupimgOnClickHandle">
    cupimg.onclick = cupimgOnClickHandle;
    //함수를 바로 넣어도 되지만 코드가 더러워짐
    // cupimg.onclick = (e) => {
    //     if(e.target.src.includes("cup1")) {
    //         e.target.src = "./imges/cup2.jpg"
    //     }else {
    //         e.target.src = "./imges/cup1.jpg"
    //     }
    
    // document.onclick = () => {
    //     if(cupimg.src.includes("cup1")) {
    //         cupimg.src = "./imges/cup2.jpg"
    //     }else {
    //         cupimg.src = "./imges/cup1.jpg"
    //     }
    // }
}

//e = 이벤트 객체
// e.target= document.querySelector(".img-border img") 동일한 객체
const cupimgOnClickHandle = (e) => {
    if(e.target.src.includes("cup1")) {
        e.target.src = "./imges/cup2.jpg"
    }else {
        e.target.src = "./imges/cup1.jpg"
    }
}