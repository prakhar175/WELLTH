document.addEventListener("DOMContentLoaded", function() {
    const meals = document.querySelectorAll(".meal");
    let currentIndex = 0;
  
    function showMeal(index) {
        if (index < meals.length) {
            meals[index].classList.add("show");
            currentIndex = index;
        }
    }
  
    function hideMeal(index) {
        if (index < meals.length) {
            meals[index].classList.remove("show");
        }
    }
  
    function nextMeal() {
        hideMeal(currentIndex);
        currentIndex++;
        if (currentIndex >= meals.length) {
            currentIndex = 0;
        }
        showMeal(currentIndex);
    }

    function transitionToNextMeal() {
        nextMeal();
        setTimeout(transitionToNextMeal, 15000);
    }

    transitionToNextMeal();
  
    meals.forEach(function(meal) {
        meal.addEventListener("click", function() {
            hideMeal(currentIndex);
            currentIndex = (currentIndex + 1) % meals.length;
            showMeal(currentIndex);
        });
    });
});
