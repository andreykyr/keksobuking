
const createMessage = (type) => {
  const main = document.querySelector('main');
  let message = document.querySelector('#success').content.querySelector('.success').cloneNode(true);

  if (type === 'error') {
    message = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  }

  main.appendChild(message);
  window.addEventListener('click', () => {
    main.removeChild(message);
  })
  window.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      main.removeChild(message);
    }
  });

export { createMessage };
