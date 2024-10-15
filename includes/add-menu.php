<?php

register_nav_menus(array(
	'header-menu-primary' => 'Меню в шапке',
	'footer-menu-primary' => 'Меню в подвале',
	'modal-menu-primary' => 'Меню в окне',
	
));


function header_menu(){
	wp_nav_menu(array(
		'theme_location'	=>	'header-menu-primary',
		'menu_id'	=>	'',
		'menu_class' => '',
		'container' => '',
	));
};

function footer_menu(){
	wp_nav_menu(array(
		'theme_location'	=>	'footer-menu-primary',
		'menu_id'	=>	'',
		'menu_class' => '',
		'container' => ''
	));
};

function modal_menu(){
	wp_nav_menu(array(
		'theme_location'	=>	'modal-menu-primary',
		'menu_id'	=>	'',
		'menu_class' => '',
		'container' => ''
	));
};