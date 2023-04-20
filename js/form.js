const form = document.querySelector('.ad-form');

const housingType = form.querySelector('#type');
const housingPrice = form.querySelector('#price');

const timeIn = form.querySelector('#timein');
console.log(timeIn);
const timeOut = form.querySelector('#timeout');
console.log(timeOut);

housingType.addEventListener('change', function() {
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
});

timeIn.addEventListener('change', function() {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', function() {
  timeIn.value = timeOut.value;
});

