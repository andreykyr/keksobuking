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

const createFetch = (onSuccess, onError) => {
  fetch(
  'https://23.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    credentials: 'same-origin',
    body: new FormData(),
  },
)
.then((response) => {
  if (response.ok) {
    return response.json;
  }

  throw new Error(`${response.status} ${response.statusText}`);
})
.then((json) => onSuccess(json))
.catch((err) => onError(err))
}

disablePage('ad-form', 'map__filters');

export {disablePage, enablePage, createFetch};

