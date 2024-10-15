<?php 
$slug = $args['slug'];
$src_item = 'template-parts/'.$slug .'/'.$slug .'-item';
?>


<?php

$items = new WP_Query(array(
	'posts_per_page'  =>  6, // вывести все
	'post_type' =>  $slug,
	'order' =>  'DESK', // порядок сортировки ASK
  ));

$post_type_name = get_post_type_object($slug)->labels->name;
$post_type_name_all = get_post_type_object($slug)->labels->all_items;
$archive_link = get_post_type_archive_link($slug);

$title = $args['title'] ? $args['title'] : $post_type_name;
?>

<section class="slider-section">
  <div class="main-full">
    <div class="head-section">
      <h2><?php echo $title;?></h2>
      <div class="btn-container"><a class="btn btn--blue"
          href="/<?php echo $archive_link ;?>"><?php echo $post_type_name_all;?></a></div>
      <div class="arrow-stub"></div>
    </div>
  </div>
  <div class="main-full">
    <div class="multy-slider">
      <?php
    while($items->have_posts()){
      $items->the_post();?>
      <div class="col-3 col-md-4 col-sm-6 col-xs-12">
        <?php get_template_part($src_item); ?>
      </div>
      <?}?>
      <?php wp_reset_query(); ?>

    </div>
  </div>
</section>