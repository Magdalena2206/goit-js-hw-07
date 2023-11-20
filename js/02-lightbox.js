import { galleryItems } from "./gallery-items";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const items = addGalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', items);

function addGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
        return `<li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}"  alt="${description}"/>
     </a></li>`
     }).join('');
        }



  
   const lightbox = new SimpleLightbox('.gallery a', {
       
       captionPosition: 'bottom',
       captionDelay: 250,
       
   });
 
