<?php
  $post_type = $args['post_type'];
  $terms = $args['terms'];

  $single_point = $_GET['point'];
  
	$query_args = array(
		'posts_per_page'  => -1,
		'post_type'       => $post_type,
    'orderby'         => 'title',
		'order'           => 'ASC', //desk
	);

  $animal_arr = isset($_GET['specialization']) ? explode(', ', urldecode($_GET['specialization'])) : [];

  if ($post_type == 'companies') {
    $query_args['tax_query'] = array(
        array(
            'taxonomy' => 'companies_category',
            'field'    => 'slug',
            'terms'    => $terms,// ПИТОМНИКИ ИЛИ ПРИЮТЫ 
        ),
    );
  }
  if($single_point){
    $query_args['post__in'] = array($single_point);
  }

  $animal_acf_slug;
  if($post_type == 'companies'){
    $animal_acf_slug = 'specialization';
  }
  if($post_type == 'sales'){
    $animal_acf_slug = 'animal';
  }


  if (count($animal_arr)>0) {

    $animal_meta_query = array(
      'relation' => 'OR', // Связка OR для условий по специализациям
    );
  print_r($animal_arr);
    foreach ($animal_arr as $item) {
        $animal_meta_query[] = array(
          'key'     => $animal_acf_slug, // Замените на реальное имя поля ACF
          'value'   => $item,
          'compare' => 'LIKE',
      );
    }

    $query_args['meta_query'] = array(
      $animal_meta_query, 
    );
  }

  $type_sales = $_GET['type_sales'];
  $race = $_GET['race'];
  $gender = $_GET['gender'];

  if($type_sales){
    $query_args['meta_query'][] = array(
      'key'     => 'target', // Замените на реальное имя поля ACF
      'value'   => $type_sales,
      'compare' => 'LIKE',
    );
  }
  if($race){
    $query_args['meta_query'][] = array(
      'key'     => 'animal', // Замените на реальное имя поля ACF
      'value'   => $race,
      'compare' => 'LIKE',
    );
  }
  if($gender){
    $query_args['meta_query'][] = array(
      'key'     => 'gender', // Замените на реальное имя поля ACF
      'value'   => $gender,
      'compare' => 'LIKE',
    );
  }


	$items = new WP_Query($query_args);
  $count = $items->post_count;
  set_query_var('count_post_ads', $count); 
?>
<? get_header(); ?>
<style>
.scroll-top-container {
  display: none;
}

.content h1 {
  font-size: 38px;
  padding-top: 4px;
  margin-bottom: 0;

}

@media (max-width: 576px) {
  .content h1 {
    font-size: 18px;
    margin-top: 15px;
  }
}
</style>

<div class="stub"></div>
<div class="content">

  <?php if($args['title']){ ?>
  <div class="main-full">
    <h1><?php echo $args['title']; ?></h1>
  </div>
  <?php } ?>
  <div class="main-full main-full-map">

    <div class="map-filter-container">
      <?php if($post_type=='companies'){?>
      <?php get_template_part('template-parts/map/filter-pitomniki'); ?>
      <?php } ?>
      <?php if($post_type=='sales'){?>
      <?php get_template_part('template-parts/map/filter-sales'); ?>
      <?php } ?>
    </div>

    <div class="address-for-map">
      <?php


        while($items->have_posts()){
          $items->the_post();
          $address;
          if($post_type == 'sales'){
            $id_company = get_field('company');
            $id_company = json_decode($id_company);

            $address = get_field('address',$id_company[0]);
          }
          else{
            $address = get_field('address');
          }
          
          

          if($address){ $address = json_decode( $address ); ?>
      <div class="contacts-address-line" data-coords="[<?php echo implode(",", $address->coords); ?>]"
        data-phone="<? echo get_the_title(); ?>" data-address="<?php echo $address->address; ?>"
        data-id="<?php echo get_the_ID(); ?>">
      </div>
      <?} 


        }?>
    </div>


    <div class="map">
      <div class="search-tag-container"></div>
      <div class="btn-map-container">
        <a href="/ads-map" class="btn btn--white btn-map <?php if($post_type=='sales'){?> active <?php } ?>">
          Объявления
        </a>
        <a href="/pitomniki-map" class="btn btn--white btn-map <?php if($post_type=='companies'){?> active <?php } ?>">
          Питомники
        </a>
      </div>
      <div class="btn-back-container">
        <?php if($post_type=='companies'){?><a href="/cabinet/companies/new" class="btn btn--blue">Добавить
          питомник</a><a href="/pitomniki" class="btn btn--blue btn-list"><i></i><span>Списком</span></a>
        <? } ?>
        <?php if($post_type=='sales'){?> <a href="/cabinet/sales/new" class="btn btn--blue">Добавить объявление</a><a
          href="/ads" class="btn btn--blue btn-list"><i></i><span>Списком</span></a><?php } ?>
      </div>
      <div id="map" data-marker="<?php echo get_bloginfo('template_url');?>/images/icons/marker-black.svg"
        data-slug="<?php echo $post_type; ?>"></div>
      <div class="map-info">
        <div class="close-btn close-btn--map-popup"></div>
        <div class="preloader"></div>
        <div class="map-info-container">
        </div>
      </div>
    </div>
  </div>
  <?php
	wp_reset_query();
	?>
</div>