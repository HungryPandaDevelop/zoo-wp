<?

use Carbon_Fields\Container;
use Carbon_Fields\Field;


// 		Field::make( 'date', 'date_start', 'Дата' )
// 		->set_storage_format( 'Y-m-d' )

// 		Field::make( 'media_gallery', 'nodes_imgs', 'Галерея' ),

// 		Field::make( 'image', 'nodes_img', 'Главная картинка' )
// 			->set_value_type( 'url' ),





Container::make( 'post_meta', 'Теги' )
	->show_on_post_type(array('news'))
	->add_fields([
		Field::make( 'complex', 'acf_tags', 'Пункты' )
		->set_layout( 'tabbed-horizontal' )
		->add_fields( array(
			Field::make( 'text', 'text', 'Текст' ),
		))
	]);