<?php

$target = get_field('target') ;
$target = json_decode($target); 

$price = get_field('price');

$id_company = get_field('company');
$id_company = json_decode($id_company);

$race = $args['race'];
$specialization = $args['specialization'];
$status = get_field('status_post');
if($status){
$status = json_decode($status);

}

?>

<div class="sticky-sidebar sales-sidebar">
  <?php if($target){?>
  <div class="sales-type-detail <?php echo $target->value; ?>">
    <?php echo $target->label; ?>
  </div>
  <?php } ?>
  <?php 

					get_template_part('/template-parts/sales/sales-detail-info', null,[
						'id_company'  =>  $id_company[0],
            'race'  =>  $race,
            'specialization'  =>  $specialization,
					]); 


				?>

  <?php if($status->value === 'active'){ ?>
  <div class="sales-sidebar-info">
    <?php 
		if($price){ ?>
    <div class="sales-price">
      Цена: <?php if($price == 'empty'){?>
      Договорная
      <?}else{?>
      <?php echo $price; ?>
      <?} ?>
    </div>
    <?php   } ?>

    <div class="btn-container">
      <div class="btn btn--blue element-btn order-sales-btn" data-element="4">Забронировать</div>
    </div>

  </div>
  <?php } ?>
  <div class="btn-map-sidebar-container">
    <div id="chat-btn-single-add"></div>
    <a class="btn btn--blue btn-map" href="/ads-map?point=<?php echo get_the_ID(); ?>"><i></i><span>На
        карте</span></a>
  </div>
  <?php 
		get_template_part('/template-parts/animals/animals-social', null,[
			'term'  =>  'porodi-sobak'
				]); 
	?>
</div>