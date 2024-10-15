let mainSlider = $('.main-slider');

mainSlider.lightSlider({
  item: 1,
  loop: true,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'main-slider-container',
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        controls: false,
      }
    }
  ]
});

// let halfSlider = $('.half-slider');

// halfSlider.lightSlider({
//   item: 1,
//   loop: false,
//   slideMove: 1,
//   easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//   speed: 600,
//   addClass: 'half-slider-container',
//   adaptiveHeight: true,
//   pager: false

// });

// let partnersSlider = $('.partners-slider');

// partnersSlider.lightSlider({
//   item: 5,
//   loop: true,
//   slideMove: 1,
//   easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//   speed: 600,
//   adaptiveHeight: true,
//   slideMargin: 15,
//   addClass: 'partners-slider-container',
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         item: 3,
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         item: 2,
//         controls: false,
//         pager: false
//       }
//     }
//   ]
// });


// let multySlider = $('.multy-slider');

// multySlider.lightSlider({
//   item: 3,
//   loop: false,
//   slideMove: 1,
//   slideMargin: 15,
//   easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//   speed: 600,
//   adaptiveHeight: true,
//   addClass: 'multy-slider-container',
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         item: 2,
//       }
//     },
//     {
//       breakpoint: 576,

//       settings: {
//         item: 1,
//         controls: false,
//       }
//     }
//   ]
// });




// let thumbSlider = $('.thumb-slider');

// thumbSlider.lightSlider({

//   gallery: true,
//   item: 1,
//   thumbItem: 4,
//   slideMargin: 0,
//   enableDrag: false,
//   currentPagerPosition: 'left',
//   addClass: 'thumb-slider-container',
// });



let thumbSliderVericale = $('.thumb-slider-verticale');

thumbSliderVericale.lightSlider({
  gallery: true,
  item: 1,
  // vertical: true,
  enableDrag: true,
  controls: true,
  adaptiveHeight: true,
  addClass: 'thumb-slider-container',
  thumbItem: 6,
  slideMargin: 30,
  verticalHeight: 720,
  responsive: [

    {
      breakpoint: 1024,
      settings: {
        item: 5,
        verticalHeight: 500
      }
    },
    {
      breakpoint: 992,
      settings: {
        item: 2,
        verticalHeight: 500
      }
    },
    {
      breakpoint: 820,
      settings: {
        thumbItem: 4,
        verticalHeight: 360
      }
    },
    {
      breakpoint: 576,
      settings: {
        verticalHeight: 360,
        vertical: false,
        thumbItem: 4,
        currentPagerPosition: 'left',
      }
    }
  ]

});


let petsSliderVericale = $('.pets-slider-verticale');

petsSliderVericale.lightSlider({

  gallery: true,
  item: 1,
  vertical: true,
  verticalHeight: 240,
  enableDrag: true,
  controls: true,
  addClass: 'pets-slider-container',
  // vThumbWidth:50, 
  thumbItem: 4,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        item: 1,
        thumbItem: 4,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
      }
    }
  ]

});






// let longSlider = $('.long-slider');

// longSlider.lightSlider({


//   loop: true,
//   slideMove: 1,
//   easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//   speed: 600,
//   adaptiveHeight: true,
//   addClass: 'long-slider-container',
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         item: 5,
//       }
//     },
//     {
//       breakpoint: 820,
//       settings: {
//         item: 3,
//       }
//     },
//     {
//       breakpoint: 576,

//       settings: {
//         item: 1,
//         controls: false,
//         pager: false
//       }
//     }
//   ]
// });





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
