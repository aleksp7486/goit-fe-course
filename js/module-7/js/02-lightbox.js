'Use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const items = createElements(galleryItems);
gallery.append(...items);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createElements(arr) {
  return arr.map(elem => {
    const { preview, original, description } = elem;
    const galleryItems = document.createElement('li');
    galleryItems.classList.add('gallery__items');
    const galleryItem = document.createElement('a');
    galleryItem.classList.add('gallery__item');
    galleryItem.setAttribute('href', original);
    galleryItems.append(galleryItem);
    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.setAttribute('src', preview);
    galleryImage.setAttribute('alt', description);
    galleryItem.append(galleryImage);
    return galleryItems;
  });
}
