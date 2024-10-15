<?php
  $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // Замените 'thumbnail' на нужный размер
  $thumbnail_url = $thumbnail_url ? $thumbnail_url : get_bloginfo('template_url').'/images/stub-pets.jpg';
?>
<div class="product-item">
  <div class="product-item-img">
    <div class="product-item-cover img-cover">
      <img src="<?php echo $thumbnail_url; ?>" alt="">
    </div>
    <div class="product-item-liked"></div>
  </div>
  <div class="product-item-info">
    <h3><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h3>
    <ul class="ln product-item-description">
      <li><b>Описание:</b>
        <div><?php the_excerpt(); ?></div>
      </li>
    </ul>
    <div class="product-item-price">850 AED/час</div>
    <div class="product-item-adv">
      <div class="product-adv-icons">
        <div class="product-adv-icon product-adv-icon-1"></div><span>
          18,9 м.(62 ft.)</span>
      </div>
      <div class="product-adv-icons">
        <div class="product-adv-icon product-adv-icon-2"></div><span>
          29 ipsum </span>
      </div>
      <div class="product-adv-icons">
        <div class="product-adv-icon product-adv-icon-3"></div><span>
          3 elit</span>
      </div>
      <div class="product-adv-icons">
        <div class="product-adv-icon product-adv-icon-4"></div><span>
          3 esse </span>
      </div>
    </div>
    <div class="btn-product-container"><a class="btn btn--blue" href="#">Забронировать</a><a
        class="btn btn--blue-border" href="<?php the_permalink();?>">Подробнее</a></div>
  </div>
</div>