function active(enable, className) {
  const block = document.querySelector(`.${className}`);

  if(enable) {
    block.classList.remove(`${className}--disabled`);
  } else {
    block.classList.add(`${className}--disabled`);
  }

  block.querySelectorAll('fieldset').forEach((element) => {
    element.disabled = enable;
  });
}

active(false, 'ad-form');
active(false, 'map__filters');
