let menu = document.querySelector('#menu');
let article = document.querySelector('article');
let home = document.querySelector('#home');
let menuButton = document.querySelector('#menu-button');
let menuContentIcons = document.querySelectorAll('.menu-content-icon');
let menuContentTexts = document.querySelectorAll('.menu-content-text');

let logoText = document.getElementById('logo-text');

//메뉴

menu.addEventListener("mouseover", () => {
    menu.classList.add("active");
    article.classList.add("active");
    home.classList.add("active");
    menuContentIcons.forEach(icon => icon.classList.add("active"));
    menuContentTexts.forEach(text => {
        text.style.display = "flex";
        text.style.animation = "fadeIn 1s ease forwards";
    });
});

menu.addEventListener("mouseout", () => {
    menu.classList.remove("active");
    article.classList.remove("active");
    home.classList.remove("active");
    menuContentIcons.forEach(icon => icon.classList.remove("active"));
    menuContentTexts.forEach(text => {
        text.style.animation = "fadeOut 1s ease forwards";
        text.addEventListener("animationend", function(){
            if(!menu.classList.contains("active")){
                text.style.display = "none";
            }
        });
    });
});

menuButton.addEventListener("click", () => {

    if(menuContentText.classList.contains('active')){
        menu.classList.remove("active");
        article.classList.remove("active");
        menuContentIcons.forEach(icon => icon.classList.remove("active"));
        menuContentTexts.forEach(text => text.classList.remove("active"));
    }
    else{
        menu.classList.add("active");
        article.classList.add("active");
        menuContentIcons.forEach(icon => icon.classList.add("active"));
        menuContentTexts.forEach(text => text.classList.add("active"));
    }
});



//로고 텍스트

function adjustLogoText(){
    if(window.innerWidth <= 767){
        logoText.style.opacity = "0";
        menuButton.style.opacity = "1";
    }
    else{
        logoText.style.opacity = "1";
        menuButton.style.opacity = "0";
    }
}

function adjustLogoTextResize(){
    if(window.innerWidth <= 767){
        logoText.style.animation = "fadeOut 0.5s ease forwards";
        menuButton.style.animation = "fadeIn 0.5s ease forwards";
    }else{
        menuButton.style.animation = "fadeOut 0.5s ease forwards";
        logoText.style.animation = "fadeIn 0.5s ease forwards";
    }
}

window.addEventListener("DOMContentLoaded", adjustLogoText);

window.addEventListener("resize", adjustLogoTextResize);
