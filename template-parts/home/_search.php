<section class="search-section">
  <div class="img-cover"><img src="<?php echo get_bloginfo('template_url');?>/images/temp/1.jpg" alt=""></div>
  <div class="main-full">
    <h2>Найдите быстро интересующую вас породу</h2>
    <?php get_template_part('template-parts/module/search', null, [
      'type'  => 'ajax'
    ]); ?>
  </div>
</section>