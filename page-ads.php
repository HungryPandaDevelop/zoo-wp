<?php
	$query_args = array(
		'posts_per_page'  => 27,
		'post_type'       => 'sales',
    'orderby'         => 'date',
		'order'           => 'DESC', //desk
		'paged'           => get_query_var('paged') ? get_query_var('paged') : 1,
    'meta_query'      => array(),
	);

  $query_args_count = array(
		'posts_per_page'  => -1,
		'post_type'       => 'sales',
	);


$query_args['meta_query'][] = array(
        'key'     => 'status_post',
        'value'   => '{"label":"Активно","value":"active"}',
        'compare' => 'LIKE',
);

  // Проверяем наличие и непустоту параметра 'race'
  if (isset($_GET['animal']) && !empty($_GET['animal'])) {
      $query_args['meta_query'][] = array(
          'key'       => 'animal',
          'value'     => sanitize_text_field($_GET['animal']), // Санитизируем ввод для безопасности
          'compare'   => 'LIKE', 
      );
  }

  // Проверяем наличие и непустоту параметра 'target'
  if (isset($_GET['target']) && !empty($_GET['target'])) {
      $query_args['meta_query'][] = array(
          'key'       => 'target',
          'value'     => sanitize_text_field($_GET['target']), // Санитизируем ввод для безопасности
          'compare'   => 'LIKE', 
      );
  }

	$items = new WP_Query($query_args);
	$items_count = new WP_Query($query_args_count);

  $count = $items_count->post_count;
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
      <a class="btn btn--blue btn-map" href="/ads-map"><i></i><span>На карте</span></a>
    </div>
  </div>

  <!-- <div class="roof-stub"></div> -->
  <div class="sales-search">
    <?php get_template_part('template-parts/sales/sales-search'); ?>
  </div>
  <!-- <div class="roof-stub"></div> -->
  <div class="main-grid">

    <?php
  if($items->have_posts()){
		while($items->have_posts()){
			$items->the_post();
      $id_company = get_field('company');

      $id_company = json_decode($id_company);

?>

    <div class="col-3  col-lg-4 col-sm-6 col-xs-6">
      <?php get_template_part('template-parts/sales/sales-item', null, [
        'id_company'  =>  $id_company[0]
      ]); ?>
    </div>

    <?}?>
    <div class="col-3 col-md-4 col-sm-6 col-xs-6">
      <a href="/cabinet/sales/new" class="sales-item-stub">

      </a>
    </div>
  </div>
  <?php
  }else{?>

  <div class="col-12">
    <div class="animals-empty">
      <div class="animals-empty-text">По результатам вашего выбора <b>ничего не найдено.</b> <br>Попробуйте изменить
        параметры поиска.</div>
      <!-- animals-empty -->
      <img src="<?php echo get_bloginfo('template_url');?>/images/animals-empty.svg" alt="">
    </div>
  </div>
  <?}
	wp_reset_query();
	?>

  <div class="pagination">
    <?php
			echo paginate_links(array(
				'total' => $items->max_num_pages,
				'current' => max(1, get_query_var('paged')
			)));
			?>
  </div>
</div>
<div class="stub"></div>
<? get_footer(); ?>