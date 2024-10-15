$(document).ready(function () {

  if ($('#map').length) {
    ymaps.ready(function () {

      let arrCoords = [];
      let arrAddresses = $('.contacts-address-line');


      console.log('coords', arrAddresses.eq(0).data('coords'))

      let mapMarkerSrc = $('#map').data('marker');

      let myMap = new ymaps.Map('map', {
        center: arrAddresses.eq(0).data('coords'),
        zoom: 9
      });


      arrAddresses.each(function (index) {
        arrCoords.push($(this).data('coords'));
        let phone = $(this).data('phone');
        let address = $(this).data('address');

        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
          `<div class="box-map">
				<div class="box-map-content">
					<div>${phone}</div>
					<div>${address}</div>
				</div>
			</div>`);

        let myPlacemarkWithContent = [];

        myPlacemarkWithContent[index] = new ymaps.Placemark(arrCoords[index], {
          id: index + 1,
          hintContent: 'Собственный значок метки с контентом',
        }, {
          balloonContentLayout: BalloonContentLayout,
          // Опции.
          // Необходимо указать данный тип макета.
          hideIconOnBalloonOpen: false,
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: mapMarkerSrc,
          // Размеры метки.
          iconImageSize: [30, 37],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -37],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 37] //,
          // Макет содержимого.
          //iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects.add(myPlacemarkWithContent[index]);
      });

      // Вызываем метод setBounds() после завершения цикла

      myMap.setBounds(myMap.geoObjects.getBounds(), {
        checkZoomRange: true
      }).then(function () {
        if (myMap.getZoom() > 12) myMap.setZoom(12);
      });


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