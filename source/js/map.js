import { enablePage } from './page-load.js';
import { address } from './form.js';
import { createOffer } from './offer.js';

const LAT = 35.60684;
const LNG = 139.74554
address.value = LAT + ', ' + LNG;

// Create map

const map = L.map('map-canvas')
  .on('load', () => {
    enablePage('ad-form');
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


// Create main marker

const mainPinIcon = L.icon({
  iconUrl: 'leaflet/img/main-pin.svg',
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
});

const pinIcon = L.icon({
  iconUrl: '../leaflet/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Create other markers

const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const createMarkers = (ads) => {
  let markers = [];

  ads.forEach (ad => {
    const lat = ad.location.lat;
    const lng = ad.location.lng;
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

      .bindPopup(offerCard,
        {
          keepInView: true,
        },
      );
    markers.push(marker);
  });

  return markers;
};

let markersGroup = L.layerGroup();

const addMarkers = (markers) => {
  markersGroup = L.layerGroup(markers);
  markersGroup.addTo(map);
}

const removeMarkers = () => {
  markersGroup.remove();
}

const returnMarkerToStart = () => {
  mainMarker.setLatLng(
    {
      lat: LAT,
      lng: LNG,
    },
  );
}

export {createMarkers, returnMarkerToStart, addMarkers, removeMarkers};
