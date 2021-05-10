"use strict";

//Yandex Map
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("contacts__map", {
    center: [55.696699, 37.505061],
    zoom: 18
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.696699, 37.505061]
    }
  });
  myMap.geoObjects.add(myGeoObject);
}
//# sourceMappingURL=yandex-map.js.map
