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