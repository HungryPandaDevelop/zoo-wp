<?php get_header(); 

// Добавьте этот код в файл functions.php вашей темы или в плагин.


?>

<div class="stub"></div>
<div class="main-full">
  <div class="breadcrumbs">
    <?php
      bcn_display();
		?>
  </div>
</div>
<div class="content">
  <div class="main-full">
    <h1>
      <?php the_title(); ?>
    </h1>
  </div>
  <div class="main-full">
    <div class="page-content">
      <?php the_content();

 
 ?>
    </div>
  </div>
</div>
<div class="section-stub"></div>
<?php get_footer(); ?>