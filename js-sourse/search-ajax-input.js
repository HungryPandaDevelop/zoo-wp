
let animalsInput = $('.animals-input-ajax');
let animalsTimeId;
let spinner;
// let mainBox;
let mainSelect;
// let mainSelectArrow;
let mainSelectClose;
let searchVal = 0;


// console.log('.animalsInput', dataRace)

const ajaxAnimals = (searchVal) => {


  $.ajax({
    type: "GET",
    url: "/wp-json/animals/all",
    data: { 'search': searchVal },
    beforeSend: function () {
      // setting a timeout
      mainSelectClose.removeClass('active');
      spinner.addClass('active');
    },
    success: generateContentAnimals,
    // error: handleError
  });
}


const appendResult = (result) => {

  const html = result.map(item => `<li>${item.title}</li>`);
  mainBoxContent.append(html);
  // console.log('ht', html)

}
const generateContentAnimals = (result) => {

  spinner.removeClass('active');
  mainSelectClose.addClass('active');
  if (animalsInput.is(':focus')) {
    mainBoxContent.empty();
    mainSelect.addClass('active');
  }


  if (result.length === 0) {
    mainBoxContent.append('<div class="empty-list">Список пуст</div>');
  }
  appendResult(result);
}

$('.search-select-animals').on('click', 'li', function () {
  $('.animals-input-ajax').val($(this).text());
  mainBoxContent.empty();
  mainSelect.removeClass('active');
});


$('.search-select-animals').on('click', 'em', function () {
  animalsInput.val('');
  // mainSelectArrow.removeClass('active');
  mainSelectClose.removeClass('active');


  mainSelect.addClass('active');
  mainBoxContent.empty();
});

const startSearchAnimals = () => {

  searchVal = animalsInput.val();
  mainSelect = animalsInput.closest('.search-select');
  spinner = mainSelect.find('.preloader-container');
  mainBoxContent = mainSelect.find('ul');
  // mainSelectArrow = mainSelect.find('i');

  mainSelectClose = mainSelect.find('em');

  if (searchVal.length > 0) {
    // clearTimeout(animalsTimeId);
    // animalsTimeId = setTimeout(() => {
    ajaxAnimals(searchVal);
    // mainSelectArrow.addClass('active');

    // }, 2000);
  } else {
    console.log("in empty")
    // mainSelectArrow.removeClass('active');

    mainSelectClose.removeClass('active');
  }

}

animalsInput.on('keyup', function () {
  startSearchAnimals();
});

animalsInput.on('blur', function () {
  mainSelect.removeClass('active');
});

animalsInput.on('focus', function () {
  if (searchVal.length > 0) {
    mainSelect.addClass('active');
  }
});

animalsInput.length > 0 && startSearchAnimals();