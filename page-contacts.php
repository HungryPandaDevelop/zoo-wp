<?php get_header(); ?>

<!--CONTACTS PAGE -->

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
      <? the_title(); ?>
    </h1>
  </div>

<?php get_template_part('template-parts/detail/contacts'); ?>

</div>

<?php get_footer(); ?>