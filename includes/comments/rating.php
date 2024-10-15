<?php

add_action( 'comment_form_logged_in_after', 'html_output_form_rating' );
add_action( 'comment_form_before_fields', 'html_output_form_rating' );

function html_output_form_rating () { ?>

<div class="comments-form-head">
  <h3>Оставьте свой отзыв о 
    <?php echo $GLOBALS['seoAll']['term']; ?>
    <?php the_title(); ?>
  </h3>
  <div class="comments-stars">
    <?php for ( $i = 1; $i < 6; $i++ ) { ?>
    <div class="stars-ico" data-index="<?php echo  $i; ?>">
      <input type="radio" name="rating" value="<?php echo $i; ?>" />
    </div>
    <?php }; ?>
  </div>
</div>


<?php
}
//СОХРАНЯЕМ РЕЗУЛЬТАТ
add_action( 'comment_post', 'save_rating' );

function save_rating( $comment_id ) {
    if ( ( isset( $_POST['rating'] ) ) && ( '' !== $_POST['rating'] ) )
    $rating = intval( $_POST['rating'] );
    add_comment_meta( $comment_id, 'rating', $rating );
}


//ВЫВОДИМ РЕЙТИНГ В ОПУБЛИКОВАННОМ КОММЕНТАРИИ
add_filter( 'comment_text', 'publick_in_item');

function publick_in_item( $comment_text ){
  if ( $rating = get_comment_meta( get_comment_ID(), 'rating', true ) ) {
    $stars = '<div class="com_star">';
    for ( $i = 1; $i <= $rating; $i++ ) {$stars .= '<span class="dashicons dashicons-star-filled"></span>';}
    $stars .= '</div>';
    // $comment_text = $comment_text . $rating;
    return $comment_text;
  } else {return $comment_text;}
}


// NEW

// Добавляем мета-бокс для рейтинга
add_action( 'add_meta_boxes_comment', 'comm_rating_add_meta_box' );
function comm_rating_add_meta_box() {
    add_meta_box(
        'comm_rating_meta_box', // ID мета-бокса
        __( 'Рейтинг комментария', 'textdomain' ), // Заголовок мета-бокса
        'comm_rating_meta_box_callback', // Функция обратного вызова
        'comment', // Экран (в данном случае 'comment' для комментариев)
        'normal', // Контекст (normal, side, advanced)
        'high' // Приоритет (default, core, high, low)
    );
}


// Функция обратного вызова для отображения контента мета-бокса
function comm_rating_meta_box_callback( $comment ) {
    $rating = get_comment_meta( $comment->comment_ID, 'rating', true );

    ?>
    <div>
        <label for="rating"><?php _e( 'Рейтинг' ); ?></label>
        <input type="text" name="rating" id="rating" value="<?php echo $rating; ?>">
    </div>
    <?php
}

// Сохраняем значение рейтинга при обновлении комментария
add_action( 'edit_comment', 'edit_meta_data_rating' );

function edit_meta_data_rating( $comment_id ) {

    if ( isset( $_POST['rating'] )  ) {
        $rating = sanitize_text_field( $_POST['rating'] );
        update_comment_meta( $comment_id, 'rating', $rating );
    } 
}
