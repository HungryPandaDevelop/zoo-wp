<?php



?>

<div class="search-container">
  <label>Быстрый поиск породы</label>
  <div class="search search-ajax">
    <input class="search-input search-input-ajax" type="text" name="<?php echo $args['name']; ?>"
      value="<?php echo $_GET[$args['name']]; ?>" placeholder="<?php echo $args['placeholder']; ?>"
      data-race="<?php echo $_GET['race']; ?>" data-light="<?php echo $args['lite']; ?>">
    <a class="search-loop" href="#"></a>
    <i class="close-btn"></i>
    <div class="search-list"></div>
    <!-- <div class="preloader-container">
      <div class="preloader">
      </div>
    </div> -->
  </div>
</div>