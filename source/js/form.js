console.log('loaded form.js file');

import { createFetch } from './fetch.js';
import { createMessage } from './notice.js';
import { returnMarkerToStart } from './map.js';

import {
  inputLengthValidation,
  housingPriceValidation,
  timeValidation,
  capacityValidation,
} from './validation.js';

import { addImageUpload } from './file-upload.js';

const form = document.querySelector('.ad-form');

const housingType = form.querySelector('#type');
const housingPrice = form.querySelector('#price');

//AVATAR

const AVATAR_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = form.querySelector('.ad-form__field input[type=file]');
const avatarPreview = form.querySelector('.ad-form-header__preview img');

addImageUpload(AVATAR_FILE_TYPES, avatarChooser, avatarPreview, 'src');


//HOUSING TYPE

const HOUSING_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const MAX_PRICE = 1000000;

const setHousingPrice = () => {
  housingPrice.placeholder = HOUSING_PRICES[housingType.value];
  housingPrice.min = HOUSING_PRICES[housingType.value];
}

setHousingPrice();

housingType.addEventListener('change', () => {
  setHousingPrice();
});

housingPrice.max = MAX_PRICE;
housingPrice.addEventListener('input', () => {
  housingPriceValidation(housingType, housingPrice, HOUSING_PRICES, MAX_PRICE);
});


//TIME

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});


//TITLE

const title = form.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

title.addEventListener('input', () => {
  inputLengthValidation(title, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH);
});


//CAPACITY

const roomsNumber = form.querySelector('#room_number');
const guestsNumber = form.querySelector('#capacity');

const setProperCapacity = () => {
  for (let guest of guestsNumber.options) {
    guest.value == 0 ? guest.setAttribute('disabled', 'true') : guest.removeAttribute('disabled');

    if (roomsNumber.value == 100) {
      guest.value == 0 ? guest.removeAttribute('disabled') : guest.setAttribute('disabled', 'true');
    } else if (roomsNumber.value < guest.value) {
        guest.setAttribute('disabled', 'true');
    }
  }
}

setProperCapacity();

roomsNumber.addEventListener('change', () => {
  setProperCapacity();
  capacityValidation(roomsNumber, guestsNumber);
});

guestsNumber.addEventListener('change', () => {
  capacityValidation(roomsNumber, guestsNumber);
})


// ADDRESS

const address = form.querySelector('#address');
address.setAttribute('readonly', 'true');


//HOUSING PHOTO

const PHOTO_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const photoChooser = form.querySelector('.ad-form__upload input[type=file]');
const photoPreview = form.querySelector('.ad-form__photo');

addImageUpload(PHOTO_FILE_TYPES, photoChooser, photoPreview, 'withBackground');

//SUBMIT

const fetchFormData = createFetch(
  form,
  (data) => {
    form.reset();
    returnMarkerToStart();
    createMessage('success');
  },
  (err) => {
    createMessage('error');
  },
);

form.addEventListener('submit', (evt) => {
  console.log('делаем сброс настроек по умолчанию');
  evt.preventDefault();
  console.log('проводим валидацию формы');
  timeValidation(timeIn, timeOut);
  capacityValidation(roomsNumber, guestsNumber);
  console.log('отправляем данные на сервер');
  if (form.reportValidity()) {
  console.log('ведь у нас все хорошо');
    fetchFormData();
  }
});


//RESET

const resetButton = form.querySelector('.ad-form__reset');

resetButton.addEventListener('click', () => {
  returnMarkerToStart();
});

export { address };


