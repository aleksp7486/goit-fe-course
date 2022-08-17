'use strict';
console.log('Task-5');

/* Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре. */

/* const checkForSpam = function (message) {
  // твой код
  const forbiddenWord1 = 'spam';
  const forbiddenWord2 = 'sale';
  if (
    message.toLowerCase().includes(forbiddenWord1) ||
    message.toLowerCase().includes(forbiddenWord2)
  ) {
    return true;
  }
  return false;
}; */

// или так

const forbiddenWord = 'spam, sale';
const checkForSpam = function (message, string = forbiddenWord) {
  const stringArr = string.split(', ');
  for (const word of stringArr) {
    if (message.toLowerCase().includes(word)) {
      return true;
    }
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
