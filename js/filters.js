
import {debounce} from './util.js';
import {renderMap, clearMap} from './map.js';

const selects = document.querySelectorAll('.map__filter');
const features = document.querySelectorAll('#housing-features .map__checkbox[name="features"]');
const MARKER_OFFER_COUNT = 10;
const filterAnyValue = 'any';

selects.forEach((select) => {
  select.addEventListener('change', debounce(() => {
    clearMap();
    renderMap();
  }));
});

features.forEach((feature) => {
  feature.addEventListener('change', debounce(() => {
    clearMap();
    renderMap();
  }));
});

function getFilterOffers(orders) {
  const housingFilter = document.querySelector('.map__filters');
  const housingTypeValue = housingFilter.querySelector('#housing-type').value;
  const housingPriceValue = housingFilter.querySelector('#housing-price').value;
  const housingRoomsValue = housingFilter.querySelector('#housing-rooms').value;
  const housingGuestsValue = housingFilter.querySelector('#housing-guests').value;
  const housingFeatures = [];
  housingFilter.querySelectorAll('#housing-features .map__checkbox[name="features"]').forEach((element) => {
    if(element.checked) {
      housingFeatures.push(element.value);
    }
  });

  const filterOrders = [];

  for(let i=0, a=0; i < MARKER_OFFER_COUNT && a < orders.length; a++) {
    if(filterSelect(orders[a].offer.type, housingTypeValue) &&
      filterPrice(orders[a].offer.price, housingPriceValue) &&
      filterSelect(orders[a].offer.rooms, housingRoomsValue) &&
      filterSelect(orders[a].offer.guests, housingGuestsValue) &&
      filterFeatures(orders[a].offer.features, housingFeatures)
    ) {
      filterOrders.push(orders[a]);
      i++;
    }
  }
  return filterOrders;
}


function filterFeatures(orders, housingFeatures) {
  if(orders === undefined) {
    return housingFeatures.length === 0;
  }

  let filterMark = 0;

  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < housingFeatures.length; j++) {
      if(orders[i] === housingFeatures[j]) {
        filterMark++;
      }
    }
  }
  return filterMark === housingFeatures.length;
}

function filterSelect(value, filterValue) {
  return filterValue === filterAnyValue || String(value) === filterValue;
}

function filterPrice(value, filterValue) {
  const valueNumber = Number(value);
  const valuePrice = {
    'middle': valueNumber >= 10000 && valueNumber <= 50000,
    'low': valueNumber < 10000,
    'high': valueNumber > 50000,
    'any': true
  };

  return valuePrice[filterValue] || '';
}

export {getFilterOffers};
