'use strict';
console.log('Task-3');

/* Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач". */

/* const findBestEmployee = function (employees) {
  // твой код
  const employeesEntries = Object.entries(employees);
  let max = 0;
  let name;
  for (const entry of employeesEntries) {
    const EntryVar = {
      KEY: entry[0],
      VALUE: entry[1],
    };
    if (max < EntryVar.VALUE) {
      max = EntryVar.VALUE;
      name = EntryVar.KEY;
    }
  }
  return name;
}; */

// ||

const findBestEmployee = function (employees) {
  // твой код
  const tasksArr = Object.values(employees);
  const namesArr = Object.keys(employees);
  const maxTasks = tasksArr.indexOf(Math.max(...tasksArr));
  return namesArr[maxTasks];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
