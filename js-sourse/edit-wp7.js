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