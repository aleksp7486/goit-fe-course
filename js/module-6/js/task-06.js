'Use strict';

/*
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
*/

const input = document.querySelector('#validation-input');

input.addEventListener('blur', validCheck);
input.addEventListener('focus', () =>
  input.classList.remove('valid', 'invalid'),
);

function validCheck(e) {
  const elem = e.currentTarget;
  if (!elem.value.length) {
    return;
  }
  if (Number(elem.dataset.length) === elem.value.length) {
    elem.classList.add('valid');
    return;
  }
  elem.classList.add('invalid');
}
