<?php

$arrSpecialityDog = [
		'malopodvignaya-sobaka',
		'sobaka-dla-allergika',
		'sobaka-mnogo-spit',
		'sobaka-malo-est',
		'sobaka-drugit-s-detmi',
		'giperaktivnaya-sobaka',
		'sobaka-nyanka',
		'sobaka-prigodna-dka-ohoti',
		'legko-obuchaemaya-sobaka',
		'ochen-ymnaya-sobaka',
		'mirolubivaya-sobaka',
		'sobaka-otlichnii-storog',
		'sobaka-ne-drugit-s-detmi',
		'sobaka-nabiraet-lishnii-ves',
];


  $id_field = 'osobennosti_porody';
  $checkbox_values = get_field($id_field );
  
  if ($checkbox_values) {

?>
<div class="animals-speciality">
  <h2>Особенности породы
  </h2>
  <div class="animals-speciality-container">
    <?php

      $field_object = get_field_object($id_field );

      foreach ($checkbox_values as $value) {
        $num = substr($value, 4);
        $option_label = $field_object['choices'][$value];  

?>
    <div class="animals-speciality-item">
      <img
        src="<?php echo get_bloginfo('template_url');?>/images/animals-param-ico/<?php echo $arrSpecialityDog[$num - 1]; ?>.svg"
        alt="">
      <h4><?php echo $option_label;  ?></h4>

    </div>
    <? };  ?>
  </div>

</div>
<?php }?>