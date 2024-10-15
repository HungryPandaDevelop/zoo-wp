<?php

register_post_type('blog', array(
    'supports'         => array('title','editor','thumbnail','excerpt',),
    'has_archive'      => true,
    'public'           => true,
    'hierarchical'     => true,
    'query_var'        => true,
    'show_ui'          => true,
    'labels'           => array(
        'name'          => 'Блоги',
        'add_new_item'  => 'Добавить Блог',
        'edit_item'     => 'Редактировать Блог',
        'all_items'     => 'Все Блоги',
        'singular_name' => 'Блог'
    ),
    'menu_icon'        => 'dashicons-media-interactive'
));