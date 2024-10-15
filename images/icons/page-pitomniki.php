<?php
	$query_args = array(
		'posts_per_page'  => -1,
		'post_type'       => 'companies',
    'orderby'         => 'date',
		'order'           => 'DESC', //desk
		'paged'           => get_query_var('paged') ? get_query_var('paged') : 1,
    'tax_query'       => array(
        array(
            'taxonomy' => 'companies_category',
            'field'    => 'slug',
            'terms'    => 'pitomniki',
        ),
    ),
	);



	$items = new WP_Query($query_args);
  $count = $items->post_count;
  set_query_var('count_post_ads', $count); 
?>

<? get_header(); ?>
<div class="stub"></div>


<div class="main-full">
  <div class="breadcrumbs">
    <?
      bcn_display();
		?>
  </div>
</div>



<div class="content">
<div class="main-full page-head">
    <h1>
      <?php the_title(); ?>
    </h1>
    <div class="btn-container">
      <a class="btn btn--blue btn-map" href="/pitomniki-map"><i></i><span>На карте</span></a>
    </div>
  </div>
  <div class="roof-stub"></div>

  <div class="main-grid">

    <?php
		while($items->have_posts()){
			$items->the_post();?>
    <div class="col-3 col-lg-4 col-sm-6 col-xs-6">
      <?php get_template_part('template-parts/companies/companies-item'); ?>
    </div>
    <?}?>
    <div class="col-3 col-lg-4 col-sm-6 col-xs-6">
      <a href="/cabinet/companies/new" class="companies-item-stub">

      </a>
    </div>
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