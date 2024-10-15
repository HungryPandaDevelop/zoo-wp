<?php



add_action('rest_api_init', function(){
  register_rest_route('get','posts', array(
    'methods' =>  'POST', // 'GET'
    'callback'  =>  'getPosts'
  ));
});


function getPosts($data){


  $query_args = array(
    'posts_per_page' => -1,
    'post_type'      => $data['slug'],
    'orderby'        => 'title',
    'order'          => 'ASC'
  );

  if ($data['map'] == 'true') {
      $query_args['post__in'] = $data['arrVisibleMarker'];
      // return $data['arrVisibleMarker'];
  } else {
      $query_args['author'] = $data['user_id'];
  }

 

if ( $data['gender']) {
    $query_args['meta_query'] = array(
        array(
            'key'     => 'genderPets',
            'value'   => $data['gender'],
            'compare' => 'LIKE',
        ),
    );
}

  
  $items = new WP_Query($query_args);

  $results = [];

  if ($items->have_posts()) {
    while($items->have_posts()){
      $items->the_post();
      if($data['slug'] === 'pets'){
        $img = json_decode(get_field('foto_roditelya'));
      }

      if($data['slug'] === 'companies'){

        $args = array(
          'post_type' => 'sales',
          'meta_query' => array(
              array(
                  'key' => 'company',
                  'value' => get_the_ID(), 
                  'compare' => 'LIKE', // Можно изменить оператор сравнения ('=', '!=', '>', '<', и т.д.)
              ),
          ),
          'posts_per_page' => -1, // Получить все посты
        );
        $query = new WP_Query($args);
        // Получить количество постов
        $sales_count = $query->found_posts;

        $img = json_decode(get_field('logo'));
        $images = json_decode(get_field('photos_company'));
        $type_company = json_decode(get_field('type_company'));
        $address_company = json_decode(get_field('address'));
        $specialization_company = json_decode(get_field('specialization'));
        $link = get_the_permalink();
        $slug = 'companies';

      }
      if($data['slug'] === 'sales'){

        $images = json_decode(get_field('photos_sale'));
        $slug = 'sales';
        $price = get_field('price');
        $birth = get_field('birth');
        $gender = json_decode(get_field('gender'));
        $race = json_decode( get_field('animal'));
        $link = get_the_permalink();
        $target = json_decode(get_field('target'));
        // $address_company = json_decode(get_field('address'));
        // $specialization_company = json_decode(get_field('specialization'));
        // $link = get_the_permalink();
        // $site_company = get_field('site_company');
        // $phone_company = get_field('phone_company');
        // $email_company = get_field('email_company');

      }

      
      $img = $img[0]->url;

        array_push($results, array(
          'id' => get_the_ID(),
          'value' => get_the_title(),
          'img' =>  $img,
          'images' =>  $images,
          'type_company'  =>  $type_company[0],
          'address_company'  =>  $address_company,
          'specialization_company'  =>  $specialization_company,
          'sales_count' =>  $sales_count,
          'slug' =>  $slug,
          'price' =>  $price,
          'birth' =>  $birth,
          'gender' =>  $gender,
          'race' =>  $race,
          'link' =>  $link,
          'target' =>  $target,
          
        ));
      wp_reset_postdata(); // Восстанавливаем глобальные данные о посте
    }
  }


  
  return  $results;

  
}