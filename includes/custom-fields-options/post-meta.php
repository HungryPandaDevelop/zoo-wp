<?
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;


Container::make( 'post_meta', 'Первый слайдер' )
	->show_on_page(6)
	->add_tab('Первый слайдер',[
		Field::make( 'complex', 'crb_slides', 'Slides' )
		->set_layout( 'tabbed-horizontal' )
		->add_fields( array(
			Field::make( 'text', 'text_1', 'Текст 1' ),
			Field::make( 'text', 'text_2', 'Текст 2' ),
			Field::make( 'text', 'link_text', 'Текст Ссылка' ),
			Field::make( 'text', 'link', 'Ссылка' ),
			Field::make( 'text', 'type', 'Тип' ),
			Field::make( 'file', 'img', 'Главная картинка' ),
			Field::make( 'file', 'img_mobile', 'Главная картинка mobile' )
		))
	]);