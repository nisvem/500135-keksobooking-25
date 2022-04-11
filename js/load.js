
const urlGetData = 'https://25.javascript.pages.academy/keksobooking/data';
const urlsendData = 'https://25.javascript.pages.academy/keksobooking/';

const getData = () => fetch(urlGetData);

const sendData = (body) =>
  fetch(
    urlsendData,
    {
      method: 'POST',
      type: 'multipart/form-data',
      body,
    },
  );

export {getData, sendData};

