<?php
// Отключение rss-ленты
function fb_disable_feed() {
	wp_redirect(get_option('siteurl'));
	}
	
	add_action('do_feed', 'fb_disable_feed', 1);
	add_action('do_feed_rdf', 'fb_disable_feed', 1);
	add_action('do_feed_rss', 'fb_disable_feed', 1);
	add_action('do_feed_rss2', 'fb_disable_feed', 1);
	add_action('do_feed_atom', 'fb_disable_feed', 1);
	
/*
 * Отключаем Emojii
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
add_filter( 'tiny_mce_plugins', 'disable_wp_emojis_in_tinymce' );
function disable_wp_emojis_in_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}


/*
* Удаляем лишнее из шапки
*/
// Удаляет ссылки RSS-лент записи и комментариев
remove_action( 'wp_head', 'feed_links', 2 ); 
// Удаляет ссылки RSS-лент категорий и архивов
remove_action( 'wp_head', 'feed_links_extra', 3 ); 
// Удаляет RSD ссылку для удаленной публикации
remove_action( 'wp_head', 'rsd_link' ); 
// Удаляет ссылку Windows для Live Writer
remove_action( 'wp_head', 'wlwmanifest_link' ); 
// Удаляет короткую ссылку
remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0); 
// Удаляет информацию о версии WordPress
remove_action( 'wp_head', 'wp_generator' ); 
// Удаляет ссылки на предыдущую и следующую статьи
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );

remove_action('wp_head', 'wp_resource_hints', 2 ); //remove dns-prefetch

remove_action('wp_head', 'rest_output_link_wp_head');// remove 'https://api.w.org/

remove_action('wp_head', 'rel_canonical'); //remove canonical

/**
 * Удаление картинок из xml-карты Yoast
*/
add_filter( 'wpseo_xml_sitemap_img', '__return_false' );
// Отключить / удалить схему JSON + LD

// В случае если вам не нужно формируемое плагином json shema.org то её можно отключить

add_filter( 'wpseo_json_ld_output', '__return_empty_array' );
// При необходимости отключить OpenGraph через хуки

// add_action('wp_head', 'remove_all_wpseo_og', 1);
// function remove_all_wpseo_og() {
//   remove_action( 'wpseo_head', array( $GLOBALS['wpseo_og'], 'opengraph' ), 30 );
// }
// По элементное отключение OpenGraph

add_filter('wpseo_opengraph_url' , '__return_false' );
add_filter('wpseo_opengraph_desc', '__return_false' );
add_filter('wpseo_opengraph_title', '__return_false' );
add_filter('wpseo_opengraph_type', '__return_false' );
add_filter('wpseo_opengraph_site_name', '__return_false' );

// автоматически добавляются теги <p> вокруг текста при выводе контента

// remove_filter( 'the_content', 'wpautop' );

function disable_wpautop_for_custom_post_type($content) {
    // global $post;

    // Проверяем, является ли текущая запись типом "pets"
    if ('pets' === get_post_type(get_the_ID()) || 'companies' === get_post_type(get_the_ID()) || 'sales' === get_post_type(get_the_ID()) ) {
        remove_filter('the_content', 'wpautop');
				remove_filter( 'the_excerpt', 'wpautop' );
    }

    return $content;
}
add_filter('the_content', 'disable_wpautop_for_custom_post_type', 0);

// remove_filter( 'the_excerpt', 'wpautop' );

add_filter('wpcf7_autop_or_not', '__return_false');
// define( 'WPCF7_AUTOP', false );

function filter_ptags_on_images($content) {
    return preg_replace('/<p>\s*(<img .* \/>)\s*<\/p>/iU', '\1', $content);
}
add_filter('the_content', 'filter_ptags_on_images');