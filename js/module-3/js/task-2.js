'use strict';
console.log('Task-2');

/* Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств. */

/* const countProps = function (obj) {
  // твой код
  const objKeys = Object.keys(obj);
  return objKeys.length;
}; */

// ||

const countProps = function (obj) {
  // твой код
  let total = 0;
  for (const key in obj) {
    total += 1;
  }
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
