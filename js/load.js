import {getSuccess, getError} from './template.js';

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((offer) => {
      onSuccess(offer);
    })
    .catch(() => getError('Oшибка при загрузке данных.', 'Понятно'));
};

const sendData = (onSuccess, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking/',
    {
      method: 'POST',
      type: 'multipart/form-data',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        getSuccess();
      } else {
        throw new Error(`${response.status} — ${response.statusText}`);
      }
    })
    .catch(() => getError());
};

export {getData, sendData};

