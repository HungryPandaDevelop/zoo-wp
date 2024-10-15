<?php

$address = json_decode( get_field('address') );

$phone = get_field('phone_company');
$email = get_field('email_company');


if(!$email){
$my_post = get_post( ); // $id - Post ID
  $user_post_id =  $my_post->post_author; 
  $email = (get_userdata($user_post_id)->data->user_email);
}
$site = get_field('site_company');
// $specialization = get_field('specialization');

$logo = get_field('logo', get_the_ID());
$logo = json_decode($logo); 

$vk = get_field('vk'); 
$ok = get_field('ok'); 
$telegramm = get_field('telegramm'); 


$specialization_string = $args['specialization'];


?>



<div class="companies-detail-info">
  <?php 
  if($logo[0]){?>
  <div class="companies-logo">
    <img src="<?php echo $logo[0]->url; ?>" alt="">
  </div>
  <?php }?>
  <ul class="companies-list-info ln">
    <li>
      <span><?php echo get_term_name_by_id('Питомник','Приют'); ?>: </span>
      <b class="company-for-pets"><?php the_title();?></b>
    </li>
    <?php if($address){?>
    <li>
      <span>Адрес:</span>
      <b><?php echo $address->address; ?></b>
    </li>
    <?php } ?>
    <?php if($site){?>
    <li>
      <span>Сайт:</span>
      <b><a target="_blank" rel="nofollow" href="//<?php echo $site; ?>"><?php echo $site; ?></a></b>
    </li>
    <?php } ?>
    <?php if($phone){?>
    <li>
      <span>Телефон:</span>
      <b><a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a></b>
    </li>
    <?php } ?>
    <?php if($email){?>
    <li>
      <span>E-mail:</span>
      <b><a class="mail-for-pets" href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></b>
    </li>
    <?php } ?>

    <?php
    if($specialization_string){ ?>
    <li>
      <span>Специализация:</span>

      <div class="value-cell"><?php get_template_part('template-parts/companies/search-show-breed', null,[
          'breed' =>  $specialization_string
        ]); ?></div>

    </li>
    <? } ?>


    <?php if($vk || $ok || $telegramm){ ?>
    <li class="social">
      <span>Соц. сети:</span>
      <b>
        <?php if($vk){?>
        <a class="social-ico" href="<?php echo $vk; ?>">
          <img src="<? echo get_theme_file_uri('/images/social/vk-black.svg'); ?>" alt="" />
          <img class="ico-hover" src="<? echo get_theme_file_uri('/images/social/vk-white.svg'); ?>" alt="" />
        </a>
        <?php }?>
        <?php if($ok){?>
        <a class="social-ico" href="<?php echo $ok; ?>">
          <img src="<? echo get_theme_file_uri('/images/social/ok-black.svg'); ?>" alt="" />
          <img class="ico-hover" src="<? echo get_theme_file_uri('/images/social/ok-white.svg'); ?>" alt="" />
        </a>
        <?php }?>
        <?php if($telegramm){?>
        <a class="social-ico" href="<?php echo $telegramm; ?>">
          <img src="<? echo get_theme_file_uri('/images/social/telegram-black.svg'); ?>" alt="" />
          <img class="ico-hover" src="<? echo get_theme_file_uri('/images/social/telegram-white.svg'); ?>" alt="" />
        </a>
        <?php }?>
      </b>
    </li>
    <?php } ?>
  </ul>

</div>