import { limitDecimalPlaces } from "./util.js";

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

const addPhotosToDom = (photoContainer, data, card) => {
  const fragment = document.createDocumentFragment();
  const photo = card.querySelector('.popup__photo');
  if (data) {
    data.forEach(url => {
    const photoElement = photo.cloneNode(true);
    photoElement.src = url;
    fragment.appendChild(photoElement);
    });
  } else {
    photo.classList.add('visually-hidden');
  }

  photoContainer.replaceChildren();
  photoContainer.appendChild(fragment);
}

const createOffer = (card, {author, offer, location}) => {
  const title = card.querySelector('.popup__title');
  (offer.title) ? (title.textContent = offer.title) : (title.classList.add('visually-hidden'));

  const address = card.querySelector('.popup__text--address');
  const x = limitDecimalPlaces(location.lat, 5);
  const y = limitDecimalPlaces(location.lng, 5);
  (location.lat || location.lng) ? (address.textContent = x + ', ' + y) : (address.classList.add('visually-hidden'));

  const housingType = card.querySelector('.popup__type');
  (offer.type) ? (housingType.textContent = translateHousingType(offer.type)) : (housingType.classList.add('visually-hidden'));

  const description = card.querySelector('.popup__description');
  (description) ? (description.textContent = offer.description) : (description.classList.add('visually-hidden'));

  const price = card.querySelector('.popup__text--price');
  (offer.price) ? (price.textContent = offer.price + ' ₽/ночь') : (price.classList.add('visually-hidden'));

  const capacity = card.querySelector('.popup__text--capacity');
  (offer.rooms && offer.guests) ? (capacity.textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей') : (capacity.classList.add('visually-hidden'));

  const time = card.querySelector('.popup__text--time');
  (offer.checkin && offer.checkout) ? (time.textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout) : (time.classList.add('visually-hidden'));

  const featuresList = card.querySelector('.popup__features');
  (offer.features) ? (addFeaturesToDom(featuresList, offer.features)) : (featuresList.classList.add('visually-hidden'));

  const photos = card.querySelector('.popup__photos');
  addPhotosToDom(photos, offer.photos, card);

  const picture = card.querySelector('.popup__avatar');
  picture.src = author.avatar;
  picture.onerror = function() {
    picture.classList.add('visually-hidden');
  }
}

export { createOffer };
