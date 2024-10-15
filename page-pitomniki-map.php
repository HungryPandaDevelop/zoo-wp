


<?php get_template_part('template-parts/map/main',null,[
  'post_type' => 'companies',
  'terms' => 'pitomniki',
  'title' => get_the_title(),
]); ?>

<? get_footer(); ?>