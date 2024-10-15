<?php get_header(); ?>
<?php 
  $search_query = get_search_query();

  $args = array(
      'post_type' => array('news','blog','product','services',),
      'posts_per_page' => -1,
      's' => $search_query,
  );
  $items = new WP_Query($args);

?>

<div class="stub"></div>
<div class="main-full">
  <div class="breadcrumbs">
    <?
      bcn_display();
		?>
  </div>
</div>
<div class="content">
  <div class="main-full">
    <h1>
      Поиск
    </h1>
  </div>
  <div class="main-full">
    <div class="search-form-container">

      <form class="search-form" action="/search">
        <?php 
          get_template_part('template-parts/module/search', null,[
            'value_search'  =>  $search_query
          ]); 
        ?>
        <button type="submit" class="btn btn--orange">Поиск</button>
      </form>


      <div class="search-form-hint"> <?php if(!empty($search_query)){?>
        <span>Совпадение по запросу:</span><b><?php echo $search_query; ?></b>
        <?}else{?>
        <span>Начните поиск </span>
        <?}?>
      </div>



    </div>
  </div>
  <div class="main-full">

    <?php if(!empty($search_query)){?>
    <?php
      if ($items->have_posts()) {
        while ($items->have_posts()) {

        $items->the_post();

        // Получаем содержимое поста
        $content = get_the_content();
       // Подсвечиваем найденный текст
        $highlighted_content = preg_replace('/(' . preg_quote($search_query, '/') . ')/i', '<span class="highlight-text">$1</span>', $content);
        $highlighted_content = htmlspecialchars_decode($highlighted_content);
        // Вывод названия и ссылки
        $post_type_name = get_post_type_object(get_post_type())->labels->name;
        $archive_link = get_post_type_archive_link(get_post_type());
        
        // Вывод результатов поиска
        ?>

    <div class="search-item">
      <div class="search-item-head">
        <h3> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
        <h4> <span>Категория:</span><a href="<?php echo $archive_link; ?>"><?php echo $post_type_name; ?> </a></h4>
      </div>
      <div class="search-item-content"><?php echo $highlighted_content; ?></div>
    </div>

    <?php } } else {
    // Вывод сообщения об отсутствии результатов
    echo 'Ничего не найдено.'; } ?>
    <?}?>

  </div>
</div>
<div class="section-stub"></div>
<?php get_footer(); ?>