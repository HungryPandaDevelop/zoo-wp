<?php

include 'sidebar/filter_item_options.php';
include 'sidebar/filter_item_range.php';

$current_url = strtok($_SERVER["REQUEST_URI"], '?');


?>


<div class="catalog-sidebar">
  <div class="sidebar-search">
    <div class="close-btn close-sidebar"></div>
    <form action="/product/">
      <div class="search-main">
        <div class="search-container">
          <div class="search">
            <input class="search-input" value="<?php echo $_GET['search'];?>" name="search" type="text"
              placeholder="Поиск"><a href="#"></a><i class="close-btn"></i>
          </div>
        </div>
      </div>
      <?php 
        filter_item_range('Range type', 'range-type', 30, 360);
      ?>

      <?php 
        filter_item_options('Options type', 'options-type', array(1250, 1650, 2300, 3500,  4000 ));
      ?>

      <div class="btn-container">
        <input type="submit" class="btn btn--blue" value="Показать" />
        <a href="<?echo $current_url;?>" class="btn btn--black-border">Сбросить</a>
      </div>
    </form>
  </div>
</div>