let menuButton = document.querySelector('#menu-button');
let menuContentIcons = document.querySelectorAll('.menu-content-icon');
let menuContentText = document.querySelector('.menu-content-text');
let menuContentTexts = document.querySelectorAll('.menu-content-text');

menuButton.addEventListener("click", () => {

    if(menuContentText.classList.contains('active')){
        menu.classList.remove("active");
        menuContentIcons.forEach(icon => icon.classList.remove("active"));
        menuContentTexts.forEach(text => text.classList.remove("active"));
    }
    else{
        menu.classList.add("active");
        menuContentIcons.forEach(icon => icon.classList.add("active"));
        menuContentTexts.forEach(text => text.classList.add("active"));
    }
});

// menu.addEventListener("mouseout", () => {
    
// });