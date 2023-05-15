import { createMarkers } from './map.js';

// Load data
const AD_COUNT = 10;

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
    .then((ads) => {
      createMarkers(ads.slice(0, AD_COUNT));
    })
    .catch((err) => {
      alert('Извините, мы не смогли загрузть данные о других объявлениях. ' + err);
    })

// send form data

const createFetch = (body, onSuccess, onError) => () => {
  // добавить кастомные сообщения для разных ошибок
  fetch(
  'https://23.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    credentials: 'same-origin',
    body: new FormData(body),
  },
)
.then((response) => {
  console.log(response);
  if (response.ok) {
    return response.json;
  }

  throw new Error(`${response.status} ${response.statusText}`);
})
.then((json) => onSuccess(json))
.catch((err) => onError(err))
}

export {createFetch};
