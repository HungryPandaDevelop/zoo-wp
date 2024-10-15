<?
use Carbon_Fields\Container;
use Carbon_Fields\Field;

	
Container::make( 'theme_options', 'Все контакты' )
	->add_tab( __( 'Контакты' ), array(
		Field::make( 'text', 'crb_address', __( 'Адрес' ) ),
		Field::make( 'text', 'map_coords', __( 'Координаты' ) ),
		Field::make( 'complex', 'crb_phones','Телефоны' )
			->set_layout( 'tabbed-horizontal' )
			->add_fields( array(
				Field::make( 'text', 'title' ),
				Field::make( 'text', 'link' ),
		)),
		Field::make( 'complex', 'crb_times','Время работы' )
		->set_layout( 'tabbed-horizontal' )
		->add_fields( array(
			Field::make( 'text', 'text' ),
		)),
		Field::make( 'text', 'crb_mail', __( 'Почта' ) ),
		Field::make( 'text', 'crb_vk', __( 'Vk' ) ),
		Field::make( 'text', 'crb_telegram', __( 'Telegram' ) ),
		Field::make( 'text', 'crb_instagam', __( 'Instagam' ) ),
		Field::make( 'text', 'crb_whatsapp', __( 'Whatsapp' ) ),
		Field::make( 'text', 'crb_facebook', __( 'Facebook' ) ),
		Field::make( 'text', 'crb_twitter', __( 'Twitter' ) ),
		Field::make( 'text', 'crb_youtube', __( 'YouTube' ) ),
		Field::make( 'text', 'crb_google', __( 'Google' ) ),
		
	))
	->add_tab( __( 'Общие настройки' ), array(
		Field::make( 'rich_text', 'crb_footer_copyright', 'текс copyright' ),
		Field::make( 'rich_text', 'crb_footer_metrika', 'Метрика' )
	));


add_action('init','create_global_variable');

function create_global_variable(){
	global $crbAll;
	global $seoAll;

	$crbAll = [
		'address'	=>	carbon_get_theme_option('crb_address'),
		'map_coords'	=>	carbon_get_theme_option('map_coords'),
		'phones'	=>	carbon_get_theme_option('crb_phones'),
		'times'	=>	carbon_get_theme_option('crb_times'),
		'mail'	=>	carbon_get_theme_option('crb_mail'),
		'facebook'	=>	carbon_get_theme_option('crb_facebook'),
		'inst'	=>	carbon_get_theme_option('crb_instagam'),
		'whatsapp'	=>	carbon_get_theme_option('crb_whatsapp'),
		'vk'	=>	carbon_get_theme_option('crb_vk'),
		'telegram'	=>	carbon_get_theme_option('crb_telegram'),
		'tw'	=>	carbon_get_theme_option('crb_twitter'),
		'youtube'	=>	carbon_get_theme_option('crb_youtube'),
		'google'	=>	carbon_get_theme_option('crb_google'),
		'copyright'	=>	carbon_get_theme_option('crb_footer_copyright'),
		'metrika'	=>	carbon_get_theme_option('crb_footer_metrika')
	];
}