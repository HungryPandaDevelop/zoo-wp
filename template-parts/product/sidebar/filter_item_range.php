<?php    

  function filter_item_range($title, $name, $min, $max){    
    
  $from = isset($_GET[$name.'_from']) ? $_GET[$name.'_from'] : $min;
  $to = isset($_GET[$name.'_to']) ? $_GET[$name.'_to'] : $max;
    
  ?>
<div class="sidebar-search-item active">
  <div class="sidebar-search-head"><i></i>
    <h3><?php echo $title;?>:</h3>
  </div>


  <div class="sidebar-search-body">

    <div class="style-range-container range-slider-js">
      <div class="hidden-input-irs">
        <input type="text" name="<?php echo $name;?>_from" value="<?php echo $_GET[$name.'_from']; ?>"
          class="from-range">
        <input type="text" name="<?php echo $name;?>_to" value="<?php echo $_GET[$name.'_to']; ?>" class="to-range">
      </div>
      <div class="range-slider" data-type="double" data-min="<?php echo $min; ?>" data-max="<?php echo $max; ?>"
        data-from="<?php echo $from; ?>" data-to="<?php echo $to; ?>"></div>
    </div>

  </div>



</div>
<?php    };    ?>