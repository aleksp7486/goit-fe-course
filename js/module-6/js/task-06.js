'Use strict';

/*
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
*/

const input = document.querySelector('#validation-input');

input.addEventListener('blur', validCheck);
input.addEventListener('focus', removeClass);

function removeClass() {
  if (input.classList.contains('valid')) {
    input.classList.remove('valid');
  }
  if (input.classList.contains('invalid')) {
    input.classList.remove('invalid');
  }
}

function validCheck(e) {
  const elem = e.currentTarget;
  const elemDataLength = Number(elem.dataset.length);
  const elemCurrentLength = elem.value.length;
  if (!elemCurrentLength) {
    return;
  }
  if (elemDataLength === elemCurrentLength) {
    elem.classList.add('valid');
    return;
  }
  elem.classList.add('invalid');
}
