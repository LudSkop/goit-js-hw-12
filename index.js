import{a as w,S as M,i as c}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const P="54654326-693c693fec20ccb1a66ef61d3";async function p(s,t){const i="https://pixabay.com/api/";try{const r=await w.get(i,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return console.log("photo:",r.data),r.data}catch(r){console.log(r)}}const f=document.querySelector(".gallery"),y=document.querySelector(".load-more"),g=document.querySelector(".loader"),R=new M(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const t=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:o,views:a,comments:S,downloads:q})=>`
    <li class="list">
        <a class="gallery-link" href="${r}">
            <img
            class="gallery-image"
            src="${i}"
            alt="${e}"
            />
        </a>
         <div class="stats">
                <p>❤️ Вподобайок: ${o}</p>
                <p>👁️ Переглядів: ${a}</p>
                <p>💬 Коментарів: ${S}</p>
                <p>⬇️ Завантажень: ${q}</p>
            </div>
    </li> 

    `).join("");f.insertAdjacentHTML("beforeend",t),R.refresh(),console.log("✅ Галерея створена!")}function $(){f.innerHTML=""}function h(){g.classList.add("is-visible")}function L(){g.classList.remove("is-visible")}function x(){y.classList.add("visible")}function d(){y.classList.remove("visible")}const u=document.querySelector(".form");u.querySelector("input");const b=document.querySelector(".current-page"),B=document.querySelector(".load-more");B.addEventListener("click",O);u.addEventListener("submit",H);let n=1,l="";async function O(){n++,console.log("тут кількість кліків на кнопку:",n),h(),d();try{const s=await p(l,n),{hits:t,totalHits:i}=s;m(t),v(i);const e=document.querySelector(".list").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),b.textContent=n}catch{c.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}finally{L()}}async function H(s){if(s.preventDefault(),l=u.querySelector("input").value.trim().toLowerCase(),n=1,!l){c.error({message:"This field cannot be empty. Please fill out this field.",position:"topRight"});return}$(),d(),h();try{const t=await p(l,n),{hits:i,totalHits:r}=t;if(i.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(i),v(r),b.textContent=n}catch(t){console.log(t),c.error({message:"Сталася помилка при запиті",position:"topRight"})}finally{L(),u.reset()}}function v(s){n*15>=s?(d(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):x()}
//# sourceMappingURL=index.js.map
