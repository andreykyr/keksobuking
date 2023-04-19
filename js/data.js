import {getRandomIntInclusive, getRandomFloat, getRandomItems, addLeadingZero} from './util.js';

const LINK_TEMPLATE = 'img/avatars/user{{xx}}.png';
const HOUSING_TYPE = ['palace', 'flat', 'house', 'bungalow'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const ADS_COUNT = 10;

const createAd = () => {
  return {
    author : {
      avatar: LINK_TEMPLATE.replace('{{xx}}', addLeadingZero(getRandomIntInclusive(1, 10))),
    },

    offer : {
      title: 'Дом Вашей мечты',
      address: '{{locatio.x}}, {{locatio.y}}',
      price: getRandomIntInclusive(1, 1000000000),
      type: HOUSING_TYPE[getRandomIntInclusive(0, HOUSING_TYPE.length - 1)],
      rooms: getRandomIntInclusive(1, 1000),
      guests: getRandomIntInclusive(1, 1000),
      checkin: TIME[getRandomIntInclusive(0, TIME.length-1)],
      checkout: TIME[getRandomIntInclusive(0, TIME.length-1)],
      features: getRandomItems(FEATURES),
      description: 'Лучшее жилище на свете!',
      photos: getRandomItems(PHOTOS),
    },

    location : {
      x: getRandomFloat(35.65000, 35.70000, 5),
      y: getRandomFloat(139.70000, 139.80000, 5),
    }
  }
}

const simalarAds = new Array(ADS_COUNT).fill(null).map(() => createAd());

console.log(simalarAds);
