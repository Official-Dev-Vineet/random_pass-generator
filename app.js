const inputVal = document.querySelector("#number");
let pass = [];
let passText = 'abcdefghijklmnopqrstuvwxyz1234567890{}()|>?<@#$%&*!';
const passArea = document.querySelector(".password-area");
const form = document.querySelector("form");
const clear = document.querySelector(".clear");
const defaultArea = document.querySelector('.default-pass-area');
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (inputVal.value > 6 && inputVal.value < 25) {
        let text = document.createElement('div');
        text.classList.add('pass');
        var passData = '';
        for (let i = 1; i <= inputVal.value; i++) {
            var random = Math.floor(Math.random() * passText.length)
            passData += passText.substring(random, random + 1)
        }
        text.innerText = passData + '  =  ' + passData.length;
        passArea.appendChild(text);
        pass.push(passData);
    }
    else {
        let text = document.createElement('div');
        text.classList.add('pass');
        var passData = '';
        for (let i = 1; i <= 12; i++) {
            var random = Math.floor(Math.random() * passText.length)
            passData += passText.substring(random, random + 1)
        }
        text.innerText = passData
        pass=localStorage.getItem('password').split(',')
        pass=pass.push(passData);
        localStorage.setItem('password', pass)
        console.log(pass)
    }
});
var defaultPass=localStorage.getItem('password').split(',');

for (let i = 0; i < defaultPass.length; i++) {
    let text = document.createElement('div');
    text.classList.add('pass');
    text.textContent = defaultPass[i];
    defaultArea.appendChild(text)
}