import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryObj = galleryItems
    .map((elementImg) => `<div class="gallery__item">
  <a class="gallery__link" href="${elementImg.original}">
    <img
      class="gallery__image"
      src="${elementImg.preview}"
      data-source="${elementImg.original}"
      alt="${elementImg.description}"
    />
  </a>
</div>`)
    .join("");

const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML("beforeend", galleryObj);
gallery.addEventListener("click", galleryElem);

function galleryElem (event) {
    if (event.target.nodeName !== "IMG") {
      return;
    }
     const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
    instance.show()

    function modalEscClose(event) {
        if (event.key === "Escape") {
         instance.close()    
        }
    document.removeEventListener("keydown", modalEscClose)
    }
    document.addEventListener("keydown", modalEscClose)
   
  const imgTarget = event.target.dataset.img;
 event.preventDefault();
}





    
    
    
    
    
    
    



