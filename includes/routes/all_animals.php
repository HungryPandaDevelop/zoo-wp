<?php



add_action('rest_api_init', function(){
  register_rest_route('animals','all', array(
    'methods' =>  WP_REST_SERVER::READABLE, // 'GET'
    'callback'  =>  'searchAllAnimals'
  ));
});


function searchAllAnimals($data){

	$query_args = array(
		'posts_per_page'  => -1,
		'post_type'       => 'events',
    'orderby'         => 'title',
		'order'           => 'ASC', //desk
    's' =>  $data['search']
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
  while($items->have_posts()){
    $items->the_post();

      $slug = get_post_field( 'post_name', get_the_ID() );
      // echo $key;
      
        array_push($results, array(
          'id' => get_the_ID(),
          'title' => get_the_title(),
          'slug' => $slug,
        ));
      
        

  }
 wp_reset_postdata(); // Восстанавливаем глобальные данные о п

  return $results;
}