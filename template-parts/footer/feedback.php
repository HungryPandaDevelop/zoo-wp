<h3> <a href="/contants/">Наши Контакты</a></h3>
<div class="feedback-footer-item">
  <a class="marker-btn" href="/contants/">
    <i></i><span><?php echo $GLOBALS['crbAll']['address']; ?></span>
  </a>
</div>
<div class="feedback-footer-item">
  <a class="mail-btn" href="mailto:<?php echo $GLOBALS['crbAll']['mail']; ?>">
    <i></i><span>
      <? echo $GLOBALS['crbAll']['mail']; ?>
    </span>
  </a>
</div>
<div class="feedback-footer-item">
  <a class="phone-btn" href="tel:<?php echo $GLOBALS['crbAll']['phones'][0]['link']; ?>">
    <i></i><span>
      <? echo $GLOBALS['crbAll']['phones'][0]['title']; ?>
    </span>
  </a>
</div>

<div class="feedback-footer-item">
  <a class="whatsapp-btn" href="tel:<?php echo $GLOBALS['crbAll']['whatsapp']; ?>">
    <i></i><span>
      <? echo $GLOBALS['crbAll']['whatsapp']; ?>
    </span>
  </a>
</div>



<? get_template_part('template-parts/module/social'); ?>