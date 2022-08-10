'use strict';
console.log('Task-5');

/* Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
Ниже приведен список стран и стоимость доставки.
Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов */

const china = 'Китай';
const chili = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';
const chinaPrice = 100;
const chiliPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;
let message;
const country = prompt('Укажите страну:');
function showMessage(country, price) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
if (country === null) {
  message = 'Отменено пользователем';
} else if (
  country.toLowerCase() === china.toLowerCase() ||
  country.toLowerCase() === chili.toLowerCase() ||
  country.toLowerCase() === australia.toLowerCase() ||
  country.toLowerCase() === india.toLowerCase() ||
  country.toLowerCase() === jamaica.toLowerCase()
) {
  switch (country.toLowerCase()) {
    case china.toLowerCase():
      showMessage(china, chinaPrice);
      break;
    case chili.toLowerCase():
      showMessage(chili, chiliPrice);
      break;
    case australia.toLowerCase():
      showMessage(australia, australiaPrice);
      break;
    case india.toLowerCase():
      showMessage(india, indiaPrice);
      break;
    case jamaica.toLowerCase():
      showMessage(jamaica, jamaicaPrice);
      break;
  }
} else {
  message = 'В вашей стране доставка не доступна';
}
alert(message);
