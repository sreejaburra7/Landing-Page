// Script for navigation bar
let bar=document.querySelector("#bar");
let close=document.querySelector("#close");
let nav=document.querySelector("#nav-bar");
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}