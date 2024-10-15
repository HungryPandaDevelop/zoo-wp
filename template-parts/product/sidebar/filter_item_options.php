<?php function filter_item_options($title, $name, $values){?>

<div class="sidebar-search-item active">
  <div class="sidebar-search-head"><i></i>
    <h3><?php echo $title;?>:</h3>
  </div>
  <div class="sidebar-search-body">
    <div class="checkbox-container">
      <?php
    foreach ($values as $value) {
    ?>
      <div class="checkbox">
        <label><?php echo $value; ?>
          <input type="radio" value="<?php echo $value; ?>" name=<?php echo $name; ?>
            <?php echo isset($_GET[$name]) && $_GET[$name] === (string) $value ? 'checked' : ''; ?>><span></span>
        </label>
      </div>
      <?php
    }
    ?>
    </div>
  </div>
</div>

<?php } ?>