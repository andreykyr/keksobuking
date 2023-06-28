const createMessage = (type) => {
  const main = document.querySelector('main');
  let message = document.querySelector('#success').content.querySelector('.success').cloneNode(true);

  if (type === 'error') {
    message = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  }

  const onClickRemoveMessage = () => {
    main.removeChild(message);
    window.removeEventListener('click', onClickRemoveMessage);
    window.removeEventListener('keydown', onKeyDownRemoveMessage);
  }

  const onKeyDownRemoveMessage = (evt) => {
    if (evt.code === 'Escape') {
      console.log(evt.code);
      main.removeChild(message);
      window.removeEventListener('keydown', onKeyDownRemoveMessage);
      window.removeEventListener('click', onClickRemoveMessage);
    }
  }

  main.appendChild(message);
  window.addEventListener('click', onClickRemoveMessage);
  window.addEventListener('keydown', onKeyDownRemoveMessage);
}
export { createMessage };
