import{a as q,S as w,i as c}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const M="54654326-693c693fec20ccb1a66ef61d3";async function f(s,t){const i="https://pixabay.com/api/";try{const r=await q.get(i,{params:{key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return console.log("photo:",r.data),r.data}catch(r){console.log(r)}}const p=document.querySelector(".gallery"),y=document.querySelector(".load-more"),g=document.querySelector(".loader"),P=new w(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:o,views:n,comments:v,downloads:S})=>`
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
                <p>👁️ Переглядів: ${n}</p>
                <p>💬 Коментарів: ${v}</p>
                <p>⬇️ Завантажень: ${S}</p>
            </div>
    </li> 

    `).join("");p.insertAdjacentHTML("beforeend",t),P.refresh(),console.log("✅ Галерея створена!")}function R(){p.innerHTML=""}function m(){g.classList.add("is-visible")}function L(){g.classList.remove("is-visible")}function $(){y.classList.add("visible")}function d(){y.classList.remove("visible")}const u=document.querySelector(".form");u.querySelector("input");const B=document.querySelector(".load-more");B.addEventListener("click",O);u.addEventListener("submit",H);let a=1,l="";async function O(){a++,console.log("тут кількість кліків на кнопку:",a),m(),d();try{const s=await f(l,a),{hits:t,totalHits:i}=s;h(t),b(i);const e=document.querySelector(".list").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch{c.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}finally{L()}}async function H(s){if(s.preventDefault(),l=u.querySelector("input").value.trim().toLowerCase(),a=1,!l){c.error({message:"This field cannot be empty. Please fill out this field.",position:"topRight"});return}R(),d(),m();try{const t=await f(l,a),{hits:i,totalHits:r}=t;if(i.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i),b(r)}catch(t){console.log(t),c.error({message:"Сталася помилка при запиті",position:"topRight"})}finally{L(),u.reset()}}function b(s){a*15>=s?(d(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):$()}
//# sourceMappingURL=index.js.map
