<?php
	$id = $args['id'];
	$thumbnail_url = get_field('foto_roditelya', $id); 
	$thumbnail_url = json_decode($thumbnail_url); 

	$count;

  $link = json_decode( get_field('fotografia_pitomca', $id) );

  $poroda = json_decode( get_field('animal', $id) ); 

  $plemennoj = get_field('plemennoj_osmotre', $id); 

  $dressirovka_string = null;
  $a = get_field('rossijskie_vidy_sluzhb', $id);
  $b = get_field('sportivnoe_napravlenie', $id);
  $c = get_field('socialnye_vidy_sluzhb', $id);
  $d = get_field('sportivnye_vidy_dressirovki', $id);

  if($a || $b || $c || $d ){
    $a = $a ? json_decode($a) : [];
    $b = $b ? json_decode($b) : [];
    $c = $c ? json_decode($c) : [];
    $d = $d ? json_decode($d) : [];

    $dressirovka = [ ...$a, ...$b, ...$c, ...$d];

    foreach($dressirovka as $el){
      $dressirovka_string = $dressirovka_string.$el.', ';
    }

    $dressirovka_string = substr($dressirovka_string, 0, -2);
  }

  $gender = get_field('genderPets', $id);
  if($gender){
    $gender = json_decode($gender);
  }

?>




<div class="pets-item">

  <ul class="ln pets-type">

    <li>
      <b><?php if($gender->value == 'boy'){ echo 'Папа';}else{echo 'Мама';}  ?>:</b>
      <span><?php echo get_the_title($id); ?></span>
    </li>

  </ul>
  <div class="pets-item-top">
    <?php
  if($thumbnail_url){ ?>
    <div class="pets-item-img pets-single-img">
      <a data-src="<?php echo $thumbnail_url[0]->url;?>" href="<?php echo $thumbnail_url[0]->url;?>"
        data-lightbox="parents_photo_<?php echo $gender->value; ?>">
        <div class="img-cover">
          <img src="<?php echo $thumbnail_url[0]->url;?>" alt="" />
        </div>
      </a>
      <?php 
$count = 0;

foreach($thumbnail_url as $photo){ 

if($count>0){ ?>
      <a data-lightbox="parents_photo_<?php echo $gender->value; ?>" data-src="<?php echo $photo->url;?>"
        href="<?php echo $photo->url;?>"></a>
      <?php
      }  
$count++; }
?>
    </div>
    <?php }else{ ?>

    <div class="pets-item-img pets-stub-img" href="#">
      <div class="img-cover">
        <img src="<?php echo get_bloginfo('template_url').'/images/stub-pets.jpg' ?>" alt="">
      </div>
    </div>
    <?php } ?>
    <div class="pets-single-top-info">
      <?php
    $birth = get_field('birth', $id);
    $tituly =  get_field('tituly', $id);
?>

      <div class="pets-item-info">

        <ul class="ln">
          <?php if($birth){ if($birth !=='empty'){ ?> <li><span>Дата рождения:</span> <b><?php echo $birth; ?></b></li>
          <?php }}?>

          <?php if($link[0]){?> <li><span>Родословная:</span> <a href="<?php echo $link[0]->url; ?>"
              target="_blank">Ссылка</a></li><?php } ?>
          <?php if($poroda){?>
          <li>
            <span>Порода:</span>
            <b><?php echo $poroda->race->name; ?></b>
          </li>
          <?php } ?>
        </ul>
        <a href="#" class="btn btn--blue long-btn element-btn order-pets-btn" data-element="3"
          data-id="<?php echo get_the_id(); ?>">
          Бронь будущего помета
          <?php if($poroda->animals == 'porodi-koshki'){ echo 'котёнка';}else if($poroda->animals == 'porodi-sobak'){echo 'щенка';}  ?>
        </a>
      </div>
    </div>

    <div class="pets-item-main-info">
      <?php if(get_post_field('post_content', $id)){?>
      <h3>Описание:</h3>
      <div class="pets-description-line">
        <?php echo get_post_field('post_content', $id); ?>
      </div>
      <?php }?>
      <?php if($tituly){?>
      <h3>Титулы:</h3>
      <div class="pets-description-line">
        <?php echo $tituly; ?>
      </div>
      <?php }?>

      <?php if($dressirovka_string){ ?>
      <h3>Дрессировка:</h3>
      <div class="pets-hidden-box-container">
        <?php echo $dressirovka_string; ?>
      </div>
      <?php } ?>
    </div>

    <?php get_template_part('/template-parts/pets/pets-tabs', false, [
					'post_content' =>  get_post_field('post_content', $id),
					'tituly' =>  $tituly,
					'dressirovka_string' =>  $dressirovka_string,
				]); ?>


    <?php /* <div class="btn-container">
      <a href="#" class="btn btn--blue long-btn element-btn order-pets-btn" data-element="3"
        data-id="<?php echo get_the_id(); ?>">
    Бронь будущего помета
    <?php if($poroda->animals == 'porodi-koshki'){ echo 'котёнка';}else if($poroda->animals == 'porodi-sobak'){echo 'щенка';}  ?>
    </a>
  </div> */ ?>
</div>



</div>