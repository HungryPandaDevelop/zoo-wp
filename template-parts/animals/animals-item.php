<?php
  $thumbnail_obj = get_the_post_thumbnail_url(get_the_ID(), 'full'); // Замените 'thumbnail' на нужный размер
  $thumbnail_url = $thumbnail_obj ? $thumbnail_obj : get_bloginfo('template_url').'/images/stub-pets.jpg';
  // print_r($thumbnail_obj);
  $thumbnail_stub = $thumbnail_obj ? '' : 'stub-thumb';
?>
<div class="animals-item"><a class="animals-item-img  <?php echo $thumbnail_stub; ?>" href="<?php the_permalink(); ?>">
    <div class="img-cover">
      <img src="<?php echo $thumbnail_url; ?>" alt="">
    </div>
  </a>
  <div class="animals-item-info">
    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
  </div>
</div>