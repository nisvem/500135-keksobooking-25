// Ссылка на источник откуда взял функцию getRandomInRange https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random и https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed, и добавил проверку вводных значений
function getRandomFloat(min, max, num) {
  if(min < 0 || max < min ) {
    return false;
  }
  return Number((Math.random() * (max - min) + min).toFixed(num));
}

function getRandom(min, max) {
  if(min < 0 || max < min ) {
    return false;
  }
  return Math.floor(Math.random() * (max - min) + min);
}

// eslint-disable-next-line no-console
console.log(getRandomFloat(1, 10.1, 3) + getRandomFloat(1, 10.1, 3));
// eslint-disable-next-line no-console
console.log(getRandom(1, 10));
