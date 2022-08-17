const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const sname = document.querySelector("#signup-name");
const spassword = document.querySelector("#signup-password");
const semail = document.querySelector("#signup-email");
const form = document.querySelector("#signup-form");
const form2 = document.querySelector("#login-form");
const signup = document.querySelector("form-container sign-up-container");
document.querySelector("#login").disabled = true;

form.addEventListener("submit", (e) => {
    const sname = document.querySelector("#signup-name").value;
    localStorage.setItem("signupname", sname)

})
signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));