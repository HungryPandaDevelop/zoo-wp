
if ($('#map').length) {
  ymaps.ready(function () {

    let arrCoords = [];
    let arrAddresses = $('.contacts-address-line');

    let slug = $('#map').data('slug');

    let myMap = new ymaps.Map('map', {
      center: [55.755864, 37.617698],
      zoom: 12
    }, {
      searchControlProvider: 'yandex#search'
    });

    myMap.controls.remove('trafficControl'); // Пробки
    myMap.controls.remove('typeSelector'); // Тип карты
    myMap.controls.remove('fullscreenControl'); // Полноэкранный режим
    myMap.controls.remove('rulerControl'); // Линейка
    myMap.controls.remove('geolocationControl'); // Геолокация
    myMap.controls.remove('searchControl'); // Поиск

    // Убираем слои
    // myMap.layers.remove('traffic#actual'); // Слой пробок
    // myMap.layers.remove('routeEditor'); // Редактор маршрутов

    let objectManager = new ymaps.ObjectManager({
      clusterize: true,
      gridSize: 32,
      clusterDisableClickZoom: true,
      openBalloonOnClick: false

    });

    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);

    arrAddresses.each(function (index) {
      // arrCoords.push($(this).data('coords'));
      arrCoords.push({
        "type": "Feature", "id": index, "geometry": { "type": "Point", "coordinates": $(this).data('coords') },
        "properties": {
          "id_post": $(this).data('id')
        }
      });

    });

    objectManager.add({
      "type": "FeatureCollection",
      "features": arrCoords
    });


    let mapInfo = $('.map-info');
    let mapInfoContainer = mapInfo.find('.map-info-container');
    //




    function updateVisiblePoints(arrVisibleMarker) {
      mapInfoContainer.empty();

      mapInfo.addClass('active loading');



      $.ajax({
        type: "POST",
        url: "/wp-json/get/posts",
        data: {
          'slug': slug,
          'map': 'true',
          'arrVisibleMarker': arrVisibleMarker
        },
        success: function (result) {
          mapInfo.removeClass('loading');

          result.forEach((item) => {
            console.log('item', item)
            item.slug === 'companies' && mapInfoContainer.append(mapItemCompanies(item));
            item.slug === 'sales' && mapInfoContainer.append(mapItemSales(item));

          });


          let mapItemSlider = $('.map-item-slider');
          mapItemSlider.lightSlider({
            item: 1,
            // loop: true,
            slideMove: 1,
            pager: false,
            addClass: 'map-item-slider-container'
          });

          $('.img-cover').each(function () {
            let imgSrc = $(this).find('img').attr('src');
            //console.log(imgSrc);
            $(this).css('background-image', 'url(' + imgSrc + ')');
          });
        }
      });
    }

    // ПОЛУЧАЕМ И ВЫВОДИМ ПРИ КЛИКЕ
    objectManager.objects.events.add('click', function (e) {
      let objectId = e.get('objectId');
      let objectData = objectManager.objects.getById(objectId);
      let idPost = objectData.properties.id_post;

      console.log(idPost)
      updateVisiblePoints([idPost]);
    });

    objectManager.clusters.events.add('click', function (e) {
      let clusterId = e.get('objectId');
      let cluster = objectManager.clusters.getById(clusterId);
      let arrVisibleMarker = cluster.features.map(item => item.properties.id_post);

      console.log('arrVisibleMarker', arrVisibleMarker)
      updateVisiblePoints(arrVisibleMarker);
    });

    $('.close-btn--map-popup').on('click', function () {
      mapInfoContainer.empty();

      mapInfo.removeClass('active loading');
    });


    myMap.setBounds(myMap.geoObjects.getBounds(), {
      checkZoomRange: true
    }).then(function () {
      if (myMap.getZoom() > 12) myMap.setZoom(12);
    });
  });


}

// checkbox.radio Кнопки
let choiseBtn = $('.choise-input-btn');

choiseBtn.on('click', function () {
  let btnValue = $(this).data('value');
  let choiseParent = $(this).parent();
  let choiseInput = choiseParent.find('.choise-input-field');

  if ($(this).hasClass('active')) {
    choiseInput.val('');
    $(this).removeClass('active');
  } else {
    choiseInput.val(btnValue);
    choiseParent.find('.choise-input-btn').removeClass('active');
    $(this).addClass('active');
  }
  console.log(btnValue)
});
// checkbox.radio Кнопки
