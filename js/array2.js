window.onload = () => {
    lodeBookList();
};

const bookList = new Array();

bookList.push({
    bookname: "자바 웹 개발 워크북",
    author: "구멍가게 코딩단",
    publisher: "프리렉"
});
bookList.push({
    bookname: "Python으로 시작하는 빅데이터 분석 및 인공지능 개정 2판",
    author: "조준모",
    publisher: "인피니티북스"
});
bookList.push({
    bookname: "Do it! HTML+CSS+자바스크립트 웹 표준의 정석",
    author: "고경희",
    publisher: "이지스퍼블리싱"
});
bookList.push({
    bookname: "도서4",
    author: "저자4",
    publisher: "출판사4"
});
bookList.push({
    bookname: "도서5",
    author: "저자5",
    publisher: "출판사5"
});

const lodeBookList = () => {
    const OlBookList = document.querySelector(".book-list");

    OlBookList.innerHTML = bookList.map((book) => {
        return `
            <li>
                <span>${book.bookname}</span> / <span>${book.author}</span> / <span>${book.publisher}</span>
            </li>
        `
    }).join("");

    //for문으로도 쓸 수 있다
    // for(let i = 0; i < bookList.length; i++) {
    //     OlBookList.innerHTML += `
    //         <li>
    //             <span>${bookList[i].bookname}</span> / <span>${bookList[i].author}</span> / <span>${bookList[i].publisher}</span>
    //         </li>
    //     `;
    // }
};

const addBookOnClickHandle = () => {
   //1. 객체 만들고
    const book = {
        //2. input한 값 가지고 와서
        bookname: document.querySelector(".book-name").value,
        author: document.querySelector(".author").valuel,
        publisher: document.querySelector(".publisher").value
    }
    //3. 객체를 push 해준다
    bookList.push(book);
    // 추가된 list를 불러온다 -> 저장은 안됌 새로고침하면 날아감
    lodeBookList();
}


