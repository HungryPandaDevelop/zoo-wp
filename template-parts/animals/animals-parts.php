<?php
	// Получаем объект поля "Отличительные черты"
	$id_field = 'otlichitelnye_cherty';
	$field_object = get_field_object($id_field );
  $a = 1;
  $type = $args['type'];
?>

<div class="animals-parts">
  <h2>Отличительные черты</h2>
  <?php
		// Проверяем, есть ли подполя
		if (!empty($field_object['sub_fields'])) {
			foreach ($field_object['sub_fields'] as $subfield) {
				$subfield_label = $subfield['label'];
				$subfield_value = get_field($id_field )[$subfield['name']]; ?>
  <div class="point-3<?php echo $a; ?>"></div>
  <div class="animals-parts-item">
    <img class="animals-parts-ico"
      src="<?php echo get_bloginfo('template_url');?>/images/animal-parts-<?php echo $type; ?>/<?php echo $subfield['name']; ?>.svg"
      alt="" />
    <div class="animals-parts-content">
      <h3>
        <span><?php echo $subfield_label; ?></span>
      </h3>
      <div class="animals-parts-text">
        <?php echo $subfield_value; ?>
      </div>
    </div>


  </div>
  <?php 
$a++;
}; }; ?>
</div>