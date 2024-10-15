<?php get_header(); ?>

<div class="stub"></div>
<div class="main-full">
  <div class="breadcrumbs">
    <?php 
      bcn_display();
    ?>
  </div>
</div>

<div class="content">

  <?php get_template_part('template-parts/services/detail/main'); ?>
  <div class="tabs-point-1"></div>

  <?php get_template_part('template-parts/services/detail/tabs'); ?>
  <?php get_template_part('template-parts/services/detail/price'); ?>

  <?php get_template_part('template-parts/services/detail/long-slider'); ?>
  <div class="section-stub"></div>
  <div class="tabs-point-2"></div>
  <?php get_template_part('template-parts/services/detail/stage'); ?>
  <div class="section-stub"></div>
  <?php get_template_part('template-parts/services/detail/simple'); ?>
  <div class="tabs-point-3"></div>
  <?php get_template_part('template-parts/services/detail/video'); ?>
  <div class="section-stub"></div>
</div>



<?php get_footer(); ?>