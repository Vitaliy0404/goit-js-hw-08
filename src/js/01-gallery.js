// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
    import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
    import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createLi(galleryItems) {
    return galleryItems.reduce(
    (acc, { original, preview, description }) =>
        acc +
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        </li>`,
    ''
    );
}

const result = createLi(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', result);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});