<?php 

  $id_field = $args['field'];
  $ico = $args['ico'];
  $type = $args['type'];
?>

<div class="animals-param-item">
  <div class="animals-param-ico">
    <img src="<?php echo get_bloginfo('template_url');?>/images/animals-param-ico/<?php echo $ico;?>.svg" alt="">
  </div>
  <div class="animals-param-name"><?php echo get_field_object($id_field)['label'];?></div>

  <div class="animals-param-value">
    <?php
  if($type === 'checkbox'){?>
    <?php
    echo get_field($id_field)['label']; ?>
    <?php }?>
    <?php if($type === 'long'){?>
    <div class="animals-param-name">
      От <?php echo get_field($id_field)['num_1'];?>
      До <?php echo get_field($id_field)['num_2'];?>

    </div>
    <?php }?>
  </div>
</div>