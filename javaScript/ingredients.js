let isSmallScreen = window.matchMedia('(max-width: 767px)').matches;
let eachIngredients = document.querySelectorAll('.eachIngredient');
let ingredientDetails = document.querySelectorAll('.ingredientDetails');

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

    if (!this.classList.contains('active')) {
        this.classList.add('active');
        details.style.display = "block";
        setTimeout(() => {
            let detailsHeight = details.scrollHeight;
            details.style.maxHeight = detailsHeight + "px";
            this.style.height = detailsHeight + 80 + "px";
        }, 10);
    } else {
        this.classList.remove('active');
        details.style.maxHeight = "0px";
        this.style.height = "80px";
    }
}


function handleResize() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        addClickListener();
        ingredientDetails.forEach(function(ingredientDetail){
            ingredientDetail.style.display = "none";
        });
        eachIngredients.forEach(function(eachIngredient){
            eachIngredient.style.height = "80px";
        });
        

    }
    else {
        removeClickListener();
        ingredientDetails.forEach(function(ingredientDetail){
            ingredientDetail.style.display = "flex";
        });
        eachIngredients.forEach(function(eachIngredient){
            eachIngredient.style.height = "50px";
        })
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (isSmallScreen) {
        addClickListener();
    }
});

window.addEventListener('resize', handleResize);



let foodInputButton = document.getElementById('foodInputButton');
let inputBox = document.getElementById('inputBox');

foodInputButton.addEventListener('click', function(){
    if(foodInputButton.classList.toggle('buttonClick')) inputBox.classList.add('addBox');
    else inputBox.classList.remove('addBox');
});


document.querySelector('#inputBox ul li:nth-child(7) input').value = new Date().toISOString().substring(0, 10);
