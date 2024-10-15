<?php

register_post_type('sales', array(
	'public'	=>	true,
	'supports'	=> array('title','editor','thumbnail','excerpt','author','comments'),
	'capability_type'   =>  'sales',
	'map_meta_cap'  =>  true,
	'has_archive'	=>	false,
	'public'	=>	true,
	'query_var' => true,
	'show_ui' => true,
	'show_in_rest'	=>	true,
	// 'rewrite'               => array('slug'=>'ads', 'hierarchical'=>false, 'with_front'=>false,),
	'labels'	=>	array(
		'name'	=>	'Объявления',
	),
	'menu_icon'	=>	'dashicons-admin-network'
));

// Добавление правила перезаписи для типа записей sales
add_action('init', 'add_sales_rewrite_rule');
function add_sales_rewrite_rule() {
    add_rewrite_rule(
        '^ads/([^/]+).html/?$', // Шаблон URL
        'index.php?post_type=sales&sales=$matches[1]', // Параметры запроса
        'top'
    );
}

// Настройка постоянных ссылок для типа записей sales
add_filter('post_type_link', 'sales_post_link', 10, 2);
function sales_post_link($post_link, $post) {
    if ('sales' === $post->post_type) {
        $post_link = home_url('ads/' . $post->post_name. '.html');
    }
    return $post_link;
}