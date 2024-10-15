<?php

register_post_type('articles', array(
	'public'	=>	true,
	'supports'	=> array('title','editor','thumbnail','excerpt', 'comments' ),
	'has_archive'	=>	true,
	'public'	=>	true,
	'show_in_menu' => true,
	'query_var' => true,
	'show_ui' => true,
	'labels'	=>	array(
		'name'	=>	'Статьи',
		'add_new_item'	=>	'Добавить Статью',
		'edit_item'	=>	'Редактировать Статью',
		'all_items'	=>	'Все Статьи',
		'singular_name'	=>	'Статья'
	),
	'menu_icon'	=>	'dashicons-admin-site'
));





// Добавление правила перезаписи для типа записей sales
add_action('init', 'add_articles_rewrite_rule');
function add_articles_rewrite_rule() {
    add_rewrite_rule(
        '^articles/([^/]+).html/?$', // Шаблон URL
        'index.php?post_type=articles&articles=$matches[1]', // Параметры запроса
        'top'
    );
}

// Настройка постоянных ссылок для типа записей sales
add_filter('post_type_link', 'articles_post_link', 10, 2);
function articles_post_link($post_link, $post) {
    if ('articles' === $post->post_type) {
        $post_link = home_url('articles/' . $post->post_name. '.html');
    }
    return $post_link;
}
