import './slider.js';
import './map.js';
import {getData} from './load.js';
import {createMarker} from './map.js';

getData((offers) => {
  offers.forEach((offer) => {
    createMarker(offer);
  });
});


