console.log('loaded map.js file');
//import { adsList } from './main.js';
import { enablePage } from "./page-load.js";
import { address } from './form.js';
//import { simalarAds } from "./data.js";
import { createOffer } from "./offer.js";

const LAT = 35.60684;
const LNG = 139.74554
address.value = LAT + ', ' + LNG;

const map = L.map('map-canvas')
  .on('load', () => {
    enablePage('ad-form', 'map__filters');
    console.log('load');
  })
  .setView({
    lat: LAT,
    lng: LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

let coordinates = {};

mainMarker.on('moveend', (evt) => {
  coordinates = evt.target.getLatLng();
  address.value = (parseInt(coordinates.lat * 100000) / 100000) + ', ' + (parseInt(coordinates.lng * 100000) / 100000);
  console.log(coordinates);
});

const pinIcon = L.icon({
  iconUrl: '../leaflet/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const createMarkers = (ads) => {
  ads.forEach (ad => {
    const lat = ad.location.lat;
    const lng = ad.location.lng;
    console.log(lat, lng);
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        pinIcon,
      },
    );
    const offerCard = offerTemplate.cloneNode(true);
    createOffer(offerCard, ad);

    marker
      .addTo(map)
      .bindPopup(offerCard,
        {
          keepInView: true,
        },
      );
  });
}

export {createMarkers};
