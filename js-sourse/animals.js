
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