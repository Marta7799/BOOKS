var e=globalThis,t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o),o.register,o("kM5jX"),o("haS5e"),o("fQwj1"),o("a7nVE"),o("1fSMk");var s=o("lXnOV");const n=document.querySelector(".empty-list"),l=document.querySelector(".shopping-gallery"),r=()=>{let e=JSON.parse(localStorage.getItem("books"))||[],t=e.map(e=>e._id);return t},d=e=>{let t=document.createElement("div");t.classList.add("shop");let a=document.createElement("button");a.classList.add("shop__btn-trash"),t.appendChild(a);let o=document.createElement("img");o.classList.add("shop__photo"),o.src=e.book_image,t.appendChild(o);let s=document.createElement("div");s.classList.add("shop__amazon-book");let n=document.createElement("img");n.classList.add("shop__amazon"),s.appendChild(n);let r=document.createElement("img");r.classList.add("shop__icon-book"),s.appendChild(r),t.appendChild(s);let d=`
    <h2 class="shop__title">${e.title}</h2>
    <p class="shop__category">${e.category}</p>
    <p class="shop__text">${e.description}</p>
    <p class="shop__author">${e.author}</p>
  `,i=document.querySelectorAll(".shop__text");i.forEach(e=>{let t=e.textContent,a=t.indexOf(". ")+1;if(a>0){let o=t.substring(0,a),s=document.createElement("span");s.textContent="...",e.textContent=o,e.appendChild(s)}});let c=document.createElement("div");c.innerHTML=d,t.appendChild(c),l.appendChild(t)},i=async()=>{let e=r();if(0===e.length){n.classList.remove("hidden");let e=document.querySelector(".empty-list__text");e.textContent="Ta strona jest pusta, dodaj książki i przejdź do zam\xf3wienia.";let t=document.querySelector(".empty-list__image");t.src="/src/images/books-empty-page@1x.png",t.alt="Książki";return}n.classList.add("hidden"),e.forEach(async e=>{let t=await (0,s.fetchBookById)(e);d(t)})};i(),o("2DTLi"),o("eNCUi");//# sourceMappingURL=shopping-list.65d1f0b0.js.map

//# sourceMappingURL=shopping-list.65d1f0b0.js.map
