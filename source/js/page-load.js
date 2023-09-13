const disablePage = (itemClass) => {
  const item = document.querySelector(`.${itemClass}`);

  item.classList.add(`${itemClass}--disabled`);
  for (let child of item.children) {
    child.setAttribute('disabled', 'true');
  }
}

const enablePage = (itemClass) => {
  const item = document.querySelector(`.${itemClass}`);

  item.classList.remove(`${itemClass}--disabled`);
  for (let child of item.children) {
    child.removeAttribute('disabled');
  }
}

disablePage('ad-form');
disablePage('map__filters');

export {disablePage, enablePage};

