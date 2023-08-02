// window객체 = html 실행 브라우저 전체
const singinButtonOnClickHandle = () => {
    AccountSevice.getInstance().singin();
}

class AccountSevice {

    authUsername = "aaa";
    authPassword = "123"

    // #변수명 = private 접근지정자
    static #instance = null;
    //싱글톤
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AccountSevice();
        }
        return this.#instance;
    }

    singin() {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        //요소를 선택해서 들고옴
        // console.log(usernameInput);
        // console.log(passwordInput);
        // .value: value를 선택해서 들고옴
        // console.log(usernameInput.value);
        // console.log(passwordInput.value);

        if(username !== this.authUsername || password !== this.authPassword) {
            alert("사용자 정보를 확인하세요.");
            return;
        }
        alert("로그인 성공")
    }

}