<?php




add_action( 'add_meta_boxes_comment', 'extend_comment_add_meta_box' );
function extend_comment_add_meta_box(){
	add_meta_box( 'like','Дополнительные поля комментариев', 'extend_comment_meta_box', 'comment', 'normal', 'high' );
}

function extend_comment_meta_box( $comment ){

	function extend_admin_field($id, $comment){
		$value = get_comment_meta( $comment->comment_ID, $id, true ); ?>
		<div>
			<label for="<?php echo $id; ?>"><?php echo $id; ?></label>
			<input type="text" name="<?php echo $id; ?>" value="<?php echo esc_attr( $value ); ?>" class="widefat" />
		</div>
	<?php    };

	extend_admin_field('like', $comment);
	extend_admin_field('nolike', $comment);
	extend_admin_field('avatar', $comment);

}

add_action( 'edit_comment', 'edit_meta_data' );

function edit_meta_data( $comment_id ) {

	function fieldsEdit($id, $comment_id){
		if(isset($_POST[$id]) ){
			$like = sanitize_text_field($_POST[$id]);
			update_comment_meta( $comment_id, $id, $like );
		}

	}

	fieldsEdit('like', $comment_id);
	fieldsEdit('nolike', $comment_id);
	fieldsEdit('avatar', $comment_id);
}