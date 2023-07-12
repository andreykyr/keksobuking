(()=>{"use strict";const e=e=>{const t=document.querySelector(`.${e}`);t.classList.add(`${e}--disabled`);for(let e of t.children)e.setAttribute("disabled","true")},t=e=>{const t=document.querySelector(`.${e}`);t.classList.remove(`${e}--disabled`);for(let e of t.children)e.removeAttribute("disabled")};e("ad-form"),e("map__filters");const r=(e,t)=>e.filter((e=>t.includes(e)));fetch("https://23.javascript.pages.academy/keksobooking/data").then((e=>e.json())).then((e=>{F(D(e.slice(0,10))),t("map__filters"),(e=>{const t=document.querySelector(".map__filters");let a=e,s=e,o=e,n=e,c=e,i=e,l=e,d=e,u=e,p=e,h=e,y=[],v=[],m=[];var g;g=_.debounce((()=>(()=>{let e=D(m.slice(0,10));N(),F(e)})()),1e3),t.addEventListener("change",(t=>{const f=(t,r)=>e.filter((e=>{if(e.offer.features)return e.offer.features.includes(r)})),L=(e,t)=>{const r=t.indexOf(e);t.splice(r,1)};switch(t.target.id){case"housing-type":y.includes(a)&&L(a,y),"any"!==t.target.value&&(a=e.filter((e=>e.offer.type==t.target.value)),y.push(a));break;case"housing-price":y.includes(s)&&L(s,y),"any"!==t.target.value&&(s=e.filter((e=>{switch(t.target.value){case"low":return e.offer.price<1e4;case"middle":return e.offer.price>=1e4&&e.offer.price<=5e4;case"high":return e.offer.price>5e4}})),y.push(s));break;case"housing-rooms":y.includes(o)&&L(o,y),"any"!==t.target.value&&(o=e.filter((e=>e.offer.rooms>=t.target.value)),y.push(o));break;case"housing-guests":y.includes(n)&&L(n,y),"any"!==t.target.value&&(n=e.filter((e=>e.offer.guests>=t.target.value)),y.push(n));break;default:switch(y.includes(h)&&L(h,y),t.target.value){case"wifi":t.target.matches(":checked")?(c=f(0,"wifi"),v.push(c)):L(c,v);break;case"dishwasher":t.target.matches(":checked")?(i=f(0,"dishwasher"),v.push(i)):L(i,v);break;case"parking":t.target.matches(":checked")?(l=f(0,"parking"),v.push(l)):L(l,v);break;case"washer":t.target.matches(":checked")?(d=f(0,"washer"),v.push(d)):L(d,v);break;case"elevator":t.target.matches(":checked")?(u=f(0,"elevator"),v.push(u)):L(u,v);break;case"conditioner":t.target.matches(":checked")?(p=f(0,"conditioner"),v.push(p)):L(p,v)}if(1===v.length&&(h=v[0],y.push(h)),v.length>1){let e=v[0];v.slice(1).forEach((t=>{e=r(e,t)})),h=e,y.push(h)}}if(0===y.length&&(m=e),1===y.length&&(m=y[0]),y.length>1){let e=y[0];y.slice(1).forEach((t=>{e=r(e,t)})),m=e}g()}))})(e.slice())})).catch((e=>{alert("Извините, мы не смогли загрузть данные о других объявлениях. "+e)}));const a=e=>{const t=document.querySelector("main");let r=document.querySelector("#success").content.querySelector(".success").cloneNode(!0);"error"===e&&(r=document.querySelector("#error").content.querySelector(".error").cloneNode(!0));const a=()=>{t.removeChild(r),window.removeEventListener("click",a),window.removeEventListener("keydown",s)},s=e=>{"Escape"===e.code&&(t.removeChild(r),window.removeEventListener("keydown",s),window.removeEventListener("click",a))};t.appendChild(r),window.addEventListener("click",a),window.addEventListener("keydown",s)},s=(e,t)=>{const r=parseInt(e.value),a=parseInt(t.value);t.setCustomValidity(""),100===r&&0!==a&&t.setCustomValidity('Для 100 комнат подходит только вариант "не для гостей"'),100!==r&&0!==a&&a>r&&t.setCustomValidity("Число гостей не может превышать количество комнат"),100!==r&&0===a&&t.setCustomValidity('Вариант "не для гостей" подходит только для 100 комнат'),t.reportValidity()},o=(e,t,r,a)=>{t.addEventListener("change",(()=>{const s=t.files[0],o=s.name.toLowerCase();if(e.some((e=>o.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{"withBackground"===a?r.style.background=`#e4e4de center / contain no-repeat url(${e.result})`:(r.style.height="auto",r.src=e.result)})),e.readAsDataURL(s)}}))},n=document.querySelector(".ad-form"),c=n.querySelector("#type"),i=n.querySelector("#price");o(["gif","jpg","jpeg","png"],n.querySelector(".ad-form__field input[type=file]"),n.querySelector(".ad-form-header__preview img"),"src");const l={bungalow:0,flat:1e3,house:5e3,palace:1e4},d=1e6,u=()=>{i.placeholder=l[c.value],i.min=l[c.value]};u(),c.addEventListener("change",(()=>{u()})),i.max=d,i.addEventListener("input",(()=>{var e,t,r,a;e=c,r=l,a=d,(t=i).setCustomValidity(""),t.value<r[e.value]&&t.setCustomValidity(`Извините, но цена для этого типа жилья не может быть ниже ${r[e.value]}`),t.value>a&&t.setCustomValidity(`Извините, цена любого жилья не может превышать ${a}`),t.reportValidity()}));const p=n.querySelector("#timein"),h=n.querySelector("#timeout");p.addEventListener("change",(()=>{h.value=p.value})),h.addEventListener("change",(()=>{p.value=h.value}));const y=n.querySelector("#title");y.addEventListener("input",(()=>{var e;(e=y).value.length<30?e.setCustomValidity(`не хватает ${30-e.value.length} симв`):e.value.length>100?e.setCustomValidity(`удалите лишние ${e.value.length-100} симв`):e.setCustomValidity(""),e.reportValidity()}));const v=n.querySelector("#room_number"),m=n.querySelector("#capacity"),g=()=>{for(let e of m.options)0==e.value?e.setAttribute("disabled","true"):e.removeAttribute("disabled"),100==v.value?0==e.value?e.removeAttribute("disabled"):e.setAttribute("disabled","true"):v.value<e.value&&e.setAttribute("disabled","true")};g(),v.addEventListener("change",(()=>{g(),s(v,m)})),m.addEventListener("change",(()=>{s(v,m)}));const f=n.querySelector("#address");f.setAttribute("readonly","true"),o(["gif","jpg","jpeg","png"],n.querySelector(".ad-form__upload input[type=file]"),n.querySelector(".ad-form__photo"),"withBackground");const k=(w=n,b=e=>{n.reset(),z(),a("success")},S=e=>{a("error")},()=>{fetch("https://23.javascript.pages.academy/keksobooking",{method:"POST",credentials:"same-origin",body:new FormData(w)}).then((e=>{if(e.ok)return e.json;throw new Error(`${e.status} ${e.statusText}`)})).then((e=>b())).catch((e=>S()))});var w,b,S;n.addEventListener("submit",(e=>{e.preventDefault(),((e,t)=>{t.setCustomValidity(""),e.value!==t.value&&t.setCustomValidity("Время заезда и выезда должны совпадать"),t.reportValidity()})(p,h),s(v,m),n.reportValidity()&&k()})),n.querySelector(".ad-form__reset").addEventListener("click",(()=>{z()}));const q=(e,t)=>parseInt(e*10**t)/10**t,C=35.60684,E=139.74554;f.value=C+", "+E;const V=L.map("map-canvas").on("load",(()=>{t("ad-form")})).setView({lat:C,lng:E},10);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(V);const x=L.icon({iconUrl:"../leaflet/img/main-pin.svg",iconSize:[52,52],iconAnchor:[26,52]}),A=L.marker({lat:C,lng:E},{draggable:!0,icon:x});A.addTo(V);let $={};A.on("moveend",(e=>{$=e.target.getLatLng(),f.value=parseInt(1e5*$.lat)/1e5+", "+parseInt(1e5*$.lng)/1e5}));const j=L.icon({iconUrl:"../leaflet/img/pin.svg",iconSize:[40,40],iconAnchor:[20,40]}),I=document.querySelector("#card").content.querySelector(".popup"),D=e=>{let t=[];return e.forEach((e=>{const r=e.location.lat,a=e.location.lng,s=L.marker({lat:r,lng:a},{pinIcon:j}),o=I.cloneNode(!0);((e,{author:t,offer:r,location:a})=>{const s=e.querySelector(".popup__title");r.title?s.textContent=r.title:s.classList.add("visually-hidden");const o=e.querySelector(".popup__text--address"),n=q(a.lat,5),c=q(a.lng,5);a.lat||a.lng?o.textContent=n+", "+c:o.classList.add("visually-hidden");const i=e.querySelector(".popup__type");r.type?i.textContent=(e=>{switch(e){case"palace":return"Дворец";case"house":return"Дом";case"bungalow":return"Бунгало";case"flat":return"Квартира";default:return""}})(r.type):i.classList.add("visually-hidden");const l=e.querySelector(".popup__description");l?l.textContent=r.description:l.classList.add("visually-hidden");const d=e.querySelector(".popup__text--price");r.price?d.textContent=r.price+" ₽/ночь":d.classList.add("visually-hidden");const u=e.querySelector(".popup__text--capacity");r.rooms&&r.guests?u.textContent=r.rooms+" комнаты для "+r.guests+" гостей":u.classList.add("visually-hidden");const p=e.querySelector(".popup__text--time");r.checkin&&r.checkout?p.textContent="Заезд после "+r.checkin+", выезд до "+r.checkout:p.classList.add("visually-hidden");const h=e.querySelector(".popup__features");r.features?((e,t)=>{const r=document.createDocumentFragment();t.forEach((e=>{const t=document.createElement("li");t.classList.add("popup__feature"),t.classList.add("popup__feature--"+e),r.appendChild(t)})),e.replaceChildren(),e.appendChild(r)})(h,r.features):h.classList.add("visually-hidden"),((e,t,r)=>{const a=document.createDocumentFragment(),s=r.querySelector(".popup__photo");t?t.forEach((e=>{const t=s.cloneNode(!0);t.src=e,a.appendChild(t)})):s.classList.add("visually-hidden"),e.replaceChildren(),e.appendChild(a)})(e.querySelector(".popup__photos"),r.photos,e);const y=e.querySelector(".popup__avatar");y.src=t.avatar,y.onerror=function(){y.classList.add("visually-hidden")}})(o,e),s.bindPopup(o,{keepInView:!0}),t.push(s)})),t};let T=L.layerGroup();const F=e=>{T=L.layerGroup(e),T.addTo(V)},N=()=>{T.remove()},z=()=>{A.setLatLng({lat:C,lng:E})}})();
//# sourceMappingURL=main.bundle.js.map