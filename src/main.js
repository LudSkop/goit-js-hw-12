

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Імпортуємо наші функції
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = form.querySelector("input");
const loadMore = document.querySelector(".load-more");
loadMore.addEventListener("click", onLoadMore)

form.addEventListener("submit", handleSubmit);


let page = 1;
let query = "";

async function onLoadMore() {
    page++;
    showLoader();
    hideLoadMoreButton();
    try {
        const data = await getImagesByQuery(query, page);
        const { hits: images, totalHits } = data; // отримуємо images і totalHits
        console.log(data);
        createGallery(images);
        if (page * 15 >= totalHits) {
            hideLoadMoreButton(); // більше нема зображень
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        } else {
            showLoadMoreButton(); // ще є зображення
        } 

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
        const images= data.hits;
     if (images.length === 0){
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
        })
        return;

     } 
     console.log("Знайдено зображень:", images.length);
     createGallery(images);
     showLoadMoreButton(); // ✅ показуємо кнопку після успішного завантаження
    
    
          
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

