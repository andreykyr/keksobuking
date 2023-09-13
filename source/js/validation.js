const inputLengthValidation = (input, min, max) => {
  if (input.value.length < min) {
    input.setCustomValidity(`не хватает ${min - input.value.length} симв`);
  } else if (input.value.length > max) {
    input.setCustomValidity(`удалите лишние ${input.value.length - max} симв`);
  } else {
    input.setCustomValidity('');
  }

  input.reportValidity();
}



const housingPriceValidation = (type, price, data, max) => {
  price.setCustomValidity('');

  if (price.value < data[type.value]) {
    price.setCustomValidity(`Извините, но цена для этого типа жилья не может быть ниже ${data[type.value]}`);
  }

  if (price.value > max) {
    price.setCustomValidity(`Извините, цена любого жилья не может превышать ${max}`);
  }

  price.reportValidity();
};



const timeValidation = (timeIn, timeOut) => {
  timeOut.setCustomValidity('');

  if (timeIn.value !== timeOut.value) {
    timeOut.setCustomValidity('Время заезда и выезда должны совпадать');
  }

  timeOut.reportValidity();
}



const capacityValidation = (roomsNumber, guestsNumber) => {
  const room = parseInt(roomsNumber.value);
  const guest = parseInt(guestsNumber.value);
  guestsNumber.setCustomValidity('');

  if (room === 100 && guest !== 0) {
    guestsNumber.setCustomValidity('Для 100 комнат подходит только вариант "не для гостей"');
  }

  if ((room !== 100) && (guest !== 0) && (guest > room)) {
    guestsNumber.setCustomValidity('Число гостей не может превышать количество комнат');
  }

  if ((room !== 100) && (guest === 0)) {
    guestsNumber.setCustomValidity('Вариант "не для гостей" подходит только для 100 комнат');
  }

  guestsNumber.reportValidity();
}



export { inputLengthValidation, housingPriceValidation, timeValidation, capacityValidation };
