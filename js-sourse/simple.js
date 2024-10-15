$(window).on('load', function () {
  $('.preloader-popup').addClass('loaded');
});



var st = 0;
window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if (st > 0) {
    $('header').addClass('stick');
  }
  else {
    $('header').removeClass('stick');
  }

});




// $(window).on('load',function(){
//   $('.preload').addClass('load');
//   setTimeout(function(){
//     $('.preload').addClass('hide');
//   },2000)
// });



/* animate label all form */
$('.input-box').each(function () {
  $(this).find('input, textarea').on('keyup', function () {
    let lengthInput = $(this).val().length;
    if (lengthInput > 0) {
      $(this).addClass('input-empty');
    }
    else {
      $(this).removeClass('input-empty');
    }
  })

});
/* animate label all form */

// video play rew

$('.video-btn').on('click', function () {
  $(this).hide();
  $(this).prev()[0].play();
});


/*servises*/

$('.services-item').mousemove(function (event) {

  let curX = (event.offsetX - 42);
  let curY = (event.offsetY - 42);

  $(this).find('.btn-item-plus').css({
    left: (curX) + 'px',
    top: (curY) + 'px'
  });
});
/*servises*/

/*faq*/
$('.faq-head').on('click', function () {
  $(this).parent().toggleClass('faq-item--active');
});
/*faq*/

/*sidebar*/
$('.sidebar-search-head').on('click', function () {
  $(this).parents('.sidebar-search-item').toggleClass('active');
});
/*sidebar*/


$('.sidebar-show-js').on('click', function () {
  $('.catalog-sidebar').toggleClass('active');
});
$('.close-sidebar').on('click', function () {
  $('.catalog-sidebar').removeClass('active');
});
/*sidebar*/


/*main page*/
$('.mouse-down-btn-js').on('click', function () {
  $('html, body').animate({ scrollTop: $('.main-home').height() + 'px' }, 'slow');
});
/*main page*/

$('.tabs-sticky').on('click', 'li', function () {
  let index = $(this).index() + 1;
  // console.log(index)
  $('html, body').animate({ scrollTop: $('.tabs-point-' + index).offset().top - 130 + 'px' }, 'slow');
});


$('.scroll-top-js').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
});



let btnBox = $(`<div><span class="link">Далее...</span></div>`);
$('.pets-hidden-box-container').each(function () {
  let heightBox = $(this).height(); // Высота контейнера
  let contentBox = $(this).html(); // Содержимое контейнера

  if (heightBox > 50) { // Проверяем, если высота больше 100px
    // Обертываем содержимое в .pets-hidden-box
    $(this).html('<div class="pets-hidden-box">' + contentBox + '</div>').append(btnBox.clone());
  }
});

$('.pets-hidden-box-container').on('click', '.link', function () {
  let parent = $(this).parents('.pets-hidden-box-container').find('.pets-hidden-box');

  if (parent.hasClass('show')) {
    parent.removeClass('show');
    $(this).text('Далее...');
  } else {
    parent.addClass('show');
    $(this).text('Скрыть');
  }

});



// PETS INF PITOMNIKI
$('.pets-tabs-container').each(function () {
  $(this).find('.pets-tabs-head span').eq(0).addClass('active');
  $(this).find('.pets-tabs-item').eq(0).addClass('active');
})
$('.pets-tabs-head').on('click', 'span', function () {
  let indexTab = $(this).index();

  let parentsTab = $(this).parents('.pets-tabs-container');
  let tabSpanItem = parentsTab.find('.pets-tabs-head span');
  let tabItem = parentsTab.find('.pets-tabs-item');


  tabSpanItem.removeClass('active');
  tabSpanItem.eq(indexTab).addClass('active');

  tabItem.removeClass('active');
  tabItem.eq(indexTab).addClass('active');


});

// PETS INF PITOMNIKI


