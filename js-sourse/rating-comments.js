let commetsStarBlock = $('.comments-stars');

commetsStarBlock.on('click', '.stars-ico', function () {
  // console.log('cl', $(this).index());

  commetsStarBlock.find('.stars-ico').removeClass('active');
  let numRating = $(this).data('index');

  commetsStarBlock.find('.stars-ico').slice(0, numRating).addClass('active');
  console.log(numRating, commetsStarBlock.find('.stars-ico').slice(0, numRating))
  $(this).find('input').prop('checked', true);
}); 