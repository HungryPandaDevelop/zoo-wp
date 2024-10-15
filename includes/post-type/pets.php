<?php

register_post_type('pets', array(
	'supports'	=> array('title','editor','thumbnail','excerpt','author','comments'),
	'capability_type'   =>  'pets',
	'map_meta_cap'  =>  true,
	'has_archive'	=>	true,
	'public'	=>	true,
	'query_var' => true,
	'show_ui' => true,
	'show_in_rest'	=>	true,
	'labels'	=>	array(
		'name'	=>	'Питомцы',
	),
	'menu_icon'	=>	'dashicons-admin-network'
));