<?

$query_args = array(
	'posts_per_page'  =>  7, // вывести все
	'post_type' =>  'sales',
  'orderby'         => 'date',
  'order'           => 'DESC', //desk
);

if ( $args['name'] ) {
  $query_args['posts_per_page'] = 3;
  $query_args['meta_query'][] = array(
      'key'     => 'animal', // Ключ пользовательского поля ACF
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
        <?php if($args['name']){ echo $args['name'].': объявления'; }else{ ?>Объявления<?php } ?> 
      </h2>
    </div>
    <div class="col-5 col-xs-12">
      <div class="btn-container btn-container--couple">
          <a class="btn btn--blue btn-list" href="/ads?animal=<?php echo $args['name']; ?>"><i></i><span>Списком</span></a>
          <a class="btn btn--blue btn-map" href="/ads-map?specialization=<?php echo $args['name']; ?>"><i></i><span>На карте</span></a>
        </div>
    </div>
  </div>
  <div class="main-grid production-mobile-slider">
    <?
    while($items->have_posts()){
      $items->the_post();
      
      $id_company = get_field('company');
      $id_company = json_decode($id_company);
      ?>
    <div class="<?php if($args['name']){ ?>col-4 <?php }else{ ?>col-3 col-md-4  <?php }?>col-sm-6 col-xs-6">
      <?php get_template_part('template-parts/sales/sales-item', null, [
      'id_company'  =>  $id_company[0]
    ]); ?>
    </div>

    <?}?>
    <div class="col-3 col-md-4 col-sm-6 col-xs-6 sales-item-stub-container">
      <a href="/cabinet/sales/new" class="sales-item-stub">

      </a>
    </div>
    <?php wp_reset_query(); ?>
  </div>
</section>

<?php } ?>