<?php 

  $id_field = $args['field'];
  $ico = $args['ico'];
  $type = $args['type'];
?>

<div class="animals-param-item">

  <img class="animals-param-ico"
    src="<?php echo get_bloginfo('template_url');?>/images/animals-param-ico/<?php echo $ico;?>.svg"
    alt="animals-param-ico" />

  <div class="animals-param-name"><?php echo get_field_object($id_field)['label'];?></div>

  <div class="animals-param-value">

    <?php if($type === 'group-1'){ ?>
    <div>Мальчик от <?php echo get_field($id_field)['malchik']['num_1']; ?> до
      <?php echo get_field($id_field)['malchik']['num_2']; ?> см</div>
    <div>Девочка от <?php echo get_field($id_field)['devochka']['num_1']; ?> до
      <?php echo get_field($id_field)['devochka']['num_2']; ?> см</div>
    <?php } ?>
    <?php if($type === 'group-2'){ ?>
    <div>Мальчик от <?php echo get_field($id_field)['malchik']['num_1']; ?> до
      <?php echo get_field($id_field)['malchik']['num_2']; ?> кг</div>
    <div>Девочка от <?php echo get_field($id_field)['devochka']['num_1']; ?> до
      <?php echo get_field($id_field)['devochka']['num_2']; ?> кг</div>
    <?php } ?>
    <?php if($type === 'checkbox'){ echo get_field($id_field)['label'];  }?>
    <?php if($type === 'name'){ echo get_field($id_field); }?>
    <?php if($type === 'name_n'){ echo ( get_field($id_field)['label']); }?>
    <?php if($type === 'list'){ foreach( get_field($id_field) as $item){ echo '<div>'.$item['label'].'</div>'; };  }; ?>

    <?php  if($type === 'long'){?>
    <div class="animals-param-name">
      От <?php echo get_field($id_field)['num_1'];?>
      до <?php echo get_field($id_field)['num_2'];?>
      <?php echo get_field($id_field)['extra'];?>
    </div>
    <?php }?>
  </div>
</div>