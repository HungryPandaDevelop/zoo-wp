<?php
 
	$arrParam = [
    ['razmer','razmer-koshka','checkbox'],
    ['stoimost_kotenka','stoimost','long'],
    ['dlitelnost_zhizni_koshka','dlitelnost-zhizni-koshka','long'],
    ['potomstvo_koshka','potomstvo-koshka','long'],
    ['linka','linka','name_n'],
    ['strana','strana','checkbox'],
    ['rost_v_holke','rost','group-1'],
    ['ves','ves','group-2'],
    // ['naznachenie','naznachenie','list'],
    // ['soderzhanie','soderzhanie-blue','list'],
];

?>

<div class="animals-param-container">
  <?php foreach($arrParam as $item){?>
  <?php get_template_part('/template-parts/animals/animals-param-item', null,[
					'field'  => $item[0],
					'ico'  => $item[1],
					'type'  => $item[2],
				]); ?>
  <?php }?>
</div>