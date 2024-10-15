<?php
  $id = $args['id'] ?  $args['id'] : get_the_ID();

  $thumbnail_url = get_the_post_thumbnail_url($id, 'full'); // Замените 'thumbnail' на нужный размер

?>
<div class="services-item"><a class="services-item-img" href="<?php echo get_the_permalink($id); ?>">
    <div class="img-cover"><img src="<? echo $thumbnail_url; ?>" alt=""></div>
    <div class="services-item-info">
      <h3><?php echo get_the_title($id); ?></h3>
      <div class="services-item-price">от 850 AED/час</div>
      <div class="services-item-text">
        <? the_excerpt($id); ?>
      </div>
      <div class="btn-container-adv">
        <div class="btn-adv-more"></div>
      </div>

    </div>
    <div class="btn-item-plus">
      <div class="btn-item-plus-content"><span>+</span></div>
    </div>
    <div class="services-item-stub"></div>
  </a>
</div>