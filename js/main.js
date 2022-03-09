import {getOffer, getId} from './data.js';

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

// eslint-disable-next-line no-console
console.log(offers);

