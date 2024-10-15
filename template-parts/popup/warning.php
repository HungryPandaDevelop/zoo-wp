<!-- modal-form start-->
<div class="popup element-show" data-element="11">
  <div class="popup-overlay popup-overlay-js"></div>
  <div class="popup-container auto">
    <?php  get_template_part('template-parts/popup/success'); ?>
    <div class="close-btn close-btn--popup close-js"></div>
    <div class="form-default">
      <h3>Ошибка на сайте</h3>
      <!-- <div class="popup-hint">Оставьте заявку, и мы свяжемся с вами в ближайшее время</div> -->
      <?=do_shortcode('[contact-form-7 id="80b757f" title="Форма шапка" html_class="form"]');?>
    </div>

  </div>
</div>
<!-- modal-form end-->