import { galleryItems } from './gallery-items.js';
// Change code below this line


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


const position = basicLightbox.create(
    `
  <img width="1280" height="auto" src="">`,
    {
      onShow: (position) => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: (position) => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );
  
gallery.addEventListener('click', imgClick);
  
  function imgClick(e) {
    e.preventDefault();
    const datasetSource = e.target.dataset.source;
    if (!datasetSource) return;
    position.element().querySelector('img').src = datasetSource;
    position.show();
  }
  
  function onEscPress(e) {
    if (e.code !== 'Escape') return;
    position.close();
  }


 