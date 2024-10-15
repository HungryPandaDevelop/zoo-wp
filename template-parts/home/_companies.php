<?

// $taxonomy = 'sales';
// $term_slug = $args['term'];

$items = new WP_Query(array(
	'posts_per_page'  =>  7, // вывести все
	'post_type' =>  'companies',
  'orderby'         => 'title',
	'order' =>  'DESK', // порядок сортировки
  'tax_query'       => array(
    array(
        'taxonomy' => 'companies_category',
        'field'    => 'slug',
        'terms'    => 'pitomniki',
    ),
),
  
));

// Замените $args['term'] на реальный slug термина, который вы хотите запросить

// $term = get_term_by('slug', $term_slug, $taxonomy);
// $term_list_link = get_term_link($term, $taxonomy)
?>

<section>
  <div class="head-section head-section-line main-grid">
    <div class="col-10 col-xs-12">
      <h2>
        Питомники 1
      </h2>
      <!-- <div class="head-section-text">
        <?
          echo $term->description;
        ?>
      </div> -->
    </div>
    <div class="col-2 col-xs-12">
      <div class="btn-container"><a class="link" href="/pitomniki"><i>
          </i><span>Все питомники</span></a></div>
    </div>
  </div>
  <div class="main-grid production-mobile-slider">
    <?
    while($items->have_posts()){
      $items->the_post();
      

      ?>
    <div class="col-3 col-sm-6 col-xs-12">
      <div class="col-3 col-md-4 col-sm-6 col-xs-12">
        <?php get_template_part('template-parts/companies/companies-item'); ?>
      </div>
    </div>

    <?}?>
  </div>
</section>