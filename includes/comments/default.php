<?php

// Убираем HTML-тег <p> вокруг текста комментария
add_filter( 'comment_text', 'remove_comment_paragraph_tags', 10, 1 );

function remove_comment_paragraph_tags( $comment_text ) {
	// Убираем тег <p> только если он оборачивает весь текст комментария
	$comment_text = preg_replace( '/^<p[^>]*>|<\/p>$/', '', $comment_text );
	return $comment_text;
}
// Убираем HTML-тег <p> вокруг текста комментария


// Отправка email

add_action( 'comment_post', 'save_extend_comment_meta_data' );

function save_extend_comment_meta_data( $comment_id ){

	function addLike($id,  $comment_id){
		if( !empty( $_POST[$id] ) ){
			$field = sanitize_text_field($_POST[$id]);
			add_comment_meta( $comment_id, $id, $field );
		}
	}

	addLike('like',  $comment_id,);
	addLike('nolike',  $comment_id,);
	addLike('avatar',  $comment_id,);




	$comment = get_comment($comment_id);
        
	// Задаем параметры письма
	$admin_email = 'info@zoonika.com';
	// $admin_email = 'bink@inbox.ru';
	$subject = 'Новый комментарий на сайте';
	$message = 'На сайте zoonika.com оставлен новый комментарий.<br>' . "\r\n\r\n";
	$message .= 'Автор: ' . $comment->comment_author . "\r\n";
	$message .= 'Ссылка: <a href="'.get_comment_link($comment_id).'">Страница с комментарием</a>' . "\r\n";

  $headers = array('Content-Type: text/html; charset=UTF-8');

	// Отправка письма
	wp_mail($admin_email, $subject, $message, $headers);
}
// Отправка email