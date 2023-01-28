// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector('.gallery');
console.log(galleryRefs);

function addGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
            </a>`
    )
    .join('');
}

galleryRefs.insertAdjacentHTML('beforeend', addGalleryItems(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
