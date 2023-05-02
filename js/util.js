console.log('loaded util.js file');
const getRandomIntInclusive = (min, max) => {

  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [max, min] = [min, max];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomFloat = (min, max, decimal) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  let base = Math.pow(10, decimal);

  return getRandomIntInclusive(min * base, max * base) / base;
};

const getRandomItems = (array) => {
  let newArrayLength = getRandomIntInclusive(1, array.length);
  let newArray = new Array(newArrayLength).fill(null);
  let randomIndex = getRandomIntInclusive(0, array.length - 1);

  for (let i = 0; i < newArray.length; i++) {
    while (newArray.includes(array[randomIndex])) {
      randomIndex = getRandomIntInclusive(0, array.length - 1);
    }
    newArray[i] = array[randomIndex];
  }

  return newArray;
};

const addLeadingZero = (number) => {
  return number < 10 ? '0' + String(number) : number;
}

export {getRandomIntInclusive, getRandomFloat, getRandomItems, addLeadingZero};
