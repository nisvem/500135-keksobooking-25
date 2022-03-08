import {getRandomPositiveInteger, getRandomPositiveFloat} from './util.js';

function getAuthor(num) {
  return {
    avatar: `img/avatars/user${(num < 10)? `0${num}`: num}.png`
  };
}

function getLocation() {
  return {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
  };

}

function getAddressOffer(location) {
  return `${location.lat}, ${location.lng}`;
}

function getCheck() {
  return ['12:00','13:00','14:00'][getRandomPositiveInteger(0,2)];
}

function getFeatures() {
  return [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'].filter(() => getRandomPositiveInteger(0,1));
}

function getPhotos() {
  return [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'].filter(() => getRandomPositiveInteger(0,1));
}

function getOffer(title = 'Заголовок', description = 'Описание', num = getRandomPositiveInteger(1,10)) {
  const location = getLocation();

  return {
    author: getAuthor(num),
    offer : {
      title: title,
      address: getAddressOffer(location),
      price: getRandomPositiveInteger(0, 100000),
      rooms: getRandomPositiveInteger(1, 6),
      guests: getRandomPositiveInteger(1, 20),
      checkin: getCheck(),
      checkout: getCheck(),
      features: getFeatures(),
      description: description,
      photos: getPhotos()
    },
    location: location,
  };
}

function getId(n) {
  const authorId = [];

  for (let i = 0; i < n; i++) {
    let generateNum = getRandomPositiveInteger(1, n);
    let next = false;
    while(next === false) {
      if(!authorId.includes(generateNum)) {
        next = true;
      } else {
        generateNum = getRandomPositiveInteger(1, n);
        next = false;
      }
    }
    authorId.push(generateNum);
  }

  return authorId;
}


export {getOffer, getId};
