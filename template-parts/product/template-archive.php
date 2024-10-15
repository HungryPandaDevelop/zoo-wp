<?php get_header(); ?>

<?php 

  $current_term = get_queried_object();

  $args = array(
    'posts_per_page' => 3,
    'post_type' => 'product',
    'order' => 'ASC',
    // 'order' => 'DESK',
    'paged' => get_query_var('paged') ? get_query_var('paged') : 1, // Учтем текущую страницу пагинации
  );

  if (is_tax('product_category')) {
    $args['tax_query'] = array(
        array(
            'taxonomy' => 'product_category',
            'field' => 'slug',
            'terms' => $current_term->slug,
        ),
    );
  }

  $items = new WP_Query($args);


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
      Product Archive
      <?php
      if(!is_tax()){?>
      Product
      <?php }else{ echo $current_term->name; } ?>
    </h1>
  </div>
  <div class="main-grid">
    <div class="col-3">
      <?php get_template_part('template-parts/product/product-nav',null, array(
        // 'term' =>  'betonosmesitel-nye-ustanovki'
      )); ?>
      <?php get_template_part('template-parts/product/product-sidebar'); ?>
    </div>
    <div class="col-9">
      <?php get_template_part('template-parts/product/product-sorting'); ?>
      <div class="main-grid">
        <?php 
        if($items->have_posts()){
          while($items->have_posts()){
            $items->the_post();?>
        <div class="col-4 col-lg-6 col-xs-12">
          <?php get_template_part('template-parts/product/product-item'); ?>
        </div>
        <?}
        };
        wp_reset_postdata();
      ?>
      </div>
      <!-- pagination-component start-->
      <div class="pagination">
        <?
          echo paginate_links(array(
            'total' => $items->max_num_pages,
            'current' => max(1, get_query_var('paged')),
        ));
      ?>
      </div>
      <!-- pagination-component start-->
    </div>
  </div>
  <div class="section-stub"></div>
</div>


<?php get_footer(); ?>