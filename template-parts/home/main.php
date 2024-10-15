<!-- main start-->
<!-- <div class="stub"></div> -->

<?php
$items = carbon_get_post_meta(get_the_ID(), 'crb_slides');
$count = 0;
$total = count($items) - 1;
?>
<div class="main-home">
  <!-- <div class="main-slider"> -->
  <div>
    <!-- <div> -->
    <?php  foreach($items  as $item){?>
    <?php /* <div class="main-slider-item <?php if($count == 0){?>first
    <?}?> <?php if($count == $total){?>last
    <?}?>"> */?>
    <div class="main-slider-single">
      <div class="main-home-content main-full">
        <div class="main-home-info">

          <h2><?php echo $item['text_2'];?></h2>
          <h3><?php echo $item['text_1'];?></h3>
        </div>
        <div class="btn-container">
          <a href="<?php echo $item['link'];?>" class="btn btn--blue"><?php echo $item['link_text'];?></a>
        </div>
        <div class="scroll-home-container">
          <!-- <div class="mouse-down-btn mouse-down-btn-js">
            <div class="dot"></div>
          </div> -->
        </div>
      </div>
      <?php 
      // print_r($item['img']);
      $file_url = wp_get_attachment_url($item['img']);
      $file_url_mobile = wp_get_attachment_url($item['img_mobile']);
      if($item['type']=='video'){ ?>
      <div class="main-home-video">
        <video width="480" loop autoplay muted playsinline>
          <source src="<?php echo $file_url;?>" type="video/mp4">
        </video>
      </div>
      <?php }else{ ?>
      <div class="img-cover img-desk"><img src="<?php echo $file_url;?>" alt=""></div>
      <div class="img-cover img-mobile"><img src="<?php echo $file_url_mobile;?>" alt=""></div>
      <?php } ?>

    </div>
    <?php $count++; ?>
    <?php } ?>
  </div>
</div>
<!-- main end-->