import { createMarkers } from './map.js';

const AD_COUNT = 10;

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
    .then((ads) => {
      createMarkers(ads.slice(0, AD_COUNT));
    })
    .catch((err) => {
      alert('Извините, мы не смогли загрузть данные о других объявлениях. ' + err);
    })
