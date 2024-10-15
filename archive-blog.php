<? get_header(); ?>

<?php



$current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;

$items = new WP_Query(array(
	'posts_per_page'  =>  6, // вывести все
	'post_type' =>  'blog ',
	'order' =>  'DESK', // порядок сортировки
  'paged' => $current_page, // Учтем текущую страницу пагинации
  ));

?>

<div class="stub"></div>
<div class="main-full">
  <div class="breadcrumbs">
    <?
      bcn_display();
		?>
  </div>
</div>
<div class="content">

  <div class="main-full ajax-content">
    <h1><?php post_type_archive_title(); ?></h1>

    <?
    while($items->have_posts()){
      $items->the_post();?>
    <? get_template_part('template-parts/blog/blog-item'); ?>
    <?}?>

  </div>

  <?php 
    ajax_btn($wp_query); 
  ?>

  <?php
  wp_reset_query();
  ?>
  <?php /*
  <div class="pagination">
    <?php
      echo paginate_links(array(
        'total' => $items->max_num_pages,
        'current' => max(1, get_query_var('paged')
      ),));
      ?>
</div>
*/ ?>


</div>
<div class="stub"></div>
<? get_footer(); ?>