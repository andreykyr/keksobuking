const createMessage = (type) => {
  if (type === 'success') {
    const successMessage = document.querySelector('#success').content.querySelector('.success');
    const main = document.querySelector('main');
    main.appendChild(successMessage);

    main.addEventListener('click', (evt) => {
      main.removeChild(successMessage);
    })

  } else if (type === 'error') {
    const errorMessage = document.querySelector('#error').content.querySelector('.error');
    const main = document.querySelector('main');
    main.appendChild(errorMessage);

    main.addEventListener('click', (evt) => {
      main.removeChild(errorMessage);
    })
  }

}

export { createMessage };
