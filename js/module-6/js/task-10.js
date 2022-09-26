'Use strict';

/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

const boxes = document.querySelector('#boxes');
const controlsInput = document.querySelector('#controls input');
const controlsBtnCreate = document.querySelector('[data-create]');
const controlsBtnDestroy = document.querySelector('[data-destroy]');

controlsBtnCreate.addEventListener('click', createClick);
controlsBtnDestroy.addEventListener('click', destroyClick);

function createClick() {
  if (boxes.innerHTML) {
    return;
  }
  if (controlsInput.value > 100 || controlsInput.value < 1) {
    alert('Введите число от 1 до 100');
    controlsInput.value = 0;
    return;
  }
  const inputValue = controlsInput.value;
  boxes.insertAdjacentHTML('beforeend', createBoxes(inputValue));
}

function destroyClick() {
  boxes.innerHTML = '';
  controlsInput.value = 0;
}

function createBoxes(amount) {
  const elArr = [];
  const boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const boxColor = getRandomHexColor();
    const el = `<div style="margin: 10px; width: ${
      boxSize + i * 10
    }px; height:${boxSize + i * 10}px; background-color: ${boxColor};"></div>`;
    elArr.push(el);
  }
  const elStr = elArr.join('');
  return elStr;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
