<? get_header(); ?>

<?php
$items = new WP_Query(array(
	'posts_per_page'  =>  6, // вывести все
	'post_type' =>  'news ',
	'order' =>  'DESK', // порядок сортировки
  'paged' => get_query_var('paged') ? get_query_var('paged') : 1, // Учтем текущую страницу пагинации
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

  <div class="main-grid">
    <div class="col-12">
      <h1><?php post_type_archive_title(); ?></h1>
    </div>
    <?
    while($items->have_posts()){
      $items->the_post();?>
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
      <? get_template_part('template-parts/news/news-item'); ?>
    </div>
    <?}?>

  </div>
  <?php
  wp_reset_query();
  ?>

  <div class="pagination">
    <?php
      echo paginate_links(array(
        'total' => $items->max_num_pages,
        'current' => max(1, get_query_var('paged')
      ),
        ));
      ?>
  </div>
</div>
<div class="stub"></div>
<? get_footer(); ?>