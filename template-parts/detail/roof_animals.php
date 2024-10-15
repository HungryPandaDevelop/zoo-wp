<?php
$target = get_field('target') ;
$target = json_decode($target); 



?>


<div class="detail-roof">
  <div class="main-full">

    <?php /*<a class="prev-btn" href="<?php echo get_the_permalink(nav_posts($args['slug'])[0]);?>"><i>
    </i><span>Назад</span></a>*/?>

    <div class="detail-roof-info">
      <div class="detail-roof-info-item">
        <i class="rewiews-ico"></i>
        <span><?php echo get_comments_number(); ?></span>
      </div>
      <div class="detail-roof-info-item">
        <i class="view-ico"></i>
        <span>
          <?php echo do_shortcode('[post-views]'); ?>
        </span>
      </div>

      <?php if($target){?>
      <div class="sales-type-detail <?php echo $target->value; ?>">
        <?php echo $target->label; ?>
      </div>
      <?php } ?>
    </div>
    <?php /*
<a class="next-btn"
      href="<?php echo get_the_permalink(nav_posts($args['slug'])[1]);?>"><span>Дальше</span><i></i></a> */?>
  </div>
</div>