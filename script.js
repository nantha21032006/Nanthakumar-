

const menu=document.querySelector(".menu");
const cross=document.getElementById("cross");
const menu_bar=document.getElementById("bars");

menu_bar.addEventListener("click",()=>{
menu.style.left="0";
});

cross.addEventListener("click",()=>{
menu.style.left="-100%";
});
