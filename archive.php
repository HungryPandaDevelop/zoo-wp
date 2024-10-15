<?php get_header(); ?>
<div class="main-full">
  <div class="breadcrumbs">
    <?php
      bcn_display();
		?>
  </div>
</div>

<div class="stub"></div>
<div class="content">
  <div class="main-full">
    <h1>
      <? echo post_type_archive_title(); ?>
    </h1>
  </div>
  <div class="main-grid catalog-grid">
    <?
      while(have_posts()){
        the_post();?>

    <div class="col-4">
      <a href="<?php the_permalink(); ?>"><?php the_title();?></a>
    </div>

    <?}?>
  </div>
</div>
<div class="main-full">
  <?php the_posts_pagination(); ?>
</div>
<?php get_footer(); ?>