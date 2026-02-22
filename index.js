import{a as q,S as w,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const M="54654326-693c693fec20ccb1a66ef61d3";async function f(s,o){const r="https://pixabay.com/api/";try{const i=await q.get(r,{params:{key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return console.log("photo:",i.data),i.data}catch(i){console.log(i)}}const p=document.querySelector(".gallery"),y=document.querySelector(".load-more"),g=document.querySelector(".loader"),P=new w(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:v,downloads:S})=>`
    <li class="list">
        <a class="gallery-link" href="${i}">
            <img
            class="gallery-image"
            src="${r}"
            alt="${e}"
            />
        </a>
         <div class="stats">
                <p>❤️ Вподобайок: ${t}</p>
                <p>👁️ Переглядів: ${a}</p>
                <p>💬 Коментарів: ${v}</p>
                <p>⬇️ Завантажень: ${S}</p>
            </div>
    </li> 

    `).join("");p.insertAdjacentHTML("beforeend",o),P.refresh(),console.log("✅ Галерея створена!")}function $(){p.innerHTML=""}function h(){g.classList.add("is-visible")}function L(){g.classList.remove("is-visible")}function b(){y.classList.add("visible")}function d(){y.classList.remove("visible")}const u=document.querySelector(".form");u.querySelector("input");const O=document.querySelector(".load-more");O.addEventListener("click",R);u.addEventListener("submit",x);let c=1,l="";async function R(){c++,h(),d();try{const s=await f(l,c),{hits:o,totalHits:r}=s;console.log(s),m(o),c*15>=r?(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}finally{L()}}async function x(s){if(s.preventDefault(),l=u.querySelector("input").value.trim().toLowerCase(),c=1,!l){n.error({message:"This field cannot be empty. Please fill out this field.",position:"topRight"});return}$(),d(),h();try{const r=(await f(l,c)).hits;if(r.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log("Знайдено зображень:",r.length),m(r),b()}catch(o){console.log(o),n.error({message:"Сталася помилка при запиті",position:"topRight"})}finally{L(),u.reset()}}
//# sourceMappingURL=index.js.map
