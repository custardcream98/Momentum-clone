// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button"); 이렇게 해도 되고 혹은
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button"); // 이렇게 해도 됨

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);