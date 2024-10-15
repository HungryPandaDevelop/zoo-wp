<?php



add_action('rest_api_init', function(){
  register_rest_route('get','animals', array(
    'methods' =>  'POST', // 'GET'
    'callback'  =>  'getAnimals'
  ));
});


function getAnimals($data){

	$query_args = array(
		'posts_per_page'  => -1,
		'post_type'       => 'events',
    'orderby'         => 'title',
		'order'           => 'ASC', //desk
	);

  

  if ( $data['term']) {
      $query_args['tax_query'] = array(
          array(
              'taxonomy' => 'eventscat', // Таксономия категорий
              'field'    => 'slug',     // Можно использовать 'term_id', 'slug', или 'name'
              'terms'    => array($data['term']), // Массив слуг категорий
          ),
      );
  }


  
  $items = new WP_Query($query_args);

  $results = [];
  if ($items->have_posts()) {
    while($items->have_posts()){
      $items->the_post();
        $terms = wp_get_post_terms(get_the_ID(), 'eventscat', array('fields' => 'slugs'));
        array_push($results, array(
          'id' => get_the_ID(),
          'name' => get_the_title(),
          'terms' =>  $terms[0]
        ));
      wp_reset_postdata(); // Восстанавливаем глобальные данные о посте
    }
  }


  
  return  $results;

  
}