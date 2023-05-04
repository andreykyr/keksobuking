const form = document.querySelector('.ad-form');

const housingType = form.querySelector('#type');
const housingPrice = form.querySelector('#price');

//HOUSING TYPE

housingType.addEventListener('change', () => {
  switch (housingType.value) {
    case 'bungalow':
      housingPrice.placeholder = '0';
      housingPrice.min = 0;
      break;

    case 'flat':
      housingPrice.placeholder = '1000';
      housingPrice.min = 1000;
      break;

    case 'house':
      housingPrice.placeholder = '5000';
      housingPrice.min = 5000;
      break;

    case 'palace':
      housingPrice.placeholder = '10000';
      housingPrice.min = 10000;
      break;

    default:
      housingPrice.placeholder = 0;
      housingPrice.min = 0;
      break;
  }

  housingPrice.max = 1000000;
  housingPrice.addEventListener('input', () => {
    if (housingPrice.value > 1000000) {
      housingPrice.setCustomValidity('Извините, цена не может превышать 1 000 000');
    }
  });
});

//TIME

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

//TITLE
const title = form.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

title.addEventListener('input', () => {
  const valueLength = title.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity('не хватает ' + (MIN_TITLE_LENGTH - valueLength) + ' симв');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity('удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв');
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});

//ROOMS

const roomNumber = form.querySelector('#room_number');
const guestNumber = form.querySelector('#capacity');

roomNumber.addEventListener('change', () => {

  for (let guest of guestNumber.options) {
    guest.value == 0 ? guest.setAttribute('disabled', 'true') : guest.removeAttribute('disabled');

    if (roomNumber.value == 100) {
      guest.value == 0 ? guest.removeAttribute('disabled') : guest.setAttribute('disabled', 'true');
    } else if (roomNumber.value < guest.value) {
        guest.setAttribute('disabled', 'true');
    }
  }
})

console.log(roomNumber.options);

const address = form.querySelector('#address');
address.setAttribute('disabled', 'true');

export { address };


