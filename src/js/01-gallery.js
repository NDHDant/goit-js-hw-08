import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalletyMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalletyMarkup(galleryItems) {
	return galleryItems.map(({preview, original, description}) => {
		return `
		<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="Image ${description}"/>
  </a>
</div>
		`
	}).join("");
};

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 300,
  captionPosition: "bottom",
});