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