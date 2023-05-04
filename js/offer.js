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

const createOffer = (card, ad) => {
  card.querySelector('.popup__title').textContent = ad.offer.title;
  card.querySelector('.popup__text--address').textContent = ad.location.x + ', ' + ad.location.y;
  card.querySelector('.popup__type').textContent = translateHousingType(ad.offer.type);
  card.querySelector('.popup__description').textContent = ad.offer.description;

  const price = card.querySelector('.popup__text--price');
  (ad.offer.price) ? (price.textContent = ad.offer.price + ' ₽/ночь') : (price.classList.add('visually-hidden'));

  const capacity = card.querySelector('.popup__text--capacity');
  (ad.offer.rooms && ad.offer.guests) ? (capacity.textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей') : (capacity.classList.add('visually-hidden'));

  const time = card.querySelector('.popup__text--time');
  (ad.offer.checkin && ad.offer.checkout) ? (time.textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout) : (time.classList.add('visually-hidden'));

  const featuresList = card.querySelector('.popup__features');
  (ad.offer.features) ? (addFeaturesToDom(featuresList, ad.offer.features)) : (featuresList.classList.add('visually-hidden'));

  const photos = card.querySelector('.popup__photos');
  addPhotosToDom(photos, ad.offer.photos, card);

  const picture = card.querySelector('.popup__avatar');
  picture.src = ad.author.avatar;
  picture.onerror = function() {
    picture.classList.add('visually-hidden');
  }
}

export { createOffer };
