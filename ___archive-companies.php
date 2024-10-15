<? get_header(); ?>
<div class="stub"></div>
<?php
	$query_args = array(
		'posts_per_page'  => -1,
		'post_type'       => 'companies',
    'orderby'         => 'title',
		'order'           => 'ASC', //desk
		'paged'           => get_query_var('paged') ? get_query_var('paged') : 1,
	);



	$items = new WP_Query($query_args);
  $count = $items->post_count;
?>




<div class="main-full">
  <div class="breadcrumbs">
    <?
      bcn_display();
		?>
  </div>
</div>



<div class="content">
  <div class="main-full">
    <h1>
      <?php post_type_archive_title(); ?>
    </h1>
  </div>
  <div class="roof-stub"></div>

  <div class="main-grid">

    <?php
		while($items->have_posts()){
			$items->the_post();?>
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
      <?php get_template_part('template-parts/companies/companies-item'); ?>
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