import {simalarAds} from './data.js'
console.log(simalarAds);
const ad = simalarAds[0];

const container = document.querySelector('.map__canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const offerCard = offerTemplate.cloneNode(true);
console.log(offerTemplate);

const translateHousingType = (data) => {
  switch (data) {
    case 'palace':
      return 'Дворец';

    case 'house':
      return 'Дом';

    case 'bungalow':
      return 'Бунгало';

    case 'flat':
      return 'Квартира';

    default:
      return 'Это не описать словами!'
    }
}

const getAvailabileFeatures = (features) => {
  features.forEach(item => {

  });

}

offerCard.querySelector('.popup__title').textContent = ad.offer.title;
offerCard.querySelector('.popup__text--address').textContent = ad.offer.address;
offerCard.querySelector('.popup__text--price').textContent = ad.offer.price + ' ₽/ночь';
offerCard.querySelector('.popup__type').textContent = translateHousingType(ad.offer.type);
offerCard.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
offerCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;



container.appendChild(offerCard);
