'Use strict';

/*
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.
*/

const count = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', decrementCount);

incrementBtn.addEventListener('click', incrementCount);

function decrementCount() {
  --counterValue;
  count.textContent = counterValue;
}

function incrementCount() {
  ++counterValue;
  count.textContent = counterValue;
}
