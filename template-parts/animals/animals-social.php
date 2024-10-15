<?php 
  $term = $args['term'];
  $img;
  $cat_class;

  if($term  == 'porodi-sobak' ){
    $img = get_bloginfo('template_url').'/images/social-dog.svg'; 
  }else if($term  == 'porodi-koshki' ){
    $img = get_bloginfo('template_url').'/images/social-cat.svg';
    $cat_class = 'cat-social-img';
  };  

?>


<div class="animals-social">
  <div class="animals-social-container">
    <img class="animals-social-img <?php echo $cat_class; ?>" src="<?php echo $img;?>" alt="">
    <div class="animals-social-icons">
      <span>Хочу репостики</span>
      <?php
          if ( function_exists( 'ADDTOANY_SHARE_SAVE_KIT' ) ) {
            ADDTOANY_SHARE_SAVE_KIT();
          }
        ?>
    </div>
  </div>
</div>