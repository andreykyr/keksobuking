import {simalarAds} from './data.js'

const container = document.querySelector('.map__canvas');
const fragment = document.createDocumentFragment();
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const offerCard = offerTemplate.cloneNode(true);

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
      return ''
    }
}

const addFeaturesToDom = (featuresList, data) => {
  const fragment = document.createDocumentFragment();
  data.forEach(item => {
    const element = document.createElement('li');
    element.classList.add('popup__feature');
    element.classList.add('popup__feature--' + item);
    fragment.appendChild(element);
  });
  featuresList.replaceChildren();
  featuresList.appendChild(fragment);

}

const addPhotosToDom = (photoContainer, data) => {
  const fragment = document.createDocumentFragment();
  const photo = offerCard.querySelector('.popup__photo');
  data.forEach(url => {
    const photoElement = photo.cloneNode(true);
    photoElement.src = url;
    fragment.appendChild(photoElement);
  });
  photoContainer.replaceChildren();
  photoContainer.appendChild(fragment);
}

simalarAds.forEach (ad => {
  offerCard.querySelector('.popup__title').textContent = ad.offer.title;
  offerCard.querySelector('.popup__text--address').textContent = ad.offer.address;
  offerCard.querySelector('.popup__type').textContent = translateHousingType(ad.offer.type);
  offerCard.querySelector('.popup__description').textContent = ad.offer.description;

  const price = offerCard.querySelector('.popup__text--price');
  (ad.offer.price) ? (price.textContent = ad.offer.price + ' ₽/ночь') : (price.classList.add('visually-hidden'));

  const capacity = offerCard.querySelector('.popup__text--capacity');
  (ad.offer.rooms && ad.offer.guests) ? (capacity.textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей') : (capacity.classList.add('visually-hidden'));

  const time = offerCard.querySelector('.popup__text--time');
  (ad.offer.checkin && ad.offer.checkout) ? (time.textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout) : (time.classList.add('visually-hidden'));

  const featuresList = offerCard.querySelector('.popup__features');
  (ad.offer.features) ? (addFeaturesToDom(featuresList, ad.offer.features)) : (featuresList.classList.add('visually-hidden'));

  const photos = offerCard.querySelector('.popup__photos');
  addPhotosToDom(photos, ad.offer.photos);

  const picture = offerCard.querySelector('.popup__avatar');
  picture.src = ad.author.avatar;
  picture.onerror = function() {
    picture.classList.add('visually-hidden');
  }

  console.log(offerCard);
  fragment.appendChild(offerCard);
});

container.appendChild(offerCard);
