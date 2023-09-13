(()=>{"use strict";console.log("loaded util.js file");const e=(e,t)=>parseInt(e*10**t)/10**t;console.log("loaded pageLoad.js file");const t=e=>{const t=document.querySelector(`.${e}`);t.classList.add(`${e}--disabled`);for(let e of t.children)e.setAttribute("disabled","true")},o=e=>{const t=document.querySelector(`.${e}`);t.classList.remove(`${e}--disabled`);for(let e of t.children)e.removeAttribute("disabled")};t("ad-form"),t("map__filters");const r=(e,t)=>e.filter((e=>t.includes(e)));fetch("https://23.javascript.pages.academy/keksobooking/data").then((e=>e.json())).then((e=>{F(D(e.slice(0,10))),o("map__filters"),(e=>{const t=document.querySelector(".map__filters");let o=e,a=e,s=e,n=e,l=e,c=e,i=e,d=e,u=e,p=e,h=e,g=[],y=[],m=[];var v;v=_.debounce((()=>(()=>{let e=D(m.slice(0,10));N(),F(e)})()),1e3),t.addEventListener("change",(t=>{const f=(t,o)=>e.filter((e=>{if(e.offer.features)return e.offer.features.includes(o)})),L=(e,t)=>{const o=t.indexOf(e);t.splice(o,1)};switch(t.target.id){case"housing-type":g.includes(o)&&L(o,g),"any"!==t.target.value&&(o=e.filter((e=>e.offer.type==t.target.value)),g.push(o));break;case"housing-price":g.includes(a)&&L(a,g),"any"!==t.target.value&&(a=e.filter((e=>{switch(t.target.value){case"low":return e.offer.price<1e4;case"middle":return e.offer.price>=1e4&&e.offer.price<=5e4;case"high":return e.offer.price>5e4}})),g.push(a));break;case"housing-rooms":g.includes(s)&&L(s,g),"any"!==t.target.value&&(s=e.filter((e=>e.offer.rooms>=t.target.value)),g.push(s));break;case"housing-guests":g.includes(n)&&L(n,g),"any"!==t.target.value&&(n=e.filter((e=>e.offer.guests>=t.target.value)),g.push(n));break;default:switch(g.includes(h)&&L(h,g),t.target.value){case"wifi":t.target.matches(":checked")?(l=f(0,"wifi"),y.push(l)):L(l,y);break;case"dishwasher":t.target.matches(":checked")?(c=f(0,"dishwasher"),y.push(c)):L(c,y);break;case"parking":t.target.matches(":checked")?(i=f(0,"parking"),y.push(i)):L(i,y);break;case"washer":t.target.matches(":checked")?(d=f(0,"washer"),y.push(d)):L(d,y);break;case"elevator":t.target.matches(":checked")?(u=f(0,"elevator"),y.push(u)):L(u,y);break;case"conditioner":t.target.matches(":checked")?(p=f(0,"conditioner"),y.push(p)):L(p,y)}if(1===y.length&&(h=y[0],g.push(h)),y.length>1){let e=y[0];y.slice(1).forEach((t=>{e=r(e,t)})),h=e,g.push(h)}}if(0===g.length&&(m=e),1===g.length&&(m=g[0]),g.length>1){let e=g[0];g.slice(1).forEach((t=>{e=r(e,t)})),m=e}v()}))})(e.slice())})).catch((e=>{alert("Извините, мы не смогли загрузть данные о других объявлениях. "+e)}));const a=e=>{const t=document.querySelector("main");let o=document.querySelector("#success").content.querySelector(".success").cloneNode(!0);"error"===e&&(o=document.querySelector("#error").content.querySelector(".error").cloneNode(!0));const r=()=>{t.removeChild(o),window.removeEventListener("click",r),window.removeEventListener("keydown",a)},a=e=>{"Escape"===e.code&&(console.log(e.code),t.removeChild(o),window.removeEventListener("keydown",a),window.removeEventListener("click",r))};t.appendChild(o),window.addEventListener("click",r),window.addEventListener("keydown",a)},s=(e,t)=>{const o=parseInt(e.value),r=parseInt(t.value);t.setCustomValidity(""),100===o&&0!==r&&t.setCustomValidity('Для 100 комнат подходит только вариант "не для гостей"'),100!==o&&0!==r&&r>o&&t.setCustomValidity("Число гостей не может превышать количество комнат"),100!==o&&0===r&&t.setCustomValidity('Вариант "не для гостей" подходит только для 100 комнат'),t.reportValidity()},n=(e,t,o,r)=>{t.addEventListener("change",(()=>{const a=t.files[0],s=a.name.toLowerCase();if(e.some((e=>s.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{"withBackground"===r?o.style.background=`#e4e4de center / contain no-repeat url(${e.result})`:(o.style.height="auto",o.src=e.result)})),e.readAsDataURL(a)}}))};console.log("loaded form.js file");const l=document.querySelector(".ad-form"),c=l.querySelector("#type"),i=l.querySelector("#price");n(["gif","jpg","jpeg","png"],l.querySelector(".ad-form__field input[type=file]"),l.querySelector(".ad-form-header__preview img"),"src");const d={bungalow:0,flat:1e3,house:5e3,palace:1e4},u=1e6,p=()=>{i.placeholder=d[c.value],i.min=d[c.value]};p(),c.addEventListener("change",(()=>{p()})),i.max=u,i.addEventListener("input",(()=>{var e,t,o,r;e=c,o=d,r=u,(t=i).setCustomValidity(""),t.value<o[e.value]&&t.setCustomValidity(`Извините, но цена для этого типа жилья не может быть ниже ${o[e.value]}`),t.value>r&&t.setCustomValidity(`Извините, цена любого жилья не может превышать ${r}`),t.reportValidity()}));const h=l.querySelector("#timein"),g=l.querySelector("#timeout");h.addEventListener("change",(()=>{g.value=h.value})),g.addEventListener("change",(()=>{h.value=g.value}));const y=l.querySelector("#title");y.addEventListener("input",(()=>{var e;(e=y).value.length<30?e.setCustomValidity(`не хватает ${30-e.value.length} симв`):e.value.length>100?e.setCustomValidity(`удалите лишние ${e.value.length-100} симв`):e.setCustomValidity(""),e.reportValidity()}));const m=l.querySelector("#room_number"),v=l.querySelector("#capacity"),f=()=>{for(let e of v.options)0==e.value?e.setAttribute("disabled","true"):e.removeAttribute("disabled"),100==m.value?0==e.value?e.removeAttribute("disabled"):e.setAttribute("disabled","true"):m.value<e.value&&e.setAttribute("disabled","true")};f(),m.addEventListener("change",(()=>{f(),s(m,v)})),v.addEventListener("change",(()=>{s(m,v)}));const k=l.querySelector("#address");k.setAttribute("readonly","true"),n(["gif","jpg","jpeg","png"],l.querySelector(".ad-form__upload input[type=file]"),l.querySelector(".ad-form__photo"),"withBackground");const w=(b=l,S=e=>{l.reset(),z(),a("success")},q=e=>{a("error")},()=>{fetch("https://23.javascript.pages.academy/keksobooking",{method:"POST",credentials:"same-origin",body:new FormData(b)}).then((e=>{if(e.ok)return e.json;throw new Error(`${e.status} ${e.statusText}`)})).then((e=>S())).catch((e=>q()))});var b,S,q;l.addEventListener("submit",(e=>{console.log("делаем сброс настроек по умолчанию"),e.preventDefault(),console.log("проводим валидацию формы"),((e,t)=>{t.setCustomValidity(""),e.value!==t.value&&t.setCustomValidity("Время заезда и выезда должны совпадать"),t.reportValidity()})(h,g),s(m,v),console.log("отправляем данные на сервер"),l.reportValidity()&&(console.log("ведь у нас все хорошо"),w())})),l.querySelector(".ad-form__reset").addEventListener("click",(()=>{z()})),console.log("loaded map.js file");const C=35.60684,E=139.74554;k.value=C+", "+E;const V=L.map("map-canvas").on("load",(()=>{o("ad-form"),console.log("load")})).setView({lat:C,lng:E},10);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(V);const x=L.icon({iconUrl:"../leaflet/img/main-pin.svg",iconSize:[52,52],iconAnchor:[26,52]}),j=L.marker({lat:C,lng:E},{draggable:!0,icon:x});j.addTo(V);let A={};j.on("moveend",(e=>{A=e.target.getLatLng(),k.value=parseInt(1e5*A.lat)/1e5+", "+parseInt(1e5*A.lng)/1e5,console.log(A)}));const $=L.icon({iconUrl:"../leaflet/img/pin.svg",iconSize:[40,40],iconAnchor:[20,40]}),I=document.querySelector("#card").content.querySelector(".popup"),D=t=>{let o=[];return t.forEach((t=>{const r=t.location.lat,a=t.location.lng,s=L.marker({lat:r,lng:a},{pinIcon:$}),n=I.cloneNode(!0);((t,{author:o,offer:r,location:a})=>{const s=t.querySelector(".popup__title");r.title?s.textContent=r.title:s.classList.add("visually-hidden");const n=t.querySelector(".popup__text--address"),l=e(a.lat,5),c=e(a.lng,5);a.lat||a.lng?n.textContent=l+", "+c:n.classList.add("visually-hidden");const i=t.querySelector(".popup__type");r.type?i.textContent=(e=>{switch(e){case"palace":return"Дворец";case"house":return"Дом";case"bungalow":return"Бунгало";case"flat":return"Квартира";default:return""}})(r.type):i.classList.add("visually-hidden");const d=t.querySelector(".popup__description");d?d.textContent=r.description:d.classList.add("visually-hidden");const u=t.querySelector(".popup__text--price");r.price?u.textContent=r.price+" ₽/ночь":u.classList.add("visually-hidden");const p=t.querySelector(".popup__text--capacity");r.rooms&&r.guests?p.textContent=r.rooms+" комнаты для "+r.guests+" гостей":p.classList.add("visually-hidden");const h=t.querySelector(".popup__text--time");r.checkin&&r.checkout?h.textContent="Заезд после "+r.checkin+", выезд до "+r.checkout:h.classList.add("visually-hidden");const g=t.querySelector(".popup__features");r.features?((e,t)=>{const o=document.createDocumentFragment();t.forEach((e=>{const t=document.createElement("li");t.classList.add("popup__feature"),t.classList.add("popup__feature--"+e),o.appendChild(t)})),e.replaceChildren(),e.appendChild(o)})(g,r.features):g.classList.add("visually-hidden"),((e,t,o)=>{const r=document.createDocumentFragment(),a=o.querySelector(".popup__photo");t?t.forEach((e=>{const t=a.cloneNode(!0);t.src=e,r.appendChild(t)})):a.classList.add("visually-hidden"),e.replaceChildren(),e.appendChild(r)})(t.querySelector(".popup__photos"),r.photos,t);const y=t.querySelector(".popup__avatar");y.src=o.avatar,y.onerror=function(){y.classList.add("visually-hidden")}})(n,t),s.bindPopup(n,{keepInView:!0}),o.push(s)})),o};let T=L.layerGroup();const F=e=>{T=L.layerGroup(e),T.addTo(V),console.log(e)},N=()=>{T.remove()},z=()=>{j.setLatLng({lat:C,lng:E})}})();
//# sourceMappingURL=main.bundle.js.map