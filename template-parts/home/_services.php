<?php
$slug = 'services';
$src_item = 'template-parts/'.$slug .'/'.$slug .'-item';
$items = get_field('services')['choise'];
?>


<?php
if(get_field($slug)['on'][0] == 'on'){?>

<?php
$post_type_name = get_post_type_object($slug)->labels->name;
?>

<section class="services-home">
  <div class="main-full head-section">
    <h2><?php echo $post_type_name;?></h2>
  </div>
  <div class="main-grid">
    <?php 
			foreach ($items as $item) {?>
    <div class="col-3 col-md-6 col-xs-12">
      <?php 
				get_template_part($src_item, null, [
					'id'	=> $item	
				]); ?>
    </div>
    <?php }; ?>
  </div>
</section>

<?}?>