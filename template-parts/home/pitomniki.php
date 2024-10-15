<?
$query_args = array(
	'posts_per_page'  =>  7, // вывести все
	'post_type' =>  'companies',
  'orderby'         => 'date',
  'order'           => 'DESC', //desk
  'tax_query'       => array(
      array(
        'taxonomy' => 'companies_category',
        'field'    => 'slug',
        'terms'    => 'pitomniki',
      ),
  ),
);


if ( $args['name'] ) {
  $query_args['posts_per_page'] = 3;
  $query_args['meta_query'][] = array(
      'key'     => 'specialization', // Ключ пользовательского поля ACF
      'value'   => $args['name'], // Значение, переданное пользователем
      'compare' => 'LIKE', // Тип сравнения
  );
}



$items = new WP_Query($query_args);
?>

<?php
if($items->have_posts()){?> 


<section>
  <div class="head-section head-section-line main-grid">
    <div class="col-7 col-xs-12">
      <h2>
        <?php if($args['name']){ echo $args['name'].': питомники'; }else{ ?>Питомники<?php } ?> 
      </h2>
      <?
        echo $term->description;
      ?>
    </div>
    <div class="col-5 col-xs-12">
      <div class="btn-container btn-container--couple">
        <a class="btn btn--blue btn-list" href="/pitomniki?specialization=<?php echo $args['name']; ?>"><i></i><span>Списком</span></a>
        <a class="btn btn--blue btn-map" href="/pitomniki-map?specialization=<?php echo $args['name']; ?>"><i></i><span>На карте</span></a>
      </div>
    </div>
  </div>
  <div class="main-grid production-mobile-slider">
    <?
    while($items->have_posts()){
      $items->the_post();
      

      ?>
    <div class="<?php if($args['name']){ ?>col-4 <?php }else{ ?>col-3 col-md-4  <?php }?>col-sm-6 col-xs-6">
      <?php get_template_part('template-parts/companies/companies-item'); ?>
    </div>

    <?}?>
   
    <div class="col-3 col-md-4 col-sm-6 col-xs-6 sales-item-stub-container">
      <a href="/cabinet/companies/new" class="companies-item-stub"></a>
    </div>
   
    <?php wp_reset_query(); ?>
  </div>
</section>

<?php } ?>