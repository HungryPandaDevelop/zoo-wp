<?php get_header(); ?>

<?php get_template_part('template-parts/home/main'); ?>



<?php get_template_part('template-parts/home/banner'); ?>
<?php get_template_part('template-parts/home/ads'); ?>
<?php get_template_part('template-parts/home/pitomniki'); ?>
<?php get_template_part('template-parts/home/prijuty'); ?>

<?php /* get_template_part('template-parts/home/search'); */?>





<!-- <div class="section-stub"></div> -->



<?php /*
if(get_field('news')['on'][0] == 'on'){?>
<?php get_template_part('template-parts/home/slider_post_template', null, 
  [
    'slug' => 'news'
  ]
); ?>
<?} */?>


<?php /*
if(get_field('product')['on'][0] == 'on'){?>
<?php get_template_part('template-parts/home/slider_post_template', null, 
  [
    'slug' => 'product'
  ]
); ?>
<?}*/ ?>


<?php 
// get_template_part('template-parts/home/partners');
 ?>

<?php 
// get_template_part('template-parts/home/faq'); 
?>

<?php
//  get_template_part('template-parts/home/contacts'); 
?>

<!-- <div class="stub-section"></div> -->

<?php 
// get_template_part('template-parts/home/feedback');
 ?>


<div class="stub-section"></div>
<?php 

get_footer(); ?>