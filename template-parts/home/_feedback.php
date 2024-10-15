<section class="feedback-home">
  <div class="main-grid">
    <div class="col-5 col-md-12">
      <h2>Бесплатная консультация</h2>
      <div class="feedback-text">Свяжитесь с нами по телефону <a href="tel:<?php echo $GLOBALS['crbAll']['phones'][0]['link']; ?>">
    <? echo $GLOBALS['crbAll']['phones'][0]['title']; ?>
  </a>
        или заполните эту контактную форму, и мы свяжемся с Вами в ближайшее время</div>
    </div>
    <div class="col-7 col-md-12 form-default">
      <?=do_shortcode('[contact-form-7 id="7bc3341" title="Форма главная страница" html_class="form main-grid"]');?>
    </div>
  </div>

</section> 