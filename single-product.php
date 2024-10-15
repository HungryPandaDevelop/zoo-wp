<?php get_header(); ?>
<div class="stub"></div>
<div class="main-full">
  <div class="breadcrumbs">
    <?php 
      bcn_display();
    ?>
  </div>
  <h1><?php the_title();?></h1>
</div>

<div class="content">

  <?php get_template_part('template-parts/product/detail/gallery'); ?>
  <?php get_template_part('template-parts/product/detail/about'); ?>




  <div class="section-stub"></div>


  <?php get_template_part('template-parts/detail/slider_post_template', null, 
  [
    'title' =>  'Другие продукты',
    'slug' => 'product'
  ]
); ?>


  <div class="section-stub"></div>
  <?php get_template_part('template-parts/product/detail/num'); ?>
  <?php get_template_part('template-parts/product/detail/reviews'); ?>


</div>



<div class="section-stub"></div>
<?php get_footer(); ?>