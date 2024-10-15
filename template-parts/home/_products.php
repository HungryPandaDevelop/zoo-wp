<?

$taxonomy = 'production_category';
$term_slug = $args['term'];

$items = new WP_Query(array(
	'posts_per_page'  =>  4, // вывести все
	'post_type' =>  'production',
	'order' =>  'DESK', // порядок сортировки
  'tax_query' => array(
		array(
			'taxonomy' => $taxonomy, // замените на реальное название вашей таксономии
			'field' => 'slug',
			'terms' => $term_slug,
		),
	),
  
));

// Замените $args['term'] на реальный slug термина, который вы хотите запросить

$term = get_term_by('slug', $term_slug, $taxonomy);
$term_list_link = get_term_link($term, $taxonomy)
?>

<section>
  <div class="head-section head-section-line main-grid">
    <div class="col-10 col-xs-12">
      <h2>

        <?
          echo $term->name;
      ?>

      </h2>
      <div class="head-section-text">
        <?
          echo $term->description;
        ?>
      </div>
    </div>
    <div class="col-2 col-xs-12">
      <div class="btn-container"><a class="more-btn--black" href="<?  echo $term_list_link;?>"><i>
          </i><span>Подробнее</span></a></div>
    </div>
  </div>
  <div class="main-grid production-mobile-slider">
    <?
    while($items->have_posts()){
      $items->the_post();
      
      $terms_cur = wp_get_post_terms(get_the_ID(), 'production_category');
  
      $term_cur = $terms_cur[0];
      ?>
    <div class="col-3 col-sm-6 col-xs-12">
      <? get_template_part('template-parts/module/items/product-item',null, array(
            'ID' =>  get_the_ID(),
            'typeItem'  =>  $term_cur->slug
          )); ?>
    </div>

    <?}?>
  </div>
</section>