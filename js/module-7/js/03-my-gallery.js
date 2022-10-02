'Use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const items = createElements(galleryItems);
gallery.append(...items);
gallery.addEventListener('click', showOriginalImage);

function createElements(arr) {
  return arr.map(elem => {
    const { preview, original, description } = elem;
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.setAttribute('href', original);
    galleryItem.append(galleryLink);
    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.setAttribute('src', preview);
    galleryImage.setAttribute('data-source', original);
    galleryImage.setAttribute('alt', description);
    galleryLink.append(galleryImage);
    return galleryItem;
  });
}

function showOriginalImage(evt) {
  evt.preventDefault();
  const item = evt.target.closest('div');
  const link = evt.target.closest('a');
  const image = evt.target;
  if (image.nodeName !== 'IMG' && !item.classList.contains('backdrop')) {
    return;
  }
  if (!item.classList.contains('backdrop')) {
    openModal();
    window.addEventListener('keydown', handlePressKey);
    return;
  }
  window.removeEventListener('keydown', handlePressKey);
  closeModal();

  function handlePressKey(evt) {
    if (evt.code !== 'Escape') {
      return;
    }
    window.removeEventListener('keydown', handlePressKey);
    closeModal();
  }
  function openModal() {
    item.classList.add('backdrop');
    link.classList.add('modal');
    /* */
    image.src = image.dataset.source;
  }
  function closeModal() {
    item.classList.remove('backdrop');
    link.classList.remove('modal');
  }
}

// Section observe

const onEntry = entries => {
  entries.forEach(entries => {
    if (entries.isIntersecting) {
      const entriesSectionId = entries.target.getAttribute('id');
      const activeLink = document.querySelector('.nav__link--active');
      if (activeLink) {
        activeLink.classList.remove('nav__link--active');
      }
      const nextLink = document.querySelector(`a[href='#${entriesSectionId}']`);
      nextLink.classList.add('nav__link--active');
    }
  });
};

const options = {
  threshold: 0.5,
};

const sections = document.querySelectorAll('.js-section');

const observer = new IntersectionObserver(onEntry, options);

sections.forEach(section => {
  observer.observe(section);
});
