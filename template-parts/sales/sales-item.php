<?php
  $thumbnail_obj = get_field('photos_sale'); 
  $thumbnail_obj = json_decode($thumbnail_obj); 

  $thumbnail_url = $thumbnail_obj[0]->url ? $thumbnail_obj[0]->url : get_bloginfo('template_url').'/images/stub-pets.jpg';

  $thumbnail_stub = $thumbnail_obj[0]->url ? '' : 'stub-thumb';

  $target = get_field('target') ;
  if($target){   
    $target = json_decode($target);
    $target = $target->value;
  // print_r($target->value);

    switch ($target) {
        case "sale":
            $target_name = 'Продажа';
            break;
        case "anons":
            $target_name = 'Анонс';
            break;
        case "knit":
            $target_name = 'Вязка';
            break;
        case "gift":
            $target_name = 'Подарок';
            break;
        default:
            $target_name = false;
            break;
    }
}
  $price = get_field('price');

  $id_company = $args['id_company'];

  $email = get_field('email_company', $id_company);
  if(!$email){
    $my_post = get_post( ); // $id - Post ID
    $user_post_id =  $my_post->post_author; 
    $email = (get_userdata($user_post_id)->data->user_email);
  }

?>


<div class="sales-item">
  <div class="sales-item-hidden">
    <i class="company-for-sales"><?php echo get_the_title($id_company);?></i>
    <i class="mail-for-sales"><?php echo  $email; ?></i>
  </div>
  <div class="sales-date-item">Опубликовано: <?php echo get_the_date(); ?></div>
  <?php if($target_name){?>
  <div class="sales-item-type <?php echo $target; ?>">
    <?php echo $target_name; ?>
  </div>
  <?php } ?>
  <a class="animals-item-img <?php echo $thumbnail_stub; ?>" href="<?php the_permalink(); ?>">
    <div class="img-cover">
      <img src="<?php echo $thumbnail_url; ?>" alt="">
    </div>
  </a>
  <div class="sales-item-info">
    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
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
  </div>

  <div class="btn-container">
    <div class="btn btn--blue element-btn order-item-sales-btn" data-element="4">Забронировать</div>
  </div>
</div>