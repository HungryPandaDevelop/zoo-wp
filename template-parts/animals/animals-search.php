<?php
	$type = $args['type'];
	$arr_acf = ['naznachenie', 'razmer', 'soderzhanie', 'strana'];
?>

<form action="/<?php echo $type;?>" class="main-grid animals-search animals-search-js">

  <div class="col-12">
    <?php 
					get_template_part('template-parts/module/search', null, [
						'value_search'	=>	false,
						'placeholder'		=>	'Быстрый поиск породы',
						'name_search'		=>	'animals_name',
						'value_search'  =>	$args['animals_name']
			]); ?>
    <div class="animals-search-hint">
      Более <?php if($type == 'porodi-sobak' ){?>
      400 пород собак с
      <?php }
			else if($type == 'porodi-koshki'){?>
      60 пород кошек c
      <?php } else{ ?>
      500 пород c
      <?php }?> подробным описанием и характеристиками
    </div>

  </div>


  <?php foreach($arr_acf as $item){?>

  <?php
	if($type == 'porodi-sobak' || ( $type == 'porodi-koshki' && $item != 'naznachenie'  && $item != 'soderzhanie') ){ ?>
  <div class="<?php echo $type == 'porodi-koshki' ? 'col-6 col-xs-12': 'col-3 col-xs-12'; ?>">
    <?php 
					get_template_part('template-parts/module/list_select_acf', null, [
						'slug_acf'	=>	$item,
			]); ?>
  </div>
  <?php }?>


  <?php }?>


</form>