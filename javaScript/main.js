let menu = document.querySelector('#menu');
let article = document.querySelector('article');
let menuButton = document.querySelector('#menu-button');
let menuContentIcons = document.querySelectorAll('.menu-content-icon');
let menuContentText = document.querySelector('.menu-content-text');
let menuContentTexts = document.querySelectorAll('.menu-content-text');


menu.addEventListener("mouseover", () => {
    menu.classList.add("active");
    article.classList.add("active");
    menuContentIcons.forEach(icon => icon.classList.add("active"));
    menuContentTexts.forEach(text => text.classList.add("active"));
});

menu.addEventListener("mouseout", () => {
    menu.classList.remove("active");
    article.classList.remove("active");
    menuContentIcons.forEach(icon => icon.classList.remove("active"));
    menuContentTexts.forEach(text => text.classList.remove("active"));
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

