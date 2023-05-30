import { createMarkers, addMarkers, removeMarkers } from "./map.js";

const getArrayOfDuplicates = (array1, array2) => {
  return array1.filter(item => array2.includes(item));
};


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
  let totalArray = [];
  let featuresArray = [];
  let result = [];

  const filterChangeHandler = (evt) => {

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
      const index = baseArray.indexOf(array);
      baseArray.splice(index, 1);
    }

    switch (evt.target.id) {
      case 'housing-type':
        if (totalArray.includes(housingTypeArray)) {
          removeArray(housingTypeArray, totalArray);
        };

        if (evt.target.value !== 'any') {
          housingTypeArray = newArray.filter(
            item => (item.offer.type == evt.target.value)
          );
          totalArray.push(housingTypeArray);
        };

        break;

      case 'housing-price':
        if (totalArray.includes(housingPriceArray)) {
          removeArray(housingPriceArray, totalArray);
        };

        if (evt.target.value !== 'any') {
          housingPriceArray = newArray.filter(
            item => {
              switch (evt.target.value) {
                case 'low':
                  return item.offer.price < 10000;

                case 'middle':
                  return item.offer.price >= 10000 && item.offer.price <= 50000;

                case 'high':
                  return item.offer.price > 50000;
              };
          });

          totalArray.push(housingPriceArray);
        };

        break;

      case 'housing-rooms':
        if (totalArray.includes(housingRoomsArray)) {
          removeArray(housingRoomsArray, totalArray);
        };

        if (evt.target.value !== 'any') {
          housingRoomsArray = newArray.filter(
            item => (item.offer.rooms >= evt.target.value)
          );

          totalArray.push(housingRoomsArray);;
        };

        break;

      case 'housing-guests':
        if (totalArray.includes(housingGuestsArray)) {
          removeArray(housingGuestsArray, totalArray);
        };

        if (evt.target.value !== 'any') {
          housingGuestsArray = newArray.filter(
            item => (item.offer.guests >= evt.target.value)
          );

          totalArray.push(housingGuestsArray);
        };
        break;


      default:

      if (totalArray.includes(generalArrayOfFeatures)) {
        removeArray(generalArrayOfFeatures, totalArray);
      };

      switch (evt.target.value) {
        case 'wifi':
          if (evt.target.matches(':checked')) {
            housingWithWifi = filterCurrentFeatures(housingWithWifi, 'wifi');
            featuresArray.push(housingWithWifi);
          } else {
            removeArray(housingWithWifi, featuresArray);
          }
          break;

        case 'dishwasher':
          if (evt.target.matches(':checked')) {
            housingWithDishwasher = filterCurrentFeatures(housingWithDishwasher, 'dishwasher');
            featuresArray.push(housingWithDishwasher);
          } else {
            removeArray(housingWithDishwasher, featuresArray);
          }
          break;

        case 'parking':
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
      };

      if (featuresArray.length === 1) {
        generalArrayOfFeatures = featuresArray[0];
        totalArray.push(generalArrayOfFeatures);
      };

      if (featuresArray.length > 1) {
        let brokerArray = featuresArray[0];

        featuresArray.slice(1).forEach(item => {
          brokerArray = getArrayOfDuplicates(brokerArray, item);
        });

        generalArrayOfFeatures = brokerArray;
        totalArray.push(generalArrayOfFeatures);
      };
    };

    if (totalArray.length === 0) {
      result = newArray;
    };

    if (totalArray.length === 1) {
      result = totalArray[0];
    };

    if (totalArray.length > 1) {
      let brokerArray = totalArray[0];
      totalArray.slice(1).forEach(item => {
        brokerArray = getArrayOfDuplicates(brokerArray, item);
      });
      result = brokerArray;
    };

    //удалить маркеры

    let markers = createMarkers(result.slice(0, 10));
    removeMarkers();
    addMarkers(markers);
  }

  form.addEventListener('change', filterChangeHandler);
};

export { filterAds };
