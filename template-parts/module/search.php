<?php
  $type = $args['type'];
  $value_search = $args['value_search'];
  $placeholder = $args['placeholder'] ?? 'Поиск';
  $name_search = $args['name_search'] ?? 's';
?>

<div class="search-container">
  <div class="search <?php if ($value_search){ echo 'search-on';} ?>">
    <input class="search-input <?php if($type == 'ajax') {?> search-input-ajax<?php }  ?>" type="text"
      placeholder="<?php echo $placeholder; ?>" name="<?php echo $name_search; ?>"
      value="<?php echo $value_search; ?>"><a class="search-loop" href="#"></a>
    <i class="close-btn"></i>
    <?php 
    if($type == 'ajax'){?>
    <div class="search-list"></div>
    <div class="preloader">
    </div>
    <?php }?>
  </div>
</div>