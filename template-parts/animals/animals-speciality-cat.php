<?php

$arrSpecialityDog = [
    '','','','','','','','','','','','','','',
		'malopodvizhnaya-koshka',
		'podhodit-allergikam-koshka',
		'mnogo-spit-koshka',
		'malo-est-koshka',
		'giperaktivnaya-koshka',
		'legko-obuchaema-koshka',
		'mirolubivaya-sobaka',
		'nabiraet-lishnij-ves-koshka',

];


  $id_field = 'osobennosti_porody';
  $checkbox_values = get_field($id_field );
  ?>


<?php  if ($checkbox_values) {

?>
<div class="animals-speciality">
  <h2>Особенности породы</h2>
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
    <? }; ?>


  </div>

</div>

<? }?>