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



  <?php get_template_part('template-parts/detail/roof', false, [
          'slug' =>  'blog'
        ]); ?>

  <div class="main-grid news-main">
    <div class="col-6 col-xs-12">
      <? 	$imgs = acf_photo_gallery('gallery_posts', get_the_ID()); ?>
      <div class="thumb-container">
        <div class="thumb-slider">

          <?php
            if($imgs){
            foreach ($imgs as $img) {
          ?>
          <a class="thumb-slider-item" data-thumb="<?php echo $img["full_image_url"];?>"
            data-src="<?php echo $img["full_image_url"];?>" href="<?php echo $img["full_image_url"];?>"
            data-lightbox="gallery_posts">
            <div class="img-cover">
              <img src="<?php echo $img["full_image_url"];?>" alt="" />
            </div>
          </a>
          <?}}?>

        </div>
      </div>
    </div>
    <div class="col-6 col-xs-12">
      <?php 

        the_content();

      ?>
      <div class="detail-links">
        <?php
      

        ?>
        <div class="tags">
          <?php
            $items = carbon_get_post_meta(get_the_ID(), 'acf_tags');
            foreach($items  as $item){?>
          <a class="tag" href="/search?s=<?php echo $item['text'];?>"><?php echo $item['text'];?></a>
          <?php } ?>
        </div>
      </div>

      <?php
            if ( function_exists( 'ADDTOANY_SHARE_SAVE_KIT' ) ) {
                ADDTOANY_SHARE_SAVE_KIT();
            }
        ?>
    </div>
  </div>


  <?php get_template_part('template-parts/home/news', false, [
          'title' =>  'Другие новости'
        ]); ?>



  <?php 
    comments_template();

  ?>

</div>

<div class="section-stub"></div>

<?php get_footer(); ?>