let menu = document.getElementById("menu-1");
let close = document.getElementById("close");
let nav = document.querySelector(`.header nav`);

menu.addEventListener("click",()=>{
    nav.classList.remove("hidden")
})
close.addEventListener("click",()=>{
    nav.classList.add("hidden")
})