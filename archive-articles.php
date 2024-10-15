<? get_header(); ?>

<?php
$items = new WP_Query(array(
	'posts_per_page'  =>  -1, // вывести все
	'post_type' =>  'articles ',
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

  <div class="main-full">
    <h1>Статьи</h1>
  <div class="main-grid">
    <?
    while($items->have_posts()){
      $items->the_post();?>
    <div class="col-3 col-md-4 col-sm-6 col-xs-6">
      <? get_template_part('template-parts/articles/articles-item'); ?>
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