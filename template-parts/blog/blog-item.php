<?php
  $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // Замените 'thumbnail' на нужный размер
?>
<div class="blog-item main-grid">
  <div class="col-6"><a class="blog-item-img" href="<?php the_permalink(); ?>">
      <div class="img-cover"><img src="<? echo $thumbnail_url; ?>" alt=""></div>
    </a></div>
  <div class="col-6">
    <div class="blog-item-info">
      <div class="blog-item-date"><?php echo get_the_date(); ?></div>
      <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      <div class="blog-item-text">
        <? the_excerpt(); ?>
      </div>
      <div class="btn-container"><a class="btn btn--blue-border" href="<?php the_permalink(); ?>">Подробнее </a></div>
    </div>
  </div>
</div>