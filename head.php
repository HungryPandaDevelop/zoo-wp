<!-- header start-->
<header <?php if (is_front_page()) { ?>class="header-main" <?php } ?>>
  <div class="main-grid">
    <div class="col-2 col-md-7 col-xs-5 logo-container vertical-align"><a class="logo" href="/"> <img
          src="<?php echo get_bloginfo('template_url');?>/images/logo.svg" alt=""></a></div>
    <div class="col-7 hidden-md hidden-sm hidden-xs vertical-align">
      <nav class="nav-header">
        <?php
            header_menu();
        ?>
      </nav>
    </div>
    <div class="col-3 col-md-5 col-xs-7 vertical-align feedback-header">
      <div id="header-root"></div>
      <div class="hamburger-btn element-btn hidden-xxl hidden-xl hidden-lg" data-element="0" href="#"></div>
    </div>
  </div>
</header>
<div class="scroll-top-container scroll-top-js">
  <div class="scroll-top-btn"></div>
</div>

<!-- header end-->