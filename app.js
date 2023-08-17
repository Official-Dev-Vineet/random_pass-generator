const inputVal = document.querySelector("#number");
inputVal.addEventListener('mouseover',()=>{
    inputVal.focus();
})
let pass = [];
let passText = 'abcdefghijklmnopqrstuvwxyz1234567890{}()|>?<@#$%&*!';
const passArea = document.querySelector(".password-area");
const form = document.querySelector("form");
const clear = document.querySelector(".clear");
const defaultArea = document.querySelector('.default-pass-area');
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (inputVal.value > 6 && inputVal.value < 25) {
        let text = document.createElement('textarea');
        text.classList.add('pass');
        var passData = '';
        for (let i = 1; i <= inputVal.value; i++) {
            var random = Math.floor(Math.random() * passText.length)
            passData += passText.substring(random, random + 1)
        }
        text.textContent = passData
        passArea.appendChild(text);
        pass.push(passData);
        localStorage.setItem('password',pass);
    }
    else {
        let text = document.createElement('textarea');
        text.classList.add('pass');
        var passData = '';
        for (let i = 1; i <= 12; i++) {
            var random = Math.floor(Math.random() * passText.length)
            passData += passText.substring(random, random + 1)
        }
        text.innerText = passData
        defaultArea.appendChild(text);
    }
});
function getItems(){
   let pass=localStorage?.getItem('password')?.split(',');
   pass?.map((value,index)=>{
    let textarea=document.createElement('textarea')
    textarea.classList.add('pass');
    textarea.value=value;
    passArea.appendChild(textarea);
   })
}
getItems();
clear.addEventListener('click',()=>{
    localStorage?.clear();
passArea.textContent=""
})
document.querySelectorAll('textarea').forEach((area)=>{
    area.addEventListener('mouseover',()=>{
        area.focus()
    })
})
