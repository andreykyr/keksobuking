console.log('loaded pageLoad.js file');
const disablePage = (firstClass, secondClass) => {
  const first = document.querySelector('.' + firstClass);
  const second = document.querySelector('.' + secondClass);

  first.classList.add(firstClass + '--disabled');
  for (let child of first.children) {
    child.setAttribute('disabled', 'true');
  }

  second.classList.add(secondClass + '--disabled');
  for (let child of second.children) {
    child.setAttribute('disabled', 'true');
  }
  console.log('disable');
}

const enablePage = (firstClass, secondClass) => {
  const first = document.querySelector('.' + firstClass);
  const second = document.querySelector('.' + secondClass);

  first.classList.remove(firstClass + '--disabled');
  for (let child of first.children) {
    child.removeAttribute('disabled');
  }

  second.classList.remove(secondClass + '--disabled');
  for (let child of second.children) {
    child.removeAttribute('disabled');
  }
  console.log('enable');
}

disablePage('ad-form', 'map__filters');

export {disablePage, enablePage};

