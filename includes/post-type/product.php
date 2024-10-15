<?php

register_post_type('product', array(
	'supports'          => array('title','editor','thumbnail','excerpt',),
	'has_archive'       => true,
	'public'            => true,
	// 'hierarchical'      => true,
	'query_var'         => true, // что то про урл
	'map_meta_cap'	=>	true, // что то про доступ
	'show_ui'           => true, // что про интерфейс
	'labels'            => array(
			'name'          => 'Продукт',
			'add_new_item'  => 'Добавить Продукт',
			'edit_item'     => 'Редактировать Продукт',
			'all_items'     => 'Все Продукты',
			'singular_name' => 'Продукты'
	),
	'menu_icon'         => 'dashicons-hammer',

));




register_taxonomy(
	'product_category', 
	array( 'product' ),
	array(
			'label'             => 'Рубрика Продукты',
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'hierarchical'      => true,
	) 
);


// таксономия в админке
function product_taxonomy_filter() {
	global $typenow; // тип поста
	if( $typenow == 'product' ){ // для каких типов постов отображать
		$taxes = array('product_category'); // таксономии через запятую
		foreach ($taxes as $tax) {
			$current_tax = isset( $_GET[$tax] ) ? $_GET[$tax] : '';
			$tax_obj = get_taxonomy($tax);
			$tax_name = mb_strtolower($tax_obj->labels->name);
			// функция mb_strtolower переводит в нижний регистр
			// она может не работать на некоторых хостингах, если что, убирайте её отсюда
			$terms = get_terms($tax);
			if(count($terms) > 0) {
				echo "<select name='$tax' id='$tax' class='postform'>";
				echo "<option value=''>Все $tax_name</option>";
				foreach ($terms as $term) {
					echo '<option value='. $term->slug, $current_tax == $term->slug ? ' selected="selected"' : '','>' . $term->name .' (' . $term->count .')</option>'; 
				}
				echo "</select>";
			}
		}
	}
}

add_action( 'restrict_manage_posts', 'product_taxonomy_filter' );
// таксономия в админке