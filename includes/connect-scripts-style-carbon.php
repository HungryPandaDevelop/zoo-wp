<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


/**
 * add style scripts
 */
function add_all_styles() {

	wp_enqueue_style( 'panda-store-main', get_template_directory_uri().'/front/theme-style.css?ver='.time() );
	wp_enqueue_style( 'panda-store-lightslider', get_template_directory_uri().'/css/lightslider.css' );
	wp_enqueue_style( 'panda-store-lightbox', get_template_directory_uri().'/css/lightbox.css' );
	wp_enqueue_style( 'panda-store-date', get_template_directory_uri().'/css/air-datepicker.css' );
	wp_enqueue_style( 'panda-range', get_template_directory_uri().'/css/ion.rangeSlider.css' );

	wp_enqueue_style( 'panda-react-index', get_template_directory_uri().'/build/index.css' );
}
add_action( 'wp_enqueue_scripts', 'add_all_styles' );



function add_all_scripts() {

	wp_enqueue_script( 'jquery-main', get_template_directory_uri() . '/js/jquery-3.6.0.min.js' );
	wp_enqueue_script( 'slider', get_template_directory_uri() . '/js/lightslider.js' );
	wp_enqueue_script( 'lightbox', get_template_directory_uri() . '/js/lightbox.js' );
	wp_enqueue_script( 'mask', get_template_directory_uri() . '/js/jquery.mask.js' );
	wp_enqueue_script( 'date', get_template_directory_uri() . '/js/air-datepicker.js' );
	wp_enqueue_script( 'range', get_template_directory_uri() . '/js/ion.rangeSlider.js' );
	
	// wp_enqueue_script( 'map', get_template_directory_uri() . '/js/map.js' );
	$ya_map_api_key = 'd7acd4bc-59e2-4d8f-939a-640263549d6c';
	$suggest_api_key = 'fad57657-dd70-4c75-8496-98c2cc7b91b6';
	// Регистрация скрипта API Яндекс.Карт
	wp_register_script('yandex-map-api', 'https://api-maps.yandex.ru/2.1/?apikey='.$ya_map_api_key.'&suggest_apikey='.$suggest_api_key.'&lang=ru_RU', array(), null, false);
	// Подключение скрипта API Яндекс.Карт
	wp_enqueue_script('yandex-map-api');

	// Регистрация и подключение скрипта map.js
	wp_enqueue_script('map', get_template_directory_uri() . '/js/map.js', array('yandex-map-api'), null, true);


	wp_enqueue_script( 'common-js', get_template_directory_uri() . '/front/common-dist.js?ver='.time());

	$dokumenty_pitomca = get_field_object('field_665ecf57b33b2');
	$osobennosti_pitomca = get_field_object('field_666056963dd6e');
	$navyki_pitomca = get_field_object('field_66606e63b51cc');

	$dokumenty_pitomca_cat = get_field_object('field_6661a34a2ccd6');
	$osobennosti_pitomca_cat = get_field_object('field_6661a35c2ccd7');
	$navyki_pitomca_cat = get_field_object('field_6661a36f2ccd8');

	$dopolnitelnye_uslugi = get_field_object('field_669918617822a');

	wp_localize_script( 'common-js', 'REST_API_data', array(
		'root_url'  =>  get_site_url(),
		// 'nonce' => wp_create_nonce( 'wp_rest' )
		'dokumenty_pitomca' => $dokumenty_pitomca,
		'osobennosti_pitomca' => $osobennosti_pitomca,
		'navyki_pitomca' => $navyki_pitomca,
		'dokumenty_pitomca_porodi-koshki' => $dokumenty_pitomca_cat,
		'osobennosti_pitomca_porodi-koshki' => $osobennosti_pitomca_cat,
		'navyki_pitomca_porodi-koshki' => $navyki_pitomca_cat,
		'dopolnitelnye_uslugi' => $dopolnitelnye_uslugi,
	));

// 	function add_async_attribute($tag, $handle) {
// 		// add script handles to the array below
// 		$scripts_to_async = array('default-common');  
// 		foreach($scripts_to_async as $async_script) {
// 			if ($async_script === $handle) {
// 				return str_replace(' src', ' async="async" src', $tag);
// 			}
// 		}
// 		return $tag;
// 	}
// 	add_filter('script_loader_tag', 'add_async_attribute', 10, 2);
}

add_action( 'wp_enqueue_scripts', 'add_all_scripts' );



// add_action( 'after_setup_theme', 'crb_load' );
// function crb_load() {
// 	load_template( get_template_directory() . '/includes/carbon-fields/vendor/autoload.php' );
// 	\Carbon_Fields\Carbon_Fields::boot();
// }

add_action( 'carbon_fields_register_fields', 'estore_register_custom_fields' );
function estore_register_custom_fields() {
	require get_template_directory() . '/includes/custom-fields-options/theme-options.php';
	require get_template_directory() . '/includes/custom-fields-options/post-meta.php';
	require get_template_directory() . '/includes/custom-fields-options/term-meta.php';
}



// ADD REACT

function boilerplate_load_assets() {
  wp_enqueue_script('react_build', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');