<?php

$imgs = $args['imgs'];

?>

<?php
  if($imgs){
$imgs = json_decode($imgs); 
$count = count($imgs);
 ?>
<div class="thumb-container animals-img-container">
  <div class="thumb-slider-verticale animals-slider">
    <?php foreach($imgs as $img){ ?>

    <a class="thumb-slider-item" data-thumb="<?php echo $img->url;?>" data-src="<?php echo $img->url;?>"
      href="<?php echo $img->url;?>" data-lightbox="vse_foto">
      <div class="img-cover">
        <img src="<?php echo $img->url;?>" alt="" />
      </div>
    </a>

    <?php } ?>
  </div>
</div>
<?php }else{ ?>

<a class="pets-item-img pets-stub-img" href="#">
  <div class="img-cover">
    <img src="<?php echo get_bloginfo('template_url').'/images/stub-pets.jpg' ?>" alt="">
  </div>
</a>
<?php } ?>