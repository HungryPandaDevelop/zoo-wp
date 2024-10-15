<?php
 
	$arrParam = [
    ['razmer','razmer-dog','checkbox'],
    ['stoimost_shhenka','stoimost','long'],
    ['dlitelnost_zhizni','dlitelnost-zhizni-dog','long'],
    ['potomstvo','sobaka-potomstvo','long'],
    ['linka','linka','name'],
    ['strana','strana','checkbox'],
    ['rost_v_holke','rost','group-1'],
    ['ves','ves','group-2'],
    ['naznachenie','naznachenie','list'],
    ['soderzhanie','soderzhanie','list'],
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