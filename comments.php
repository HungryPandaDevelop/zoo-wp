<section id="comments" class="comments-section">
  <div class="main-full head-section">
    <h2>Комментарии</h2>
  </div>
  <div class="main-grid">
    <? if ( have_comments() ) { ?>


    <div class="col-6 col-xs-12">
      <h3>Список комментариев</h3>
      <?php wp_list_comments( [
          'type' => 'comment', //Don't output pingbacks & trackbacks
          'callback' => 'rjs_comments_walker',
          'reverse_top_level' => true,
          // 'per_page' => 3
        ]); 

?>

      <div class="comments-navigation">
        <?php if(get_previous_comments_link()){?>
        <div class="prev-btn">
          <i></i>
          <span><?php previous_comments_link('Предыдущие комментарии'); ?></span>
        </div>
        <?}; ?>
        <?php if(get_next_comments_link()){?>
        <div class="next-btn">
          <span><?php next_comments_link('Следущие комментарии'); ?></span><i></i>
        </div>
        <?}; ?>
      </div>
    </div><!-- .comment-list -->


    <? } // Check for have_comments(). ?>



    <div class="col-6 col-xs-12 comments-form-container">
      <div class="comments-form" >
        <div class="comments-form-stub" ></div>
      <?php
      $comments_args = array(
        // изменим название кнопки
        'label_submit' => 'Отправить',
        // заголовок секции ответа
        'title_reply'=>'',
        // удалим текст, который будет показано после того как коммент отправлен
        'comment_notes_after' => '',
        'logged_in_as'  => '',
        // переопределим textarea (тело формы)
        'fields'               => [
          'author' => '<div class="input-box"><input  class="input-decorate comments-author" placeholder="Имя*" name="author" type="text" size="30" /></div>',
          'email' => '<div class="input-box"><input  class="input-decorate comments-email" placeholder="Email*" name="email" type="email" size="30" /></div>'
        ],
        'comment_field' => '
<div class="input-box"><input placeholder="Достоинства" type="text" name="like" class="input-decorate"/></div>
<div class="input-box"><input placeholder="Недостатки"  type="text" name="nolike" class="input-decorate"/></div>
<div class="input-box"><input placeholder="img" name="avatar" type="hidden" class="input-decorate comments-avatar"/></div>
<div class="input-box"><input placeholder="Ваш отзыв"  type="text"  name="comment" class="input-decorate"/></div>
<div class="input-box"><div class="checkbox comments-anonim-js"><label>Скрыть мои данные в отзыве<input type="checkbox"><span></span></label>
              </div></div>
',
        'class_submit'         => 'submit btn btn--blue',
        
    );
    
    comment_form( $comments_args );
      
      ?>
      <div class="comments-hint">Перед отправкой ознакомьтесь с <a href="/rule-public">правилами публикации</a></div>
      </div>
      <div class="btn-container-comments" >
        <h3>Отзывы могут отставлять пользователи, зарегистрированные на сайте. Администрация портала проверяет достоверность каждого отзыва.</h3>
        <a href="/cabinet" class="btn btn--blue">Войти</a>
      </div>
    </div>

  </div>

</section><!-- .comments-area -->