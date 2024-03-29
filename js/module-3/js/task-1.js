'use strict';
console.log('Task-1');

/* Напиши скрипт, который, для объекта user, последовательно:
добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user['hobby'] = 'skydiving';
user.premium = false;
const userKeys = Object.keys(user);
for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}
