<?php



add_action('rest_api_init', function(){
  register_rest_route('get','fields', array(
    'methods' =>  'POST', // 'GET'
    'callback'  =>  'getFields'
  ));
});


function getFields($data){

  $results = get_field($data['field_name'].'_porodi', $data['id_post']);
  
  return  $results;

  
}