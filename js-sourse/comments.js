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