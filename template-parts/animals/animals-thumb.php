<?php

$imgs = acf_photo_gallery('vse_foto', get_the_ID()); ?>
<div class="thumb-container">
  <div class="thumb-slider-verticale">

    <?php
				if($imgs){
				foreach ($imgs as $img) {
			?>
    <a class="thumb-slider-item" data-thumb="<?php echo $img["full_image_url"];?>"
      data-src="<?php echo $img["full_image_url"];?>" href="<?php echo $img["full_image_url"];?>"
      data-lightbox="vse_foto">
      <div class="img-cover">
        <img src="<?php echo $img["full_image_url"];?>" alt="" />
      </div>
    </a>
    <?}}?>

  </div>
</div>