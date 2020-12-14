mealContainer = document.getElementById('meal-container');
h1 = document.getElementsByClassName('h1');
meal_category = h1[0].id;
meal_category_id = h1[0].dataset.id;


function generateHTML(meal) {
  return `
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <h3 class="mb-3"><a class="meal-titles" href="/meals/${meal_category_id}/${meal.idMeal}">${meal.strMeal}</a></h3>
        </div>
        <div class="d-flex justify-content-center">
          <a class="meal-titles" href="/meals/${meal_category_id}/${meal.idMeal}">
          <img class="meal-category-img mb-5 img-thumbnail" src="${meal.strMealThumb}" alt="${meal.strMeal} image">
          </a>
          
        </div>
      </div>
  `;
}

async function getMealsByCategory() {
  res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal_category}`);
   
  meals = res.data.meals

  for (meal of meals) {
    let mealDiv = document.createElement('div');
    mealDiv.innerHTML = generateHTML(meal);
    mealContainer.append(mealDiv);
  }
}




getMealsByCategory();


