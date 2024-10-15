$(document).ready(function () {



  if ($('#map').length) {
    ymaps.ready(function () {

      let arrCoords = [];
      let arrAddresses = $('.contacts-address-line');

      // let mapMarkerSrc = $('#map').data('marker');

      let myMap = new ymaps.Map('map', {
        // center: arrAddresses.eq(0).data('coords'),
        center: [55.755864, 37.617698],
        zoom: 12
      }, {
        searchControlProvider: 'yandex#search'
      });

      let objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: true,
        openBalloonOnClick: false

      });

      objectManager.objects.options.set('preset', 'islands#greenDotIcon');
      objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
      myMap.geoObjects.add(objectManager);

      // let myPlacemarkWithContent = [];

      arrAddresses.each(function (index) {
        // arrCoords.push($(this).data('coords'));
        arrCoords.push({
          "type": "Feature", "id": index, "geometry": { "type": "Point", "coordinates": $(this).data('coords') },
          "properties": {
            // "balloonContent": "/* Текст балуна */",
            // "clusterCaption": "/* Заголовок метки */",
            "id_post": $(this).data('id')
          }
        });

        // let phone = $(this).data('phone');
        // let address = $(this).data('address');

        // BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        // 	`<div class="box-map">
        // 		<div class="box-map-content">
        // 			<div>${phone}</div>
        // 			<div>${address}</div>
        // 		</div>
        // 	</div>`);



        // myPlacemarkWithContent[index] = new ymaps.Placemark(arrCoords[index], {
        // 	id: index + 1,
        // 	// hintContent: 'Собственный значок метки с контентом',
        // }, {
        // 	// balloonContentLayout: BalloonContentLayout,
        // 	// Опции.
        // 	// Необходимо указать данный тип макета.
        // 	// hideIconOnBalloonOpen: false,
        // 	// iconLayout: 'default#imageWithContent',
        // 	// Своё изображение иконки метки.
        // 	// iconImageHref: mapMarkerSrc, // ИКОНКА
        // 	// Размеры метки.
        // 	// iconImageSize: [30, 37],
        // 	// Смещение левого верхнего угла иконки относительно
        // 	// её "ножки" (точки привязки).
        // 	// iconImageOffset: [-15, -37],
        // 	// Смещение слоя с содержимым относительно слоя с картинкой.
        // 	// iconContentOffset: [15, 37] //,
        // 	// Макет содержимого.
        // 	//iconContentLayout: MyIconContentLayout
        // });

        // myMap.geoObjects.add(myPlacemarkWithContent[index]);
      });

      objectManager.add({
        "type": "FeatureCollection",
        "features": arrCoords
      });

      // let centerMap;
      // myMap.events.add('boundschange', function () {
      // 	// map.balloon.setPosition(map.getCenter());
      // 	// console.log(myMap.getCenter())
      // 	centerMap = myMap.getCenter();
      // });

      // ПОЛУЧАЕМ И ВЫВОДИМ ПРИ СМЕНЕ КАРТЫ 

      // ПОЛУЧАЕМ И ВЫВОДИМ ПРИ КЛИКЕ
      objectManager.objects.events.add('click', function (e) {
        let objectId = e.get('objectId');
        let objectData = objectManager.objects.getById(objectId);
        let idPost = objectData.properties.id_post;

        console.log(idPost)
        // updateDataForPost(idPost);
      });

      objectManager.clusters.events.add('click', function (e) {
        let clusterId = e.get('objectId');
        let cluster = objectManager.clusters.getById(clusterId);
        let arrVisibleMarker = cluster.features.map(item => item.properties.id_post);



        console.log('arrVisibleMarker', arrVisibleMarker)
        // updateDataForCluster(arrVisibleMarker);
      });

      // ПОЛУЧАЕМ И ВЫВОДИМ ПРИ КЛИКЕ

      // function updateVisiblePoints() {
      // 	let objects = ymaps.geoQuery(objectManager.objects).searchInside(myMap);

      // 	// [0]properties._data.id_post // ID НУЖНОГО ПОСТА
      // 	let arrVisibleMarker = objects._objects.map(item => item.properties._data.id_post);


      // 	let mapInfo = $('.map-info');
      // 	mapInfo.empty();
      // 	$.ajax({
      // 		type: "POST",
      // 		url: "/wp-json/get/posts",
      // 		data: {
      // 			'slug': 'companies',
      // 			'map': 'true',
      // 			'arrVisibleMarker': arrVisibleMarker
      // 		},
      // 		success: function (result) {


      // 			result.forEach(({ value, link, img, specialization_company, address_company }) => {
      // 				mapInfo.append(`
      // 						<div class="map-item">
      // 							<div class="map-item-logo"><img src="${img}" alt="pic"/></div>
      // 							<div class="map-item-info">
      // 								<h3><a href="${link}">${value}</a></h3>
      // 								<span>${address_company.address}</span>					
      // 							</div>
      // 						</div>
      // 					`)

      // 			});
      // 		}
      // 	});
      // }

      // updateVisiblePoints();

      // myMap.events.add(['boundschange', 'datachange', 'objecttypeschange'], function () {

      // 	updateVisiblePoints();

      // });

      // ПОЛУЧАЕМ И ВЫВОДИМ ПРИ СМЕНЕ КАРТЫ 


      // if (contains) {
      // 	console.log('contains', contains)
      // } else {
      // 	console.log('contains rem')
      // }

      // Вызываем метод setBounds() после завершения цикла

      // myMap.setBounds(myMap.geoObjects.getBounds(), {
      // 	checkZoomRange: true
      // }).then(function () {
      // 	if (myMap.getZoom() > 12) myMap.setZoom(12);
      // });


      // $(".contacts-address .link").on("click", function (e) {
      //     e.preventDefault();
      //     var itemIndex = $(this).parents(".contacts-address-line").data("index");
      //     $("html,body").animate({
      //         scrollTop: $('.map').offset().top
      //     }, 1000);

      //     console.log("forCenter", [masMark[itemIndex][0], masMark[itemIndex][1]]);


      //     myMap.setCenter([masMark[itemIndex][0], masMark[itemIndex][1]]);

      //     myPlacemarkWithContent[itemIndex].balloon.open();
      // });

    });

  }
});


// let visiblePoints = arrCoords.filter(function (feature) {
// 	let coords = feature.geometry.coordinates;
// 	return coords[0] >= bounds[0][0] && coords[0] <= bounds[1][0] &&
// 				 coords[1] >= bounds[0][1] && coords[1] <= bounds[1][1];
// });