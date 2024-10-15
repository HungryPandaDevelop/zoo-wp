<?

$items = new WP_Query(array(
	'posts_per_page'  =>  7, // вывести все
	'post_type' =>  'companies',
	'order' =>  'DESK', // порядок сортировки
  'tax_query'       => array(
      array(
          'taxonomy' => 'companies_category',
          'field'    => 'slug',
          'terms'    => 'prijuty',
      ),
  ),
));


?>

<section>
  <div class="head-section head-section-line main-grid">
    <div class="col-10 col-xs-12">
      <h2>
        Приюты
      </h2>
      <!-- <div class="head-section-text">
        <?
          echo $term->description;
        ?>
      </div> -->
    </div>
    <div class="col-2 col-xs-12">
      <div class="btn-container"><a class="link" href="/prijuty"><i>
          </i><span>Все приюты</span></a></div>
    </div>
  </div>
  <div class="main-grid production-mobile-slider">
    <?
    while($items->have_posts()){
      $items->the_post();
      

      ?>

    <div class="col-3 col-md-4 col-sm-6 col-xs-6">
      <?php get_template_part('template-parts/companies/companies-item'); ?>
    </div>


    <?}?>
    <div class="col-3 col-md-4 col-sm-6 col-xs-6">
      <a href="/cabinet/companies/new" class="companies-item-stub  shelter-item-stub">
      </a>
    </div>
    <?php wp_reset_query(); ?>
  </div>
</section>