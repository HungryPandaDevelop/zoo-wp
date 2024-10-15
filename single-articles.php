
<?php

$request_uri = $_SERVER['REQUEST_URI'];

if (!str_contains( $request_uri, '.html')) {

    $new_url = rtrim($request_uri, '/') . '.html';
    header("Location: $new_url", true, 301);
    exit();
}

?>



<?php get_header(); ?>

<div class="stub"></div>


<div class="content">
  <div class="main-full">
    <div class="breadcrumbs">
      <?php 
      bcn_display();
    ?>
    </div>
    <h1><?php the_title();?></h1>
  </div>




  <div class="main-grid news-main">
    <div class="col-9 col-lg-8 col-xs-12 sales-main-info">

      <?php 

        the_content();

      ?>
    </div>
    <div class="col-3 col-lg-4 col-xs-12 ">
      <div class="sticky-sidebar">
        <div class="animals-sidebar">

        <?php 
		get_template_part('/template-parts/animals/animals-social', null,[
			'term'  =>  'porodi-sobak'
				]); 
	?>
        </div>
      </div>
   
    

    </div>
  </div>



  <?php
  /*
  get_template_part('template-parts/detail/slider_post_template', null, 
  [
    'title' =>  'Другие статьи',
    'slug' => 'articles'
  ]
);*/ ?>


  <?php 
    comments_template();

  ?>

</div>

<div class="section-stub"></div>

<?php get_footer(); ?>