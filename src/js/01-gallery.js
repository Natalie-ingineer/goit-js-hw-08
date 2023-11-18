// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import 'simplelightbox/dist/simple-lightbox.min.css';

import SimpleLightbox from 'simplelightbox';

const container = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>

`
  )
  .join('');

container.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a', {
  sourceAtt: 'href',
  captionsData: 'alt',
  captionDelay: 250,
});
