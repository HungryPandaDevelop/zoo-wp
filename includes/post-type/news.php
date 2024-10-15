<?php

register_post_type('news', array(
	'public'	=>	true,
	'supports'	=> array('title','editor','thumbnail','excerpt', 'comments' ),
	'has_archive'	=>	true,
	'public'	=>	true,
	'show_in_menu' => true,
	'query_var' => true,
	'show_ui' => true,
	'labels'	=>	array(
		'name'	=>	'Новости',
		'add_new_item'	=>	'Добавить новости',
		'edit_item'	=>	'Редактировать новости',
		'all_items'	=>	'Все новости',
		'singular_name'	=>	'Новость'
	),
	'menu_icon'	=>	'dashicons-admin-site'
));