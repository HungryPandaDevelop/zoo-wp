<?php

register_post_type('services', array(
	'public'	=>	true,
	'supports'	=> array('title','editor','thumbnail','excerpt',),
	'has_archive'	=>	true,
	'public'	=>	true,
	'query_var' => true,
	'show_ui' => true,
	'show_in_rest'	=>	true,
	'labels'	=>	array(
		'name'	=>	'Услуги',
		'add_new_item'	=>	'Добавить Услугу',
		'edit_item'	=>	'Редактировать Услугу',
		'all_items'	=>	'Все Услуги',
		'singular_name'	=>	'Услуги'
	),
	'menu_icon'	=>	'dashicons-admin-network'
));