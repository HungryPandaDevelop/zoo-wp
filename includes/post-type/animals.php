<?


register_post_type('events', array(
	'supports'          => array('title','thumbnail','excerpt','editor', 'author', 'comments'),
	'has_archive'       => true,
	'public'            => true,
	'hierarchical'      => true,
	'query_var'         => true, // что то про урл
	'map_meta_cap'	=>	true, // что то про доступ
	'show_ui'          => true,
	'show_in_rest'	=>	true,
	'labels'            => array(
			'name'          => 'Породы',
	),
	'menu_icon'         => 'dashicons-nametag',

));


register_taxonomy(
	'eventscat', 
	array( 'events' ),
	array(
			'label'             => 'Рубрика Породы',
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'hierarchical'      => true,
	) 
);

// таксономия в админке
function animals_taxonomy_filter() {
	global $typenow; // тип поста
	if( $typenow == 'events' ){ // для каких типов постов отображать
		$taxes = array('eventscat'); // таксономии через запятую
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

add_action( 'restrict_manage_posts', 'animals_taxonomy_filter' );
// таксономия в админке




add_action('init', 'wpse_add_events_rewrite_rule');
function wpse_add_events_rewrite_rule() {
    add_rewrite_rule(
        '^porodi-sobak/([^/]+).html?$',
        'index.php?post_type=events&eventscat=porodi-sobak&events=$matches[1]',
        'top'
    );
    add_rewrite_rule(
        '^porodi-koshki/([^/]+).html?$',
        'index.php?post_type=events&eventscat=porodi-koshki&events=$matches[1]',
        'top'
    );
}

add_filter('post_type_link', 'wpse_course_post_link', 10, 2);
function wpse_course_post_link($post_link, $post) {
    if ('events' === $post->post_type) {
        $terms = wp_get_object_terms($post->ID, 'eventscat');
        if (!empty($terms) && !is_wp_error($terms)) {
            $post_link = home_url( $terms[0]->slug . '/' . $post->post_name .'.html');
        }
    }
    return $post_link;
} 


