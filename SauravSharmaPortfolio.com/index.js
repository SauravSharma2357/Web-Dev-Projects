let theme = document.getElementById("themeButton");
let dark = document.querySelector("body");
theme.addEventListener('click',()=>{
    dark.classList.toggle('darkTheme');
})