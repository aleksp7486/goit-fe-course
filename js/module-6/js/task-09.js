'Use strict';

/*
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

Для генерации случайного цвета используй функцию getRandomHexColor.
*/

const btnChangeColor = document.querySelector('.change-color');

const colorSpan = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor);

function changeColor(e) {
  const color = getRandomHexColor();
  colorSpan.innerHTML = `${color}`;
  document.body.style.backgroundColor = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
