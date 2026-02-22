
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector(".load-more")
const loader = document.querySelector(".loader");


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images){
      const markup = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>`
    <li class="list">
        <a class="gallery-link" href="${largeImageURL}">
            <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            />
        </a>
         <div class="stats">
                <p>❤️ Вподобайок: ${likes}</p>
                <p>👁️ Переглядів: ${views}</p>
                <p>💬 Коментарів: ${comments}</p>
                <p>⬇️ Завантажень: ${downloads}</p>
            </div>
    </li> 

    `).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
    console.log("✅ Галерея створена!");
}
export function clearGallery() {
    gallery.innerHTML = "";
};
export function showLoader() {
    loader.classList.add('is-visible');

};
export function hideLoader(){
    loader.classList.remove('is-visible');

}
export function showLoadMoreButton() {
    loadBtn.classList.add("visible");
 }
 
 //Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more. 
 // Нічого не повертає.


export function hideLoadMoreButton() {
    loadBtn.classList.remove('visible')
 }


 // Ця функція нічого не приймає, повинна прибирати клас
 //  для відображення кнопки Load more. Нічого не повертає.