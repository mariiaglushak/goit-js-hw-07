import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryObj = galleryItems
    .map((elementImg) => `<a class="gallery__item" href="${elementImg.original}">
  <img class="gallery__image" src="${elementImg.preview}" alt="${elementImg.description}" />
</a>`)
    .join("");
console.log(galleryObj)

const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML("beforeend", galleryObj);

const simplGallery = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250
});
console.log(SimpleLightbox)
console.log(simplGallery)
