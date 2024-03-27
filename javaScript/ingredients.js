document.addEventListener("DOMContentLoaded", function(){
    let ingredients = document.querySelectorAll('.eachIngredient');

    ingredients.forEach(function(ingredient){
        ingredient.addEventListener('click', function(){
            let details = this.querySelector('.ingredientDetails');

            if(this.classList.contains('active')){
                let detailsHeight = details.scrollHeight;
                details.style.maxHeight = detailsHeight + "px";
                details.style.display = "block";
                this.style.height = detailsHeight + 60 + "px";
            }
            else{
                details.style.maxHeight = "0px";
                this.style.height = "50px";
            }
            this.classList.toggle('active');
        });
    });
});