let isSmallScreen = window.matchMedia('(max-width: 767px)').matches;

function addClickListener() {
    let ingredients = document.querySelectorAll('.eachIngredient');
    ingredients.forEach(function(ingredient) {
        ingredient.addEventListener('click', clickHandler);
    });
}

function removeClickListener() {
    let ingredients = document.querySelectorAll('.eachIngredient');
    ingredients.forEach(function(ingredient) {
        ingredient.removeEventListener('click', clickHandler);
    });
}

function clickHandler() {
    let details = this.querySelector('.ingredientDetails');

    if (this.classList.contains('active')) {
        let detailsHeight = details.scrollHeight;
        details.style.maxHeight = detailsHeight + "px";
        details.style.display = "block";
        this.style.height = detailsHeight + 60 + "px";
    } else {
        details.style.maxHeight = "0px";
        this.style.height = "50px";
    }
    this.classList.toggle('active');
}

function handleResize() {
    let newIsSmallScreen = window.matchMedia('(max-width: 767px)').matches;
    if (newIsSmallScreen !== isSmallScreen) {
        isSmallScreen = newIsSmallScreen;
        if (isSmallScreen) {
            addClickListener();
        } else {
            removeClickListener(); // 큰 화면일 때 이벤트 리스너 제거
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (isSmallScreen) {
        addClickListener();
    }
});

window.addEventListener('resize', handleResize);