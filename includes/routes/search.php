<?php



add_action('rest_api_init', function(){
  register_rest_route('search','all', array(
    'methods' =>  WP_REST_SERVER::READABLE, // 'GET'
    'callback'  =>  'searchAll'
  ));
});


function searchAll($data){

  $customPosts = new WP_Query(array(
    'post_type' => array('events'),
    'posts_per_page' => -1,
    // 'search_prod_title' => $data['search'],
    's' =>  $data['search']
  ));

  $typesResults = array(
    'events'  =>  array(),
    // 'blog'  =>  array(),
    // 'product'  =>  array(),
    // 'services'  =>  array(),
  );


  // $customPostsResults = array();

  while($customPosts->have_posts()){
    $customPosts->the_post();

    foreach ($typesResults as $key => $value) {
      // echo $key;
      if(get_post_type() == $key){
        array_push($typesResults[$key], array(
          'id' => get_the_ID(),
          'title' => get_the_title(),
          'link'  => get_permalink(get_the_ID())
        ));
      }
    }

  }

  return $typesResults;
}