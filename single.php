<?php get_header(); ?>
<?php
$slides = carbon_get_the_post_meta( 'crb_detail_slider' );

?>
<div class="stub"></div>
<div class="main-full">
  <div class="breadcrumbs">
    <?
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
  <div class="main-full">
    <div class="detail-header">
      <div class="detail-header-item detail-header-item--first"><a class="back-link" href="#"><i
            class="back-ico"></i><span>Вернуться </span></a></div>
      <div class="detail-header-item">
        <i class="calendar-ico"></i>
        <span>
          <? echo carbon_get_the_post_meta( 'date_start' ); ?>
        </span>
        <? if(carbon_get_the_post_meta( 'date_end' )){ ?>/
        <span>
          <? echo carbon_get_the_post_meta( 'date_end' ); }?>
        </span>
      </div>
      <div class="detail-header-item">
        <a href="<? the_author_posts_link(); ?>"> <i class="avatar-ico"></i>
          <span>

          </span>
        </a>
      </div>
      <div class="detail-header-item"><a href="#"> <i class="review-ico"></i><span>
            <?  ?>
          </span></a></div>
      <div class="detail-header-item"> <a href="#"><i class="view-ico"></i><span>Просмотры</span></a></div>
    </div>
  </div>
  <div class="detail-main">
    <div class="main-grid">
      <div class="detail-slider">
        <div class="owl-detail-main owl-carousel">
          <? foreach($slides as $slider_item){?>
          <div class="slider-item flex-align">
            <div class="img-cover"><img src="<? echo wp_get_attachment_image_url($slider_item['image'],'full' ); ?>"
                alt="">
            </div>
          </div>
          <?}?>
        </div>
      </div>
      <div class="detail-about">
        <div class="detail-description">
          <? the_content(); ?>
        </div>
        <div class="detail-links">
          <div class="tags"><a href="#">News </a><a href="#">Last </a><a href="#">Custom </a></div>
          <div class="social">
            <?php if ( function_exists( 'ADDTOANY_SHARE_SAVE_KIT' ) ) { ADDTOANY_SHARE_SAVE_KIT(); } ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php
  // $params = [ 'idCustomType' => 'article' ];
  // get_template_part('template-parts/home/news','',$params );
  ?>
  <?php 
    comments_template();

  ?>

</div>

<?php get_footer(); ?>