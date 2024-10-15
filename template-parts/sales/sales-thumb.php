<?php
$imgs = $args['imgs'];

if($imgs){
$imgs = json_decode($imgs); 
?>
<div class="thumb-container animals-slider-thumb">
  <div class="thumb-slider-verticale animals-slider">

    <?php
				foreach ($imgs as $img) {
			?>
    <a class="thumb-slider-item" data-thumb="<?php echo $img->url;?>" data-src="<?php echo $img->url;?>"
      href="<?php echo $img->url;?>" data-lightbox="vse_foto">
      <div class="img-cover">
        <img src="<?php echo $img->url;?>" alt="" />
      </div>
    </a>
    <?php } ?>

  </div>
</div>
<?}?>