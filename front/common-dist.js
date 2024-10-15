$(document).ready(function(){

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






var longPhone = 16;
$('.phone-mask').mask('+7(999)999-99-99');
$('.phone-mask').on('keydown', function (e) {

    // onkeypress = 'return event.charCode >= 48 && event.charCode <= 57'

    if (!(e.which >= 48 && e.which <= 57 || e.which == 8)) {
        return false;
    }
});





// check email
var r = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
var mailInput;
var mailFlag = 1;
var isEmpty = false;

function checkMail(elThis) {
	mailInput = elThis.val();

	if (!r.test(mailInput)) {
		elThis.addClass('mail-error');

	} else {
		elThis.removeClass('mail-error')
	}
}

$('.check-mail').on('keyup', function () {
	checkMail($(this));
});
// check email

// check require
let timeErrId;
$('.btn-send').on('click', function (e) {
	clearTimeout(timeErrId);

	isEmpty = false;

	// checkMail($(this).parents('.form').find('.check-mail'));

	$(this).parents('.form').find('.require').each(function () {

		// if ($(this).attr('type') == 'checkbox') {
		// 	if (!$(this).is(':checked')) {
		// 		$(this).parent().addClass('input-error');
		// 		isEmpty = true;
		// 	}
		// }

		// if ($(this).is('.style-select')) {

		// 	if ($(this).prev().attr('data-val') == 0) {

		// 		$(this).prev().addClass('input-error');
		// 		isEmpty = true;
		// 	}
		// }

		// if ($(this).attr('type') == 'file') {
		// 	$(this).next().addClass('input-error');
		// 	isEmpty = true;
		// }

		if ($(this).val().length < 3) {
			isEmpty = true;
			$(this).addClass('input-error');
		}

	});

	let mailInput = $(this).parents('.form').find('.check-mail');

	if (!r.test(mailInput.val())) {
		isEmpty = true;
		mailInput.addClass('input-error');
	}

	timeErrId = setTimeout(function () {
		$('.input-error').removeClass('input-error');
	}, 3000);

	console.log('isEmpty', isEmpty)

	if (isEmpty == true) {
		e.preventDefault();
	};
});

// check require
$('.wpcf7-form-control-wrap').each(function () {
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});



$('.order-pets-btn').on('click', function () {


  let parentEl = $(this).parents('.companies-main-info')
  let mainEmail = parentEl.find('.mail-for-pets')
  let mainName = parentEl.find('.company-for-pets')
  $('.pets-name').val(parentEl.find('h2').text());
  $('.pets-mail ').val(mainEmail.text());
  $('.pets-compamies').val(mainName.text());
});

$('.order-sales-btn').on('click', function () {

  let parentEl = $(this).parents('.sales-sidebar');
  let mainEmail = parentEl.find('.mail-for-sales');
  let mainName = parentEl.find('.company-for-sales');
  $('.sales-name').each(function () {
    $(this).val($('.content h1').text());
    $(this).text($('.content h1').text());
  })
  $('.sales-mail').val(mainEmail.text());
  $('.sales-compamies').val(mainName.text());
});


$('.order-item-sales-btn').on('click', function () {

  let parentEl = $(this).parents('.sales-item');
  let mainEmail = parentEl.find('.mail-for-sales');
  let mainName = parentEl.find('.company-for-sales');
  console.log(parentEl.find('h2').text());

  $('.sales-name').each(function () {
    $(this).val(parentEl.find('h2').text());
    $(this).text(parentEl.find('h2').text());
  });

  $('.sales-mail').val(mainEmail.text());
  $('.sales-compamies').val(mainName.text());
});

// wp forma 7 pets order



document.addEventListener('wpcf7mailsent', function (event) {
  console.log('mail sent OK');
  console.log(event.detail)

  $('.popup').addClass('send-success');

  setTimeout(function () {
    $('.wpcf7-form').attr('data-status', 'init');
    $('.wpcf7-form').removeClass('sent invalid');
    $('.wpcf7-form').addClass('init');

    $('.element-show').removeClass('show');

  }, 4000);

  setTimeout(function () {
    $('.popup').removeClass('send-success');
  }, 4500);

}, false);

document.addEventListener('wpcf7invalid', function (event) {

  // Stuff
  setTimeout(function () {
    $('.wpcf7-form').attr('data-status', 'init');
    $('.wpcf7-form').removeClass('sent invalid');
    $('.wpcf7-form').addClass('init');
    $('.wpcf7-form').addClass('init');
  }, 1500);

}, false); 
// img cover start
$('.img-cover').each(function () {
  let imgSrc = $(this).find('img').attr('src');
  //console.log(imgSrc);
  $(this).css('background-image', 'url(' + imgSrc + ')');
});
// img cover file start
 // style input file start

let ObjfieldFile = $('.input-file');
let flagFileMulti;
let textChoise;
let sizeFile;
let nameFile;

function createNewFileContainer(textChoiseParam, flagFileMultiParam, hintParam){
		let fileContainer = $('<div class="file-input-item"><input class="input-file" type="file" data-flagM="'+flagFileMultiParam+'" accept=".jpg,.png"></div>')
		let noticeFile = $('<div class="notice-file notice-big-file"><em>Файл слишком большой</em><i></i></div>');
		let docorateFile = $('<div class="file-decorate"><span>'+textChoiseParam+'</span><i></i></div>');
		
		return fileContainer.append(docorateFile).append(noticeFile);
}

ObjfieldFile.each(function(){

		textChoise = $(this).data('textchoise') ? $(this).data('textchoise') :  'Загрузите изображение';
		flagFileMulti = $(this).data('multy') ?  $(this).data('multy') : 0;
		textHint = $(this).data('hint');

		$(this).replaceWith(createNewFileContainer(textChoise, flagFileMulti, textHint));

});



$('body').on('click', '.file-decorate', function () {

		let container = $(this).parents('.file-input-item');
		container.find('.input-file').trigger('click');
});

$('body').on('change', '.input-file', function () {
		nameFile = $(this).val().replace(/C:\\fakepath\\/i, '');
		let container = $(this).parents('.file-input-item');
		
		if(nameFile.length>0){
				sizeFile = this.files[0].size;
				if(sizeFile < 500000){
						container.find('span').text(nameFile);
						container.addClass('file-decorate-full');

						flagFileMulti = $(this).data('flagm');

						if (flagFileMulti == 1) {
								$(this).parents('.file-input-item').after(createNewFileContainer(textChoise,"1"));
						}
				}
				else{
					
					$(this).parents('.file-input-item').find('.notice-file').addClass('notice-file--show');

					setTimeout(function(){
						$('.notice-file').removeClass('notice-file--show');
					},3000);
				}
		}
});

$("body").on("click", ".file-decorate i", function (e) {
		e.stopPropagation();
		flagFileMulti = $(this).parents('.file-input-item').find('.input-file').data('flagm');
		let container = $(this).parents('.file-input-item');
		console.log(flagFileMulti);
		if (flagFileMulti == 1) {
				container.remove();
		}
		else{
				container.replaceWith(createNewFileContainer(textChoise,"0"));
		}
});
 // style input file end
// custom-select

$('.style-select').each(function () {
  const select = $(this);
  const selectedText = select.find('option:selected').text();
  const dataText = select.data('text') || selectedText;
  const dataClass = select.data('class') ?? '';

  let selectOptions = '';

  select.find('option').each(function (index, option) {
    selectOptions +=
      `<li
          data-index="${index}" 
          data-value="${$(option).val()}"
          ${$(this).attr('selected') ? 'class="hide-selected"' : ''}
          >
          ${$(option).text()}
        </li>`;
  });

  const customSelectBox = $(
    `<div class='custom-select ${dataClass}' >
        <span>${dataText}</span>
        <ul class='ln'>${selectOptions}</ul>
        <i></i>
      </div> `
  );

  select.before(customSelectBox).hide();
});

$('body').on('click', function (evt) {
  const target = $(evt.target);
  if (!target.closest('.custom-select').length) {
    $('.custom-select').removeClass('active');
  }
});


$(document).on('click', '.custom-select', function (e) {
  e.preventDefault();
  const currentSelect = $(this);
  $('.custom-select').not(currentSelect).removeClass('active');
  currentSelect.toggleClass('active');
});


$(document).on('click', '.custom-select li', function () {
  const li = $(this);
  const index = li.data('index');
  const parent = li.closest('.custom-select');
  const select = parent.next('.style-select');

  select.find('option').eq(index).prop('selected', true);
  parent.find('span').text(li.text());

  parent.find('li').removeClass('hide-selected');
  li.addClass('hide-selected');
});


// custom-select

// checkbox.radio Кнопки
let choiseBtn = $('.choise-input-btn');

choiseBtn.on('click', function () {

  $('.search-input-ajax').val('')

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

let boxContainer = $('.search-tag-container');
let elTag = (text) => (`<div class="search-tag"><span>${text}</span><i></i></div>`);

let mainBox = $('.search-list');

const spinnerNew = $('.preloader-container');

let mainSearch = $('.search');

let searchTimeId;

let inputAjax = $('.search-input-ajax');
let liteSearch = inputAjax.data('light');
let allResults = [];

let dataRace;
let raceInput = $('.choise-input-race');

dataRace = raceInput.val();

const ajaxSearch = (searchVal) => {
  dataRace = raceInput.val();

  $.ajax({
    type: "GET",
    url: "/wp-json/animals/all",
    data: { 'search': searchVal, 'term': dataRace },
    success: generateContent,
    error: handleError
  });
}



const handleError = (error) => {
  console.error('Error occurred during AJAX request:', error);
  // Add error handling logic here, such as displaying an error message to the user
};


const generateContent = (result) => {
  console.log('test aj', result)
  allResults = result;
  mainBox.empty();
  spinnerNew.removeClass('active');



  let select = (title, slug) => {
    return liteSearch ? `<li><a class="choise-tag" href="${slug}">${title}</a></li>` : `<li><a class="add-tag" href="${slug}">${title}</a></li>`;
  }

  if (result.length > 0) {
    const html = `<ul class="ln">${result.map(({ title, slug }) => select(title, slug)).join('')}</ul>`;
    mainBox.append(html);
  } else {
    mainBox.append('<div class="empty-list">Список пуст</div>');
  }

  mainBox.addClass('active');

}




inputAjax.on('keyup', function () {
  let search = $(this).closest('.search');
  let searchVal = $(this).val();

  if (searchVal.length > 1) {

    spinnerNew.addClass('active');
    search.addClass('search-on');

    clearTimeout(searchTimeId);
    searchTimeId = setTimeout(() => {

      ajaxSearch(searchVal);

    }, 2000);
  } else {
    allResults = [];
    spinnerNew.removeClass('active');
    mainBox.empty();
    mainBox.removeClass('active');
    search.removeClass('search-on');
  }
});




$('.search-input').on('blur', function () {

  mainBox.removeClass('active');
});

$('.search-input').on('focus', function () {

  if (allResults.length > 0) {
    mainBox.addClass('active');
  }
});

// Додавить крестик в каждой поиске

function clearCloseField(el) {
  let search = el.closest('.search');
  search.removeClass('search-on');
  mainBox.removeClass('active');
  inputAjax.val('');
  allResults = [];
  setTimeout(function () {
    mainBox.empty();
  }, 250);
}

mainSearch.on('click', '.close-btn', function () {
  clearCloseField($(this));
});

// ЗАБРАТЬ ИЗ СТРОКИ
function getTagsFromUrl() {
  const url = new URL(window.location);
  const specializationParam = url.searchParams.get('specialization');

  if (specializationParam) {
    // Декодируем и разбиваем значение на массив по разделителю ", "
    return decodeURIComponent(specializationParam).split(', ');
  } else {
    // Если параметр отсутствует, возвращаем пустой массив
    return [];
  }
}
// ЗАБРАТЬ ИЗ СТРОКИ


// РАБОТА СО СТРОКОЙ
function updateFilterUrl() {
  let inputSpec = $('.specialization-input');
  if (arrTags.length === 0) {
    inputSpec.val('');
  } else {
    inputSpec.val(arrTags.join(', '));
  }

}

// РАБОТА СО СТРОКОЙ


// ДОБАВЛЕНИЕ ТЕГОВ



let arrTags = getTagsFromUrl();
let arrTagsSlug = [];


if (arrTags.length > 0) {
  updateTagContainer(arrTags);
}



function updateTagContainer(tags) {
  boxContainer.empty();
  const html = tags.map(item => elTag(item)).join('');
  boxContainer.append(html);
}

$('body').on('click', '.choise-tag', function (e) {
  e.preventDefault();

  let singleTag = $(this).text();

  inputAjax.val(singleTag);
});

$('body').on('click', '.add-tag', function (e) {
  e.preventDefault();

  let singleTag = $(this).text();
  let singleTagSlug = $(this).attr('href');
  if (!arrTags.includes(singleTag)) {
    arrTags.push(singleTag);
  } else {
    arrTags = arrTags.filter(item => item !== singleTag);
  }
  updateTagContainer(arrTags);
  updateFilterUrl();

  $('.map-filter').submit();
});

$('body').on('click', '.search-tag', function () {
  $(this).remove();
  let singleTag = $(this).find('span').text();
  arrTags = arrTags.filter(item => item !== singleTag);
  updateFilterUrl();

  // console.log($(this).parents('.map-filter'))

  $('.map-filter').submit();
});
// ДОБАВЛЕНИЕ ТЕГОВ



$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
    $('.popup').removeClass('send-success');
});
$('.popup-overlay-js').on('click', function (e) {
    $(this).parents('.element-show').removeClass('show');
    $('.popup').removeClass('send-success');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
        $('.popup').removeClass('send-success');
    }
});

$('body').on('click', '.element-btn', function (e) {
    e.preventDefault();

    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');

    $('[data-element="' + activeIndex + '"].element-show').addClass('show');


});
$('.password-field').on('click','i',changeStatePass);
let visibility = true;
function changeStatePass(){

  console.log(visibility);

  let thisEl = $(this);

  let changePass = (el,type,bool) => {
    $('.password-field').find('input').attr('type',type);
    el.attr('data-visibility', bool);
    visibility = !visibility;
  }

  visibility ? changePass(thisEl,'text', visibility) : changePass(thisEl,'password', visibility)

}


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



let detailTabs = $('.tabs');
if(detailTabs.length > 0){
  const onHoverMoveCarriage = function(num){
    let widthCarriage = detailTabs.find('li').eq(num).width();
    let offsestLeftCarriage = detailTabs.find('li').eq(num).position().left;
    $('.tabs-carriage').css({width: widthCarriage+'px', left: offsestLeftCarriage+'px'});
  }
  let timeOutId;
  let curretTabs = 0;
  let timeReturn = 500;

  detailTabs.find('li').hover(
  function(){

    clearInterval(timeOutId)
    onHoverMoveCarriage($(this).index());

  
  },function(){

    timeOutId = setTimeout(function(){
      onHoverMoveCarriage(curretTabs);
    }, timeReturn);
  });

  detailTabs.find('li').on('click',function(){
    
    curretTabs = $(this).index();
    detailTabs.find('li').removeClass('active').eq(curretTabs).addClass('active');
    onHoverMoveCarriage(curretTabs);

    $('.tabs-item').removeClass('active').eq(curretTabs).addClass('active');
  });

  onHoverMoveCarriage(0);

}
let commetsStarBlock = $('.comments-stars');

commetsStarBlock.on('click', '.stars-ico', function () {
  // console.log('cl', $(this).index());

  commetsStarBlock.find('.stars-ico').removeClass('active');
  let numRating = $(this).data('index');

  commetsStarBlock.find('.stars-ico').slice(0, numRating).addClass('active');
  console.log(numRating, commetsStarBlock.find('.stars-ico').slice(0, numRating))
  $(this).find('input').prop('checked', true);
}); 

$('.animals-nav').on('click', 'li span', function () {
  let point = $(this).data('index');
  console.log('index', point);
  $('html, body').animate({ scrollTop: $('.' + point).offset().top - 130 + 'px' }, 'slow');
});


const formSearchAnimals = $('.animals-search-js');
const inputElements = formSearchAnimals.find('input');
const selectElements = formSearchAnimals.find('.custom-select li');

function handleSubmitForm() {
  let idTimeSearch;
  clearTimeout(idTimeSearch);
  idTimeSearch = setTimeout(() => {
    $(this).parents('form').submit();
  }, 500);
};

inputElements.on('keyup', handleSubmitForm);
selectElements.on('click', handleSubmitForm);
// COMMENTS FORM
let authorInput = $('.comments-author');
let emailInput = $('.comments-email');
let avatarInput = $('.comments-avatar');

let startAuthor;
let startEmail;
let startAvatar;

// console.log('ud', userData)

if (userData) {
  $('.comments-form-stub').remove();
  const { user_email, first_name, last_name, extra_name, foto_profilya } = userData;

  startAuthor = `${first_name} ${last_name} ${extra_name}`;

  startEmail = user_email;

  if (foto_profilya) {
    if (foto_profilya != '[]') {
      startAvatar = JSON.parse(foto_profilya);
      startAvatar = startAvatar[0].url;
    }
  }

  authorInput.val(startAuthor);
  emailInput.val(startEmail);
  avatarInput.val(startAvatar);
}


$('.comments-anonim-js input').on('click', function () {

  let checkAnonim = $(this);
  if (checkAnonim.is(':checked')) {

    authorInput.val('Аноним').addClass('input-hide');
    emailInput.val('anonim@zoonika.ru').addClass('input-hide');
    avatarInput.val('');
  } else {

    // console.log('uncheck');
    authorInput.val(startAuthor).removeClass('input-hide');
    emailInput.val(startEmail).removeClass('input-hide');
  }
});

$('.comments-form-stub').on('click', function () {
  $('.btn-container-comments').addClass('active');
});

// COMMENTS FORM
// console.log('item test')
let mapItemCompanies = ({
  specialization_company,
  images,
  link,
  value,
  address_company,
  sales_count

}) => {


  return `
    <div class="map-item">
      <h3><a href="${link}">${value}</a></h3>
      <div class="map-item-slider">
        ${images.map(img => `<div class="map-item-img"><div class="img-cover"><img src="${img.url}" alt="pic" /></div></div>`).join('')}
      </div>
      <ul class="map-item-info ln">
        <li>Специализация: <b>${specialization_company.map(el => `<span>${el.name}</span>`).join(', ')}</b></li>
        <li>Адрес: <b>${address_company.address}</b></li>
        <li>Количество объявлений: <b>${sales_count}</b></li>
      </ul> 
      <div class="btn-container">
        <a class="btn btn--blue" href="${link}">Подробнее</a>
      </div>
    </div >
  `
};
// console.log('item test')
let mapItemSales = ({
  price,
  images,
  link,
  value,
  birth,
  gender,
  race,
  target

}) => {
  console.log(target)

  return `
    <div class="map-item">
      <h3><a href="${link}">${value}</a></h3>
      <div class="map-item-box">
      ${target && `<div class="sales-item-type ${target.value}">${target.label}</div>`}
      <div class="map-item-slider">
        ${images.map(img => `<div class="map-item-img"><div class="img-cover"><img src="${img.url}" alt="pic" /></div></div>`).join('')}
      </div>
      </div>
      
      <ul class="map-item-info ln">
        ${price ? (`<li class="sales-price">Цена: <b>${price === 'empty' ? 'Договорная' : price}</b></li>`) : ''}
        ${birth ? (`<li>Дата рождения: <b>${birth}</b></li>`) : ''}
        ${gender ? (`<li>Пол: <b>${gender.label}</b></li>`) : ''}
        ${race ? (`<li>Порода: <b>${race.race.name}</b></li>`) : ''}
      </ul>
      <div class="btn-container">
        <a class="btn btn--blue" href="${link}">Подробнее</a>
      </div>
    </div>
  `
};

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



});
//# sourceMappingURL=common-dist.js.map
