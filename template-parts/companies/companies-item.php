<?php
  $thumbnail_obj = get_field('photos_company'); 
  $thumbnail_obj = json_decode($thumbnail_obj); 

  $thumbnail_url = $thumbnail_obj[0]->url ? $thumbnail_obj[0]->url : get_bloginfo('template_url').'/images/stub-pets.jpg';

  $thumbnail_stub = $thumbnail_obj ? '' : 'stub-thumb';

  $specialization = get_field('specialization');
  $specialization_string = [];
  if($specialization){
    $specialization = json_decode($specialization);
  
    foreach($specialization as $el){
      $specialization_string[] =  $el->name;
      // print_r($el);
    }
    // print_r($specialization_string);
    if(count($specialization_string) > 0){
      $specialization_string = implode(', ', $specialization_string);
    }else{
      $specialization_string = '';
    }
    
  }
?>
<div class="animals-item">
  <div class="sales-date-item">На сайте с: <?php echo get_the_date(); ?></div>
  <a class="animals-item-img <?php echo $thumbnail_stub; ?>" href="<?php the_permalink(); ?>">
    <div class="img-cover">
      <img src="<?php echo $thumbnail_url; ?>" alt="">
    </div>
  </a>
  <div class="animals-item-info">
    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <?php if($specialization){ ?>
    <div class="animals-item-specialization">Специализация: <?php echo $specialization_string; ?></div>
    <?php } ?>
  </div>

</div>