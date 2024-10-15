<? get_header(); ?>
<div class="stub"></div>
<?php
	$query_args = array(
		'posts_per_page'  => -1,
		'post_type'       => 'sales',
    'orderby'         => 'title',
		'order'           => 'ASC', //desk
		'paged'           => get_query_var('paged') ? get_query_var('paged') : 1,
    'meta_query'      => array(),
	);

  // Проверяем наличие и непустоту параметра 'race'
  if (isset($_GET['race']) && !empty($_GET['race'])) {
      $query_args['meta_query'][] = array(
          'key'       => 'race',
          'value'     => sanitize_text_field($_GET['race']), // Санитизируем ввод для безопасности
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

?>




<div class="main-full">
  <?php echo $_GET['target']; ?>
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

  <?php get_template_part('template-parts/sales/sales-search'); ?>
  <div class="roof-stub"></div>
  <div class="main-grid">

    <?php
		while($items->have_posts()){
			$items->the_post();
      $id_company = get_field('company');

      $id_company = json_decode($id_company);

?>
    <? if($id_company && $id_company != '[]'){ ?>
    <div class="col-3 col-md-4 col-sm-6 col-xs-6">
      <?php get_template_part('template-parts/sales/sales-item', null, [
        'id_company'  =>  $id_company[0]
      ]); ?>
    </div>
    <?}?>

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