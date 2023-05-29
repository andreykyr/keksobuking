import { createMarkers, addMarkers, removeMarkers } from "./map.js";


const filterAds = (newArray) => {
  const form = document.querySelector('.map__filters');

  let housingTypeArray = newArray;
  let housingPriceArray = newArray;
  let housingRoomsArray = newArray;
  let housingGuestsArray = newArray;
  let housingWithWifi = newArray;
  let housingWithDishwasher = newArray;
  let housingWithParking = newArray;
  let housingWithWasher = newArray;
  let housingWithElevator = newArray;
  let housingWithConditioner = newArray;
  let generalArrayOfFeatures = newArray;
  let resultArray = newArray;
  let totalArray = [];
  let featuresArray = [];
  let result = [];

  console.log('начинаем!');

  const filterChangeHandler = (evt) => {
    console.log('отлавливаем клики');
    //const filterRelevantItems = (array) => {
    //  console.log('фильтруем массив');
    //  array = newArray;
    //  if (evt.target.value !== 'any') {
    //    array = newArray.filter(
    //      item => (item.offer.type == evt.target.value)
    //    );
    //  };
    //  return array;
    //};

    const filterCurrentFeatures = (array, feature) => {
      console.log('фильтруем преимущества');
      array = newArray.filter(item => {
          if (item.offer.features) {
            return item.offer.features.includes(feature);
          };
      });
      return array;
    };

    const removeArray = (array, baseArray) => {
      console.log('проверяем повторный вызов');
      const index = baseArray.indexOf(array);
      baseArray.splice(index, 1);
    }


    console.log('перед свичом');
    console.log(totalArray);
    switch (evt.target.id) {
      case 'housing-type':
        if (totalArray.includes(housingTypeArray)) {
          removeArray(housingTypeArray, totalArray);
        };

        housingTypeArray = newArray.filter(
          item => (item.offer.type == evt.target.value || evt.target.value === 'any')
        );
        console.log('добавляем в тотал');
        console.log(housingTypeArray);
        totalArray.push(housingTypeArray);
        console.log('тотал теперь');
        console.log(totalArray);
        break;

      case 'housing-price':

        if (totalArray.includes(housingPriceArray)) {
          removeArray(housingPriceArray, totalArray);
        };


        housingPriceArray = newArray.filter(
          item => {
            console.log(item.offer.price);

            switch (evt.target.value) {
              case 'low':
                return item.offer.price < 10000;

              case 'middle':
                return item.offer.price >= 10000 && item.offer.price <= 50000;

              case 'high':
                return item.offer.price > 50000;

              case 'any':
                return true;

            };
        });

        console.log('добавляем в тотал');
        console.log(housingPriceArray);
        totalArray.push(housingPriceArray);
        console.log('тотал теперь');
        console.log(totalArray);
        break;

      case 'housing-rooms':
        if (totalArray.includes(housingRoomsArray)) {
          removeArray(housingRoomsArray, totalArray);
        };

        housingRoomsArray = newArray.filter(
          item => (item.offer.rooms == evt.target.value || evt.target.value === 'any')
        );


        console.log('добавляем в тотал');
        console.log(housingRoomsArray);
        totalArray.push(housingRoomsArray);;
        console.log('тотал теперь');
        console.log(totalArray);
        break;

      case 'housing-guests':
        if (totalArray.includes(housingGuestsArray)) {
          removeArray(housingGuestsArray, totalArray);
        };

        housingGuestsArray = newArray.filter(
          item => (item.offer.guests == evt.target.value || evt.target.value === 'any')
        );
        totalArray.push(housingGuestsArray);
        break;


      default:

      if (totalArray.includes(generalArrayOfFeatures)) {
        removeArray(generalArrayOfFeatures, totalArray);
      };

        switch (evt.target.value) {
          case 'wifi':
            console.log('its wifi');
            if (evt.target.matches(':checked')) {
              housingWithWifi = filterCurrentFeatures(housingWithWifi, 'wifi');
              featuresArray.push(housingWithWifi);
            } else {
              removeArray(housingWithWifi, featuresArray);
            }
            break

          case 'dishwasher':
            console.log('its dishwasher');

            if (evt.target.matches(':checked')) {
              housingWithDishwasher = filterCurrentFeatures(housingWithDishwasher, 'dishwasher');
              featuresArray.push(housingWithDishwasher);
            } else {
              removeArray(housingWithDishwasher, featuresArray);
            }
            break;

          case 'parking':
            console.log('its parking');

            if (evt.target.matches(':checked')) {
              housingWithParking = filterCurrentFeatures(housingWithParking, 'parking');
              featuresArray.push(housingWithParking);
            } else {
              removeArray(housingWithParking, featuresArray);
            }

            break;

          case 'washer':
            if (evt.target.matches(':checked')) {
              housingWithWasher = filterCurrentFeatures(housingWithWasher, 'washer');
              featuresArray.push(housingWithWasher);
            } else {
              removeArray(housingWithWasher, featuresArray);
            }

          break;

          case 'elevator':
            if (evt.target.matches(':checked')) {
              housingWithElevator = filterCurrentFeatures(housingWithElevator, 'elevator');
              featuresArray.push(housingWithElevator);
            } else {
              removeArray(housingWithElevator,featuresArray);
            }

          break;

          case 'conditioner':
            if (evt.target.matches(':checked')) {
              housingWithConditioner = filterCurrentFeatures(housingWithConditioner, 'conditioner');
              featuresArray.push(housingWithConditioner);
            } else {
              removeArray(housingWithConditioner, featuresArray);
            }

          break;

          default:
            break;
        }
    };

    const getArrayOfDuplicates = (array1, array2) => {
      return array1.filter(item => array2.includes(item));
    };

    console.log(featuresArray);

    if (featuresArray.length === 0) {
      generalArrayOfFeatures = newArray;
    };

    if (featuresArray.length === 1) {
      generalArrayOfFeatures = featuresArray[0];
    };

    if (featuresArray.length > 1) {
      let brokerArray = featuresArray[0];
      featuresArray.slice(1).forEach(item => {
        brokerArray = getArrayOfDuplicates(brokerArray, item);
      });
      generalArrayOfFeatures = brokerArray;
    };

    totalArray.push(generalArrayOfFeatures);

    console.log('итого тотал - ');
    console.log(totalArray);

    if (totalArray.length === 0) {
      resultArray = newArray;
    };

    if (totalArray.length === 1) {
      resultArray = totalArray[0];
    };

    if (totalArray.length > 1) {
      let brokerArray = totalArray[0];
      totalArray.slice(1).forEach(item => {
        brokerArray = getArrayOfDuplicates(brokerArray, item);
        console.log('объединяем тотал');
        console.log(brokerArray);
      });
      resultArray = brokerArray;
    };

    result = resultArray;
    console.log('result такой');
    console.log(result);

    //удалить маркеры

    let markers = createMarkers(result.slice(0, 10));
    removeMarkers();
    addMarkers(markers);

  }

  form.addEventListener('change', filterChangeHandler);
};

export { filterAds };
