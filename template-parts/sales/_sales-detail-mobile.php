<?php

$id_company = get_field('company');
$id_company = json_decode($id_company);


?>

<div class="sales-detail-mobile">


  <h2>Описание:</h2>
  <?php the_content();  ?>



  <?php  get_template_part('/template-parts/sales/sales-nabory');  ?>
  <div class="sales-detail-info-second">
    <?php 
					get_template_part('/template-parts/sales/sales-detail-info', null,[
						'id_company'  =>  $id_company[0]
					]); 
				?>
  </div>
</div>