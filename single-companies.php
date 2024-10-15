<?php
$cynological = get_field('cynological');
$felinological = get_field('felinological');

if($cynological){
  $cynological = json_decode( $cynological );
  if(count($cynological) > 0){
    $cynological = implode(', ', $cynological);
  }
}
if($felinological){
  $felinological = json_decode( $felinological );
  if(count($felinological) > 0){
    $felinological = implode(', ', $felinological);
  }
}

$request_uri = $_SERVER['REQUEST_URI'];

if (!str_contains( $request_uri, '.html')) {
    $new_url = rtrim($request_uri, '/') . '.html';
    
    header("Location: $new_url", true, 301);
    exit();
}


function get_term_name_by_id($name1, $name2) {
  $term = get_the_terms(get_the_ID(), 'companies_category');

  switch ($term[0]->term_id) {
      case 53:
          return $name1;
      case 54:
          return $name2;
      default:
          return 'Неизвестная категория';
  }
}

$specialization = get_field('specialization');
if($specialization ){
$specialization = json_decode($specialization);

$specialization_string;
foreach($specialization as $el){
  $specialization_string =  $specialization_string.$el->name.', ';
}

$specialization_string = substr($specialization_string, 0, -2);
}

$GLOBALS['seoAll']['specialization'] = $specialization;
$GLOBALS['seoAll']['specialization_string'] = $specialization_string;
$GLOBALS['seoAll']['title'] = get_the_title();

$imgs = get_field('photos_company', get_the_ID());

$terms = wp_get_object_terms($post->ID, 'companies_category')[0];

$GLOBALS['seoAll']['main_img'] = $imgs;

$GLOBALS['seoAll']['term'] = get_term_name_by_id('питомнике','приюте');
?>

<?php get_header(); ?>
<div class="stub"></div>


<?php

$post_id = get_the_ID(); // ID поста
$user_id = get_post_field('post_author', $post_id);

?>
<div class="content" id="user-id-for-chat" data-userid="<?php echo $user_id?>">

  <div class="main-full">

    <div class="breadcrumbs">

      <a href="/">Главная</a><span>></span>

      <a href="/<?php echo $terms->slug; ?>"><?php echo $terms->name; ?></a><span>></span>

      <span><?php the_title(); ?></span>

    </div>
  </div>

  <div class="main-full page-head page-head-detail">
    <h1><?php echo get_term_name_by_id('Питомник','Приют'); ?> <?php the_title();?></h1>
    <div class="btn-container">
      <a class="btn btn--blue btn-map" href="/pitomniki-map?point=<?php echo get_the_ID(); ?>"><i></i><span>На
          карте</span></a>
    </div>
  </div>

  <?php get_template_part('template-parts/detail/roof_animals', false, [
					'slug' =>  'events'
				]); ?>


  <div class="main-grid companies-main-info">
    <div class="col-9 col-lg-8 col-xs-12">

      <?php get_template_part('/template-parts/companies/companies-thumb', false, [
        'imgs' =>  $imgs
      ]); ?>
      <div class="companies-detail-info-mobile">
        <?php 
					get_template_part('/template-parts/companies/companies-detail-info', null,[
						'specialization'  =>  $specialization_string,
					]); 
				?>
      </div>
      <?php

if(get_the_content()){ ?>
      <h3>Описание <?php echo get_term_name_by_id('питомника','приюта'); ?>:</h3>
      <?php the_content(); ?>
      <?php }; ?>

      <?php  if($cynological || $felinological){?>
      <ul class="ln companies-organization">
        <?php if($cynological){?> <li>Регистрации в кинологических ассоциациях:
          <b><?php echo $cynological; ?></b>
        </li><?php }?>
        <?php if($felinological){?> <li>Регистрация в фелинологических организациях:
          <b><?php echo $felinological; ?></b>
        </li><?php }?>
      </ul>
      <?php }  ?>

      <?php 
        // $items = get_field('tribesman');
        // $items = json_decode($items); 

	$query_args = array(
		'posts_per_page'  => -1,
		'post_type'       => 'pets',
    'orderby'         => 'title',
		'order'           => 'ASC', //desk
    'author' => get_post_field('post_author', get_the_ID())
	);


	$items = new WP_Query($query_args);

  // $count = $items->post_count;
?>
      <?php	
if($items->have_posts()){ ?>

      <h3 class="topic-color paw">Племенной фонд</h3>

      <div class="main-grid">
        <?php 
while($items->have_posts()){
			$items->the_post();
?>

        <div class="col-6 col-lg-12 col-xs-12">
          <?php
          get_template_part('template-parts/pets/pets-item', null,[
            'id'  => get_the_ID()
          ]); ?>
        </div>

        <? } ?>
      </div>
      <?php } ?>
      <?php
	wp_reset_query();
	?>
      <div class="main-grid">
        <?php
	$query_args = array(
		'posts_per_page'  => -1,
		'post_type'       => 'sales',
    'orderby'         => 'title',
		'order'           => 'ASC', //desk
    'meta_query'      => array(
        array(
            'key'       => 'company', // Название ACF поля
            'value'     => get_the_ID(), // Желаемое значение компании
            'compare'   => 'LIKE', // Сравнение равно
        ),
    ),
	); 

  $active_args = $query_args;

$active_args['meta_query'][] = array(
        'key'     => 'status_post',
        'value'   => '{"label":"Активно","value":"active"}',
        'compare' => 'LIKE',
);
?>

        <?php
	$items = new WP_Query($active_args);
  $count = $items->found_posts;
  if($count > 0){?>
        <div class="col-12">
          <h3 class="topic-color sales">Объявления <?php echo get_term_name_by_id('питомника','приюта'); ?>
            <?php the_title(); ?></h3>
        </div>
        <?php }
		while($items->have_posts()){ 
			$items->the_post(); ?>

        <div class="col-4 col-lg-6 col-xs-6">
          <?php get_template_part('template-parts/sales/sales-item'); ?>
        </div>

        <?}?>
        <?php wp_reset_query(); ?>
      </div>


      <div class="main-grid">

        <?php
          $query_args['meta_query'][] = array(
                  'key'     => 'status_post',
                  'value'   => '{"label":"Архив","value":"archive"}',
                  'compare' => 'LIKE',
          );
        $items = new WP_Query($query_args);
        $count = $items->found_posts;
        if($count > 0){?>
          <div class="col-12">
            <h3 class="topic-color sales">Архив <?php echo get_term_name_by_id('питомника','приюта'); ?>
              <?php the_title(); ?></h3>
          </div>
          <?php }
        while($items->have_posts()){ 
          $items->the_post(); ?>

            <div class="col-4 col-xs-6">
              <?php get_template_part('template-parts/sales/sales-item'); ?>
            </div>

            <?}?>
            <?php wp_reset_query(); ?>
      </div>
    </div>

    <div class="col-3 col-lg-4 col-xs-12 companies-sidebar">

      <h3 class="topic-color dom">Контакты</h3>
      <div class="sticky-sidebar">
        <?php 
					get_template_part('/template-parts/companies/companies-detail-info', null,[
						'specialization'  =>  $specialization_string,
            'btn' => true
					]); 
				?>
          <?php $address = json_decode( get_field('address') ); ?>
         
            <div class="btn-map-sidebar-container">
              <div id="chat-btn-single-add" ></div>
              <?php if($address){?>
              <a class="btn btn--blue btn-map" href="/pitomniki-map?point=<?php echo get_the_ID(); ?>"><i></i><span>На
                  карте</span></a> <?php } ?>
            </div>
            
        <?php 
					get_template_part('/template-parts/animals/animals-social', null,[
						'term'  =>  'porodi-sobak'
					]); 
				?>
      </div>
    </div>
  </div>


  <?php 
		comments_template();
	?>

</div>

<div class="section-stub"></div>

<?php get_footer(); ?>