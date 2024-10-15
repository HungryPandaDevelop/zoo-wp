<!-- popup-menu start 1-->
<div class="popup element-show menu-hamburger" data-element="0">
  <div class="popup-overlay popup-overlay-js"></div>
  <div class="popup-container">
    <div class="close-btn close-btn--popup close-js"></div>
    <div class="menu-mobile">
      <a class="logo" href="/"> <img src="<?php echo get_bloginfo('template_url');?>/images/logo.svg" alt=""></a>
      <nav class="popup-nav">
        <?php  header_menu(); ?>

      </nav>
      <div class="btn-container">
        <a href="/ads-map" class="btn btn--blue btn-map">
          <i></i><span>На карте</span>
        </a>
        <a href="/cabinet" class="btn btn--blue">Добавить питомник</a>
      </div>
    </div>
  </div>
</div>

<!-- popup-menu end 2-->