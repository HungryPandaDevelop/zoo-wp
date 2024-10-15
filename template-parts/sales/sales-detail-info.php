<?php

$id_company = $args['id_company'];


$my_post = get_post(); // $id - Post ID
$user_post_id =  $my_post->post_author; 
$user_info = get_userdata($user_post_id);

// $author_id = get_post_field('post_author', get_the_ID());
// $user_name = get_the_author_meta('display_name', $author_id);
// $author_url = get_author_posts_url($author_id);



$first_name = $user_info->first_name;
$last_name = $user_info->last_name;
$extra_name = $user_info->extra_name;

$persone_phone = $user_info->phone;
$address;

if($id_company == 'person'){
  $address = json_decode( $user_info->address );
}else{
  $address = json_decode( get_field('address', $id_company) );
}

$phone = get_field('phone_company', $id_company);

$email = get_field('email_company', $id_company);
$nickname = get_field('nickname');

$rodoslovnaya = get_field('rodoslovnaya');

if(!$email){
$my_post = get_post( ); // $id - Post ID
  $user_post_id =  $my_post->post_author; 
  $email = (get_userdata($user_post_id)->data->user_email);
}
$logo = get_field('logo', $id_company);
$logo = json_decode($logo); 

$vk = get_field('vk', $id_company); 
$ok = get_field('ok', $id_company); 
$telegramm = get_field('telegramm', $id_company); 


$specialization_string = $args['specialization'];


$target = get_field('target') ;
if( $target ){ 
  $target = json_decode( $target )->value; 
};

$birth = get_field('birth');
$gender = get_field('gender');
if( $gender ){ 
  $gender = json_decode( $gender ); 
};

$baer = get_field('baer');
$hd = get_field('hd');
$pl = get_field('pl');
$vaccine = get_field('vaccine');
$brand = get_field('brand');
$chipping = get_field('chipping');
$childrens = get_field('childrens');
$month = get_field('month');

$race =  $args['race'];


if( $month ){ 
  $month = json_decode( $month ); 
};



?>


<div class="companies-detail-info">

  <ul class="companies-list-info ln">
    <div class="first-companies-list">
      <?php if($nickname && ($target == 'knit' || $target == 'gift')){?><li><span>Кличка:</span>
        <b><?php echo $nickname; ?></b>
      </li><?php } ?>
      <?php if($birth && ($target == 'sale' || $target == 'knit')){?><li><span>Дата рождения:</span><b>
          <?php echo $birth; ?></b></li>
      <?php } ?>
      <?php
if($rodoslovnaya && $target == 'knit'){
  $rodoslovnaya = json_decode( $rodoslovnaya )[0]->url;
?>
      <li><span>Родослованя:</span> <b><a target="_blank" href="<?php echo $rodoslovnaya; ?>">ссылка</a></b></li>
      <?php } ?>
      <?php if($gender){?><li><span>Пол:</span>
        <b><?php echo $gender->label; ?></b>
      </li><?php } ?>
      <?php if($race){?><li><span>Порода:</span>
        <b>
          <?php 
            // echo $race['race']['name']; 
            echo $race->race->name; 

          ?>
        </b>
      </li><?php } ?>



      <?php if($childrens){?><li><span>Помет:</span> <b><?php echo $childrens; ?></b></li><?php } ?>
      <?php if($month){?><li><span>Выберите месяц ожидаемого помета:</span> <b><?php echo $month[0]; ?></b>
      </li><?php } ?>
    </div>
    <div class="second-companies-list">
      <div class="sales-list-delimetr"></div>

      <?php 

if($id_company == 'person') { 

if($first_name || $last_name || $extra_name){
?>
      <li>
        <span>Частное лицо: </span>
        <b class="company-for-sales">
          <?php  echo $first_name.' '.$last_name.' '.$extra_name; ?>
        </b>
      </li>
      <?php }
if($persone_phone){ ?>
      <li>
        <span>Телефон: </span>
        <b class="company-for-sales">
          <?php  echo $persone_phone; ?>
        </b>
      </li>
      <?php }
 }else{ ?>

      <li>
        <span>Компания: </span>
        <b class="company-for-sales"><a
            href="<?php the_permalink($id_company); ?>"><?php echo get_the_title($id_company);?></a></b>
      </li>

      <?php } ?>

      <?php if($address){?>
      <li>
        <span>Адрес:</span>
        <b><?php echo $address->address; ?></b>
      </li>
      <?php } ?>
      <?php if($phone){?>
      <li>
        <span>Телефон:</span>
        <b><a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a></b>
      </li>
      <?php }?>
      <?php if($email){?>
      <li>
        <span>E-mail:</span>
        <b><a class="mail-for-sales" href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></b>
      </li>
      <?php }?>
      <?php if($specialization_string){ ?>
      <li>
        <span>Специализация:</span>
        <div class="value-cell"><?php get_template_part('template-parts/companies/search-show-breed', null,[
          'breed' =>  $specialization_string
        ]); ?></div>
      </li>
      <? } ?>
      <?php if($vk || $ok || $telegramm){?>
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
      <?php }?>
    </div>
  </ul>


</div>