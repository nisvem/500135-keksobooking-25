// Ссылка на источник откуда взял функцию getRandomInRange https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random и https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed, и добавил проверку вводных значений
// function getRandomFloat(min, max, num = 1) {
//   if(min < 0 || max < min ) {
//     return false;
//   }
//   return Number((Math.random() * (max - min) + min).toFixed(num));
// }

// function getRandom(min, max) {
//   if(min < 0 || max < min ) {
//     return false;
//   }
//   return Math.floor(Math.random() * (max - min) + min);
// }

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (a, b, digits = 1) {

  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
}


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
  switch (getRandomPositiveInteger(1,3)) {
    case 1:
      return '12:00';

    case 2:
      return '13:00';

    case 3:
      return '14:00';
  }
}

function getFeatures() {
  let allFeatures = {
    wifi: getRandomPositiveInteger(0,1),
    dishwasher: getRandomPositiveInteger(0,1),
    parking: getRandomPositiveInteger(0,1),
    washer: getRandomPositiveInteger(0,1),
    elevator: getRandomPositiveInteger(0,1),
    conditioner: getRandomPositiveInteger(0,1)
  };

  let features = [];
  for (let key in allFeatures) {
    if(allFeatures[key] === 1){
      features.push(key);
    }
  }

  return features;
}

function getPhotos() {
  let allPhotos = {
    photo1: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    photo2: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    photo3: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  };

  const photos = [];
  for (const key in allPhotos) {
    if(getRandomPositiveInteger(0,1) === 1){
      photos.push(allPhotos[key]);
    }
  }

  return photos;
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
    let generateNum = getRandomPositiveInteger(1, 10);
    let next = false;
    while(next === false) {
      if(authorId.indexOf(generateNum) === -1) {
        next = true;
      } else {
        generateNum = getRandomPositiveInteger(1, 10);
        next = false;
      }
    }
    authorId.push(generateNum);
  }

  return authorId;
}

const authorsId = getId(10);

const offers = [
  getOffer('Квартира 1', 'Описание кварты 1', authorsId[0]),
  getOffer('Квартира 2', 'Описание кварты 2', authorsId[1]),
  getOffer('Квартира 3', 'Описание кварты 3', authorsId[2]),
  getOffer('Квартира 4', 'Описание кварты 4', authorsId[3]),
  getOffer('Квартира 5', 'Описание кварты 5', authorsId[4]),
  getOffer('Квартира 6', 'Описание кварты 6', authorsId[5]),
  getOffer('Квартира 7', 'Описание кварты 7', authorsId[6]),
  getOffer('Квартира 8', 'Описание кварты 8', authorsId[7]),
  getOffer('Квартира 9', 'Описание кварты 9', authorsId[8]),
  getOffer('Квартира 10', 'Описание кварты 10', authorsId[9]),
];

console.log(offers);