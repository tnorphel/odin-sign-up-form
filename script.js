let submit = document.querySelector('.submit');
submit.addEventListener('click', validate);

function validate() {
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirm-password');
    let passwordMatch = document.querySelector('.match');
    let requirement = document.querySelector('.requirements');

    let pwdRegex = /^(?=.+[0-9])(?=.+[a-z])(?=.+[A-Z]).{8,20}$/;
    //validate password
    if (password.value.match(pwdRegex) && password.value.length >=8 && password.value.length <= 20) {
        password.classList.remove('invalid');
        password.classList.add('valid');
        requirement.textContent = "";
    } else {
        password.classList.remove('valid');
        password.classList.add('invalid');
        requirement.setAttribute('style', 'font-size: 10px; font-style: italic; color: red;');
        requirement.textContent = "Should contain at least a lowercase letter, an uppercase letter, a digit.\n It should be minimum 8 and maximum 20 characters long.";
    }
    //check if passwords match
    if (password.value === confirmPassword.value) {
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        passwordMatch.textContent = "";
    } else {
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        passwordMatch.setAttribute('style', 'font-size: 10px; font-style: italic; color: red;');
        passwordMatch.textContent = "*Passwords do not match";
    }
}
