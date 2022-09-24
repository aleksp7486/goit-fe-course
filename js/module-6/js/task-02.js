'Use strict';

/*
В HTML есть пустой список ul#ingredients.
В JavaScript есть массив строк.

Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.
*/

const ingredientsList = document.getElementById('ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = createIngredientsItems(ingredients);

function createIngredientsItems(arr) {
  return arr.map(elem => {
    const item = document.createElement('li');
    const title = document.createElement('p');
    item.classList.add('item');
    item.prepend(title);
    title.textContent = elem;
    return item;
  });
}

ingredientsList.prepend(...ingredientsItems);

// Или так

/* function createIngredientsItems(arr) {
  return arr.map(e => `<li class = "item"><p>${e}</p></li>`).join('');
}

ingredientsList.innerHTML = ingredientsItems; */
