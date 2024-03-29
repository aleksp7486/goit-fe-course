'Use strict';

/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
*/

const fontSizeCtrl = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

fontSizeCtrl.addEventListener(
  'change',
  e => (text.style.fontSize = `${e.currentTarget.value}px`),
);
