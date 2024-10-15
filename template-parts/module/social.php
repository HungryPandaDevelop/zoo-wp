<div class="social-default">
  <div class="social">
    <?php
		
		// $colorSocial = $args['color'];
		$color_social = '--white';

		$arr_social = [
			['vk','vk'.$color_social.'.svg'],
			['instagram','instagram'.$color_social.'.svg'],
			['tw','twitter'.$color_social.'.svg'],
			['facebook','facebook'.$color_social.'.svg'],
			['youtube','youtube'.$color_social.'.svg'],
			['telegram','telegram'.$color_social.'.svg'],
			['google','google'.$color_social.'.svg']
		];

		foreach($arr_social as $item_social){
			if($GLOBALS['crbAll'][$item_social[0]]){?>
    <a class="social-ico<?echo $color_social;?>" href="<? echo $GLOBALS['crbAll'][$item_social[0]]; ?>">
      <img src="<? echo get_theme_file_uri('/images/social/'.$item_social[0].'-black.svg'); ?>" alt="" />
      <img class="ico-hover" src="<? echo get_theme_file_uri('/images/social/'.$item_social[0].'-white.svg'); ?>"
        alt="" />
    </a>
    <?}
					}?>
  </div>
</div>