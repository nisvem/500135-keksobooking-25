import {activateForm} from './form.js';
import {cardOffers} from './data.js';
import {getOfferCard} from './template.js';

const address = document.querySelector('#address');

function setAdress(marker) {
  address.value = `${marker.getLatLng().lat.toFixed(5)}, ${marker.getLatLng().lng.toFixed(5)}`;
}

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    address.setAttribute('readonly', true);
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

setAdress(mainPinMarker);

mainPinMarker
  .addTo(map)
  .on('move', ()=> {
    setAdress(mainPinMarker);
  });


cardOffers.forEach((cardOffer) => {
  const marker = L.marker(
    {
      lat: cardOffer.location.lat,
      lng: cardOffer.location.lng,
    },
    {
      pinIcon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(getOfferCard(cardOffer));
});
