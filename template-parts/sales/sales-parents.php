<?php
	function printParentData($parentType) {
		$fieldString = get_field($parentType);

				if ($fieldString && $fieldString !='[]') {
					$fieldData = json_decode($fieldString); ?>
<div class="col-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
  <?php get_template_part('template-parts/pets/pets-item', null, [
								'id' => $fieldData[0]
						]); ?>
</div>
<?php } 
		}
function getParentData($parentType) {
	$fieldString = get_field($parentType);
	if ($fieldString && $fieldString !='[]') { 
		return true;
	}else{ 
		return false;
	}
}
?>

<?php if(getParentData('father') || getParentData('mather')){?>
<h3 class="topic-color paw">Родители</h3>
<div class="main-grid">
  <?php
			printParentData('father');
			printParentData('mather');
		?>
</div>
<?php }?>