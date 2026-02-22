

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Імпортуємо наші функції
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = form.querySelector("input");
const currentPage = document.querySelector(".current-page");
const loadMore = document.querySelector(".load-more");
loadMore.addEventListener("click", onLoadMore)

form.addEventListener("submit", handleSubmit);


let page = 1;
let query = "";

async function onLoadMore() {
    page++;
  
    console.log("тут кількість кліків на кнопку:", page);
    showLoader();
    hideLoadMoreButton();
    try {
        const data = await getImagesByQuery(query, page);
        const { hits: images, totalHits } = data; // отримуємо images і totalHits
        //console.log(data);
        createGallery(images);
        checkLoadMoreVisibility(totalHits);

        // отримуємо висоту першої картки
        const card = document.querySelector(".list");
        const cardHeight = card.getBoundingClientRect().height;

        // прокручуємо на дві висоти картки
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth"
        });
        currentPage.textContent = page; // ✅
       

    } catch (error){
        iziToast.error({
            message:`We're sorry, but you've reached the end of search results.`,
            position: 'topRight',
        })
    } finally {
        hideLoader();
       
    }
}

async function handleSubmit(event) {
    event.preventDefault();
    query = form.querySelector("input").value.trim().toLowerCase(); 
    page = 1; // ✅ скидаємо сторінку при новому пошуку  
   
    if (!query){
        iziToast.error({
            message:`This field cannot be empty. Please fill out this field.`,
            position: 'topRight',
        })
        return
    }
    
    
    clearGallery(); // Очищаємо галерею перед новим пошуком
    hideLoadMoreButton();
    showLoader(); // ПОКАЗУЄМО крутилку

   
    try {
    
        const data = await getImagesByQuery(query, page);
        const { hits: images, totalHits } = data; // ✅ витягуємо обидва
     if (images.length === 0){
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
        })
        return;

     } 
     //console.log("Знайдено зображень:", images.length);
     createGallery(images);
     checkLoadMoreVisibility(totalHits);
     currentPage.textContent = page; // ✅
     
    
    
          
    } catch (error) {
        console.log(error);
        iziToast.error({
            message: "Сталася помилка при запиті",
            position: "topRight",
        });
  
  } finally {
        hideLoader();
        form.reset();
    }
}

function checkLoadMoreVisibility(totalHits) {
    if (page * 15 >= totalHits) {
        hideLoadMoreButton();
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
        });
    } else {
        showLoadMoreButton();//ще є зображення
    }
}

