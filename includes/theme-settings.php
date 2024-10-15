<?php


function new_theme_settings() {
	// add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	// add_image_size('professorLandscape', 400, 260, true);
	// add_image_size('professorPortrait', 480, 650, true);
	// add_image_size('pageBanner', 1500, 350, true);
}

add_action('after_setup_theme', 'new_theme_settings');


// customizing breadcrumbs
add_filter('bcn_breadcrumb_title', 'my_breadcrumb_title_swapper', 3, 10);
function my_breadcrumb_title_swapper($title, $type, $id)
{
    if(in_array('home', $type))
    {
        $title = __('Home');
    }
    return $title;
}

// customizing breadcrumbs

// отключили стили для плагина Menu Icons

function remove_menu_icons_styles() {
    wp_dequeue_style( 'menu-icons-extra' ); // Отключаем стиль 'menu-icons-extra'
    wp_deregister_style( 'menu-icons-extra' );
    // Мы не можем использовать wp_dequeue_style и wp_deregister_style для font-awesome, потому что он был перезаписан.
}
add_action( 'wp_enqueue_scripts', 'remove_menu_icons_styles', 90 );
// отключили стили для плагина Menu Icons


// отключили стили для плагина addtoany
function remove_addtoany_styles() {
    // Удаляем стили плагина AddToAny Share Buttons
    wp_dequeue_style('addtoany');
}
add_action('wp_enqueue_scripts', 'remove_addtoany_styles', 100);
// отключили стили для плагина addtoany


// AJAX


// function true_loadmore_scripts() {
// 	wp_enqueue_script('jquery'); 
// 	wp_enqueue_script( 'true_loadmore', get_stylesheet_directory_uri() . '/loadmore.js', array('jquery') );
// }

// add_action( 'wp_enqueue_scripts', 'true_loadmore_scripts' );

function true_load_posts(){

	$args = unserialize( stripslashes( $_POST['query'] ) );
	$args['paged'] = $_POST['page'] + 1; // следующая страница
	$args['post_status'] = 'publish';

	query_posts( $args );

	if( have_posts() ) :
	$count = 0;
	// запускаем цикл
	while( have_posts() ): the_post();
	$count++;

	
	get_template_part( $_POST['template'], null, ['id'  => $_POST['template']] ); 
	
	endwhile;

	endif;
	die();
}


add_action('wp_ajax_loadmore', 'true_load_posts');
add_action('wp_ajax_nopriv_loadmore', 'true_load_posts');

// AJAX





// '^cabinet/companies/([^/]+)/?$'

function custom_rewrite_rule() {
		add_rewrite_rule(
			'^cabinet/([^/]+)/?$', // Шаблон сопоставления: /cabinet/auth
			'index.php?pagename=cabinet', // Целевое местоположение
			'top' // Приоритет
		);
    add_rewrite_rule(
        '^cabinet/companies/([^/]+)/?$', // Шаблон сопоставления: /cabinet/auth
        'index.php?pagename=cabinet', // Целевое местоположение
        'top' // Приоритет
    );
    add_rewrite_rule(
        '^cabinet/pets/([^/]+)/?$', // Шаблон сопоставления: /cabinet/auth
        'index.php?pagename=cabinet', // Целевое местоположение
        'top' // Приоритет
    );

    // add_rewrite_rule(
    //     '^cabinet/sales/([^/]+)/?$', // Шаблон сопоставления: /cabinet/auth
    //     'index.php?pagename=cabinet', // Целевое местоположение
    //     'top' // Приоритет
    // );

    add_rewrite_rule(
        '^cabinet/sales/([^/]+)/?$', // Шаблон сопоставления: /cabinet/auth
        'index.php?pagename=cabinet', // Целевое местоположение
        'top' // Приоритет
    );
    add_rewrite_rule(
        '^cabinet/chat/([^/]+)/?$', // Шаблон сопоставления: /cabinet/auth
        'index.php?pagename=cabinet', // Целевое местоположение
        'top' // Приоритет
    );
}
add_action( 'init', 'custom_rewrite_rule' );


// REACT ROUTER DOM !!!

// JWT !!!

function custom_jwt_auth_token_before_dispatch( $data, $user ) {
	// Получаем фамилию пользователя из его профиля WordPress
	$last_name = get_user_meta( $user->ID, 'last_name', true );
	
	// Получаем поле пользователя из его профиля WordPress, используя ACF
	$phone = get_field( 'phone', 'user_' . $user->ID );
	$extra_name = get_field( 'extra_name', 'user_' . $user->ID );
	$foto_profilya = get_field( 'foto_profilya', 'user_' . $user->ID );

	// Добавляем в jwt
	$data['last_name'] = $last_name;
	$data['extra_name'] = $extra_name;
	$data['phone'] = $phone;
	$data['foto_profilya'] = $foto_profilya;
	$data['user_id'] = $user->ID;

	
	return $data;
}
add_filter( 'jwt_auth_token_before_dispatch', 'custom_jwt_auth_token_before_dispatch', 10, 2 );
// JWT !!!



// Password Reset with Code for WordPress REST API
add_filter( 'bdpwr_selection_string' , function( $string ) {
	$random_number = mt_rand(10000, 99999);
  return $random_number;
}, 10 , 4 );


function my_mail_filter($args)
{
    if (isset($args['headers']) && ! is_array($args['headers'])) {
        //Check original header length
        if(strlen($args['headers']) == 0){
            $existing_headers = $args['headers'];
            unset($args['headers']);
            $args['headers'][] = $existing_headers;
            $args['headers'][] = 'Content-Type: text/html; charset=UTF-8';
        }
    }
    return $args;
}
    
add_filter('wp_mail', 'my_mail_filter');

add_filter( 'bdpwr_code_email_text' , function( $text , $email , $code , $expiry ) {
	$text = 'Новый пароль  <a href="https://zoonika.sait.website/cabinet/reset?code='.$code.'&email='.$email.'">тут</a>';
  return $text;
}, 10 , 4 );




// Регулярное выражение для поиска текста, обернутого в ###
function wrap_text_in_div($content) {
	// Регулярное выражение для поиска текста, обернутого в ###
	$pattern = '/###\s*(.*?)\s*###/';;
	// Заменяем на div
	$replacement = '<div class="animals-speciality">$1</div>';
	// Возвращаем обработанный контент
	return preg_replace($pattern, $replacement, $content);
}

// Применяем фильтр к содержимому поста
add_filter('the_content', 'wrap_text_in_div');

// Регулярное выражение для поиска текста, обернутого в ### 

// жизнь токена на 30 дней
add_filter('jwt_auth_expire', function($expire) {
    return time() + (DAY_IN_SECONDS * 30); // Увеличиваем до 30 дней
});

// жизнь токена на 30 дней