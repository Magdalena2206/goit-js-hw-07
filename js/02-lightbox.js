import { galleryItems } from "./gallery-items";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const items = addGalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', items);

function addGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a></div>`;
    })
    .join('');
}



  
   const lightbox = new SimpleLightbox('.gallery a', {
       captionsData: 'alt',
       captionPosition: 'bottom',
       captionDelay: 250,
       
   });
 