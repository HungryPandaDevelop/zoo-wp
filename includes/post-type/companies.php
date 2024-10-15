<?php

register_post_type('companies', array(
    'supports'         => array('title','editor','thumbnail','excerpt','author','comments',),
    'capability_type'   =>  'companies',
    'map_meta_cap'  =>  true,
    'has_archive'      => false,
    'public'           => true,
    'hierarchical'     => true,
    'query_var'        => true,
    'show_ui'          => true,
    'show_in_rest'	=>	true,
    // 'rewrite'               => array('slug'=>'pitomniki', 'hierarchical'=>false, 'with_front'=>false,),
    // 'rewrite' => array( 'slug' => '/', 'with_front' => false,  'hierarchical'=>false, ),
    // 'rewrite' => false,
    'labels'           => array(
        'name'          => 'Компании',
    ),
    'menu_icon'        => 'dashicons-media-interactive'
));


register_taxonomy(
	'companies_category', 
	array( 'companies' ),
	array(
        'label'             => 'Рубрика Компаний',
        'public'            => true,
        'show_ui'           => true,
        'show_in_rest'	=>	true,
        'show_admin_column' => true,
        'query_var'         => true,
        'capabilities' => array(
            'manage_terms' => 'manage_companies_categories', // Возможность управлять терминами
            'edit_terms' => 'edit_companies_categories',     // Возможность редактировать термины
            'delete_terms' => 'delete_companies_categories', // Возможность удалять термины
            'assign_terms' => 'assign_companies_categories', // Возможность назначать термины
        ),
        'hierarchical'      => true,
	) 
);







// таксономия в админке
function companies_taxonomy_filter() {
	global $typenow; // тип поста
	if( $typenow == 'companies' ){ // для каких типов постов отображать
		$taxes = array('companies_category'); // таксономии через запятую
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

add_action( 'restrict_manage_posts', 'companies_taxonomy_filter' );

//pitomniki
// РАБОЧЕЕ
add_action('init', 'wpse_add_companies_rewrite_rule');
function wpse_add_companies_rewrite_rule() {
    add_rewrite_rule(
        '^pitomniki/([^/]+).html?$',
        'index.php?post_type=companies&companies_category=pitomniki&companies=$matches[1]',
        'top'
    );
    // потом удалить 
    //
    add_rewrite_rule(
        '^pitomniki/([^/]+)?$',
        'index.php?post_type=companies&companies_category=pitomniki&companies=$matches[1]',
        'top'
    );
    //
     // потом удалить
    add_rewrite_rule(
        '^prijuty/([^/]+).html?$',
        'index.php?post_type=companies&companies_category=prijuty&companies=$matches[1]',
        'top'
    );
    // потом удалить
    //
    add_rewrite_rule(
        '^prijuty/([^/]+)?$',
        'index.php?post_type=companies&companies_category=prijuty&companies=$matches[1]',
        'top'
    );
    //
     // потом удалить
}

add_filter('post_type_link', 'wpse_companies_post_link', 10, 2);
function wpse_companies_post_link($post_link, $post) {
    if ('companies' === $post->post_type) {
        $terms = wp_get_object_terms($post->ID, 'companies_category');
        if (!empty($terms) && !is_wp_error($terms)) {
            $post_link = home_url( $terms[0]->slug . '/' . $post->post_name. '.html');
        }
    }
    return $post_link;
} 
// РАБОЧЕЕ

// НЕ РАБОЧЕЕ

// add_filter('post_type_link', function ($post_link, $post, $leavename) {
//     if (isset($post->post_type) && $post->post_type === 'companies') {
//         $post_link = home_url($post->post_name); 
//     }

//     return $post_link;
// }, 10, 3);

// add_action('init', function () {
//     add_rewrite_rule('(.+?)/?$', 'index.php?companies=$matches[1]', 'bottom');
// });

// НЕ РАБОЧЕЕ