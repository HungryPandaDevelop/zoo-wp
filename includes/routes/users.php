<?php



add_action('rest_api_init', function(){
  register_rest_route('get','polzovately', array(
    'methods' =>  'GET', // 'GET'
    'callback'  =>  'getUsers'
  ));
});


function getUsers($data){

  $users = get_users();

  $results = [];

  foreach ($users as $user) {

    $foto_profilya = get_field('foto_profilya', 'user_' . $user->ID);

    $user_data = array(
      'id' => $user->ID,
      'username' => $user->user_login,
      'email' => $user->user_email
    );

    // Добавляем фото профиля, если оно существует
    if ($foto_profilya) {
        $user_data['foto_profilya'] = $foto_profilya;
    }

    array_push($results, $user_data);
  }


  
  return  $results;

  
}