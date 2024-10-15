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
let raceInput = $('.filter-race input');
dataRace = raceInput.filter(':checked').val();
raceInput.on('change', function () {
  dataRace = $(this).val();
  // console.log('test', dataRace)
});



// console.log('test', dataRace)

const ajaxSearch = (searchVal) => {

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



  let select = (title) => {
    return liteSearch ? `<li><a class="choise-tag" href="#">${title}</a></li>` : `<li><a class="add-tag" href="#">${title}</a></li>`;
  }

  if (result.length > 0) {
    const html = `<ul class="ln">${result.map(({ title }) => select(title)).join('')}</ul>`;
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

