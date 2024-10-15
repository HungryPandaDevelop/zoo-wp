<?php
  $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // Замените 'thumbnail' на нужный размер
  $thumbnail_url = $thumbnail_url ? $thumbnail_url : get_bloginfo('template_url').'/images/stub-pets.jpg';
?>
<div class="news-item"><a class="news-item-img" href="<?php the_permalink(); ?>">
    <div class="img-cover">
      <img src="<?php echo $thumbnail_url; ?>" alt="">
    </div>
  </a>
  <div class="news-item-info">
    <div class="news-item-date"> <?php echo get_the_date(); ?></div>
    <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
    <div class="news-item-text">
      <?php the_excerpt(); ?>
    </div>
    <div class="btn-container"><a class="btn btn--blue-border" href="<?php the_permalink(); ?>">Подробнее</a></div>
  </div>
</div>