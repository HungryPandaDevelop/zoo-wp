// let mainSlider = $('.main-slider');

// mainSlider.lightSlider({
//   item: 1,
//   loop: true,
//   slideMove: 1,
//   easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//   speed: 600,
//   addClass: 'main-slider-container',
//   responsive: [
//     {
//       breakpoint: 576,
//       settings: {
//         controls: false,
//       }
//     }
//   ]
// });



let thumbSlider = $('.thumb-slider');

thumbSlider.lightSlider({

  gallery: true,
  item: 1,
  thumbItem: 4,
  slideMargin: 0,
  enableDrag: false,
  currentPagerPosition: 'left',
  addClass: 'thumb-slider-container',
});



let thumbSliderVericale = $('.thumb-slider-verticale');

let WindowWidth = $(window).width();

let thumbHeight = 720;
let thumbItem = 6;

if (WindowWidth < 1024) {
  thumbHeight = 400;
  thumbItem = 5;
}

if (WindowWidth < 820) {
  thumbHeight = 320;
  thumbItem = 4;
}


if (WindowWidth > 576) {

  thumbSliderVericale.lightSlider({

    gallery: true,
    item: 1,
    vertical: true,
    verticalHeight: thumbHeight,
    // adaptiveHeight: false,
    enableDrag: true,
    controls: true,
    addClass: 'animals-slider-container',
    // vThumbWidth:50, 
    thumbItem: thumbItem,

  });
} else {
  thumbSliderVericale.lightSlider({

    gallery: true,
    item: 1,
    thumbItem: 4,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: 'left',
    addClass: 'thumb-slider-container',

  });
}

let petsSliderVericale = $('.pets-slider-verticale');



if (WindowWidth > 576) {

  petsSliderVericale.lightSlider({

    gallery: true,
    item: 1,
    vertical: true,
    verticalHeight: 240,
    enableDrag: true,
    controls: true,
    // addClass: 'pets-slider-container',
    // vThumbWidth:50, 
    thumbItem: 4,

  });
} else {
  petsSliderVericale.lightSlider({

    gallery: true,
    item: 1,
    thumbItem: 4,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: 'left',
    addClass: 'pets-slider-container',

  });
}





$('.input-date').each(function () {
  let dp = new AirDatepicker(this, {
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({ date }) {
      $(this).addClass('input-empty');
      // console.log('done', date) 
    }
  });
})


function toInput(date) {
  $(date.input).parents('.range-slider-js').find('.from-range').val(date.from)
  $(date.input).parents('.range-slider-js').find('.to-range').val(date.to)
}


$(".range-slider").each(function () {
  let type = $(this).data('type');
  let min = $(this).data('min');
  let max = $(this).data('max');
  let from = $(this).data('from');
  let to = $(this).data('to');

  $(this).ionRangeSlider({
    type: type,
    min: min,
    max: max,
    from: from,
    to: to,
    skin: "round",
    drag_interval: false,
    grid_snap: true,
    grid_num: 10,
    onChange: toInput,
    // step: 100
  });
});

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})


