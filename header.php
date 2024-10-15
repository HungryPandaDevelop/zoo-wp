<!DOCTYPE html>
<html>
<!-- head start-->

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <? wp_head(); ?>

  <?php 
  $count_post_ads = get_query_var('count_post_ads');

  ?>


  <?php 
    
    $term_id = get_the_terms(get_the_ID(),'companies_category');
    $custom_post_name = get_post_type();
    echo $GLOBALS['crbAll']['metrika']; 

    // Получаем значение поля ACF Keywords для текущей страницы типа 'events'
    $keywords = get_field('keywords') ? get_field('keywords') : get_field('keywords_seo');
    $description = get_field('discription') ? get_field('discription') : get_field('description_seo'); 
    $title =  get_field('title') ? get_field('title') : get_field('title_seo');

  
    if($term_id && ($term_id[0]->term_id === 53 || $term_id[0]->term_id === 54)){
   
      get_template_part('template-parts/seo/companies'); 
    }else if ($custom_post_name == 'sales'){
//  echo '<h1>2132</h1>';
      get_template_part('template-parts/seo/sales'); 

    }else{
      if($keywords){ echo '<meta name="keywords" content="'.$keywords.'">'; }

      if($description){ 
        $description = str_replace("#ads_count",$count_post_ads,$description);;
    
        echo '<meta name="description" content="'.$description.'">'; 
        echo '<meta property="og:description" content="'.$description.'">'; 
      }
      if($title){ 

        if($count_post_ads){
          $title = str_replace("#ads_count",$count_post_ads,$title);;
        }

        echo '<title>'.$title.'</title>';  
        echo '<meta property="og:title" content="'.$title.'">'; 
      }

  
      $image_id = get_post_thumbnail_id();
      $image_url = wp_get_attachment_image_src( $image_id, 'medium' ); 
     
      if ( $image_url ) { ?>
  <meta property="og:image" content="<?php echo $image_url[0]; // URL-адрес миниатюры ?>">
  <?php  };
    }

  ?>

  <meta property="og:type" content="article">




  <meta property="og:image:width" content="300">
  <meta property="og:image:height" content="300">
  <meta property="og:url" content="<?php echo home_url();?>">


</head>
<!-- head end-->

<body>
  <?php get_template_part('template-parts/popup/nav'); ?>
  <?php get_template_part('template-parts/popup/feedback'); ?>
  <?php get_template_part('template-parts/popup/order-pets'); ?>
  <?php get_template_part('template-parts/popup/order-sales'); ?>
  <?php get_template_part('template-parts/popup/preloader'); ?>
  <?php get_template_part('template-parts/popup/warning'); ?>
  <?php get_template_part('head'); ?>