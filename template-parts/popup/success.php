<?php

$type = $args['type'];

?>


<div class="popup-send-success">
  <div class="popup-send-container">
    <div class="popup-send-text">
      <?php if($type == 'sales'){ ?>
      <!-- Для объявлений -->
      Ваша заявка отправлена по объявлению
      <div class="sales-name"></div>
      В ближайшее время владелец<br> питомца свяжется с Вами.
      <!-- Для объявлений -->
      <?php }else{ ?>
      <!-- Для всех -->
      Ваша заявка отправлена.
      <!-- Для всех -->
      <?php } ?>
    </div>
    <img src="<?php echo get_bloginfo('template_url');?>/images/popup-send-success.svg" alt="">
  </div>
</div>