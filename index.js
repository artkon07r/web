let theme=document.querySelector(".theme");

theme.addEventListener("click",click_theme);

function click_theme(){
    document.querySelector("body").classList.toggle("theme_btn");
    document.querySelector(".call").classList.toggle("theme_btn_call");
    theme.classList.toggle("theme_btn");
}