'Use strict';

/*
Напиши скрипт управления формой логина.

*Обработка отправки формы form.login-form должна быть по событию submit.
*При отправке формы страница не должна перезагружаться.
*Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
*Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
*Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/

const form = document.querySelector('.login-form');

form.addEventListener('submit', formProcessing);

function formProcessing(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  if (!email.value.length || !password.value.length) {
    alert('Все поля должны быть заполнены');
    return;
  }
  if (password.value.length < 6) {
    alert('Пароль слишком короткий');
    return;
  }
  const formData = {
    [email.type]: email.value,
    [password.type]: password.value,
  };

  console.dir(formData);
  e.currentTarget.reset();
}

// Или так

// function formProcessing(e) {
//   e.preventDefault();
//   const { email, password } = e.currentTarget.elements;
//   if (!email.value.length || !password.value.length) {
//     alert('Все поля должны быть заполнены!');
//     return;
//   }
//   if (password.value.length < 6) {
//     alert('Пароль слишком короткий');
//     return;
//   }
//   const formInfo = {};
//   const formData = new FormData(e.currentTarget);
//   formData.forEach((value, name) => {
//     formInfo[name] = value;
//     return formInfo;
//   });
//   console.dir(formInfo);
//   e.currentTarget.reset();
// }
