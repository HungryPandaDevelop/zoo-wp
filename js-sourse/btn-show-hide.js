
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