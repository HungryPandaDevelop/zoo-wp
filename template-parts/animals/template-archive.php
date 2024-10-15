<? get_header(); ?>
<div class="stub"></div>
<?php
  // $current_term = get_queried_object();
  // $current_term_slug = $current_term->slug;
  $current_term_slug = $args['slug'];

	$animals_name = isset($_GET['animals_name']) ? sanitize_text_field($_GET['animals_name']) : '';

  $naznachenie = isset($_GET['naznachenie']) ? sanitize_text_field($_GET['naznachenie']) : '';
  $razmer = isset($_GET['razmer']) ? sanitize_text_field($_GET['razmer']) : '';
  $soderzhanie = isset($_GET['soderzhanie']) ? sanitize_text_field($_GET['soderzhanie']) : '';
  $strana = isset($_GET['strana']) ? sanitize_text_field($_GET['strana']) : '';


	$query_args = array(
		'posts_per_page'  => 40,
		'post_type'       => 'events',
    'orderby'         => 'title',
		'order'           => 'ASC', //desk
		'paged'           => get_query_var('paged') ? get_query_var('paged') : 1,
	);

  $universal_search_meta = [
    [
        'key' => 'razmer',
        'value' => $razmer,
        'compare' => 'LIKE',
    ],
    [
        'key' => 'soderzhanie',
        'value' => $soderzhanie,
        'compare' => 'LIKE',
    ],
    [
        'key' => 'strana',
        'value' => $strana,
        'compare' => 'LIKE',
    ]
  ];


  $all_search_meta_arr = [
    'porodi-sobak' => [
      [
        'key' => 'naznachenie',
        'value' => $naznachenie,
        'compare' => 'LIKE',
      ],
      ...$universal_search_meta
    ],
    'porodi-koshki'  =>  [
      $universal_search_meta
    ]
  ];

  if ($current_term_slug) {
      $query_args['meta_query'] = array(
          'relation' => 'AND',
          $all_search_meta_arr[$current_term_slug],
      );
  }




  if ($current_term_slug) {
    $query_args['tax_query'] = array(
        array(
            'taxonomy' => 'eventscat',
            'field' => 'slug',
            'terms' => $current_term_slug,
        ),
    );
  }

	if (!empty($animals_name)) {
		$query_args['s'] = $animals_name;
	};

	$items = new WP_Query($query_args);
  $count = $items->post_count;
?>
<?php 
  $terms = get_term_by('slug', $current_term_slug, 'eventscat');
?>


<div class="main-full">
  <div class="breadcrumbs">
    <?php
    if($current_term_slug){?>

    <a href="/">Главная</a><span>></span>
    <?/*<a href="<?php the_permalink('10425'); ?>">
    <?php echo get_the_title('10425'); ?>
    </a><span>></span>*/?>

    <span><?php echo $terms->name; ?></span>
    <?php }else{ bcn_display(); } ?>
  </div>
</div>



<div class="content">
  <div class="main-full">
    <h1>
      <?php
        if(!$current_term_slug){ 
          echo get_the_title('10425'); 
        }else{ 
  if($terms->slug == 'porodi-sobak' ){?>
      Все породы собак по алфавиту
      <?php }
			else if($terms->slug == 'porodi-koshki'){?>
      Все породы кошек по алфавиту
      <?php } 
        }; ?>
    </h1>
  </div>


  <?php get_template_part('template-parts/animals/animals-search', null, [
    'animals_name'  => $animals_name,
    'type'  =>  $current_term_slug ? $current_term_slug : '',
    ]); ?>

  <div class="main-grid">
    <?php  if($count == 0){?>

    <div class="col-12">
      <div class="animals-empty">
        <div class="animals-empty-text">По результатам вашего выбора <b>ничего не найдено.</b> <br>Попробуйте изменить
          параметры поиска.</div>
        <!-- animals-empty -->
        <img src="<?php echo get_bloginfo('template_url');?>/images/animals-empty.svg" alt="">
      </div>
    </div>

    <?}?>


    <?php
		while($items->have_posts()){
			$items->the_post();?>
    <div class="col-3 col-lg-4 col-sm-6 col-xs-6">
      <?php get_template_part('template-parts/animals/animals-item'); ?>
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