<?php
	$slug_acf = $args['slug_acf'];
	$title = get_field_object($slug_acf, 1267)['label'];
	$list_values = get_field_object($slug_acf, 1267)['choices'];

  // print_r(get_field_object('naznachenie', 1267));
  // 1267 id собаки кастыль
?>
<label><?php echo $title; ?></label>
<select class="style-select" name="<?php echo $slug_acf; ?>">
  <option value="">Все</option>
  <?php foreach ($list_values as $key => $item_value) { ?>
  <option value="<?php echo $key; ?>"
    <?php echo isset($_GET[$slug_acf]) && $_GET[$slug_acf] == $key ? 'selected' : ''; ?>>
    <?php echo $item_value; ?></option>
  <?php	}	?>
</select>