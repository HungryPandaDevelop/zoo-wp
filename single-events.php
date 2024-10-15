<?php get_header(); ?>




<div class="stub"></div>

<div class="content">

  <div class="main-full">
    <?php 
			$terms = wp_get_object_terms($post->ID, 'eventscat')[0];
		?>
    <div class="breadcrumbs">

      <a href="/">Главная</a><span>></span>

      <a href="/<?php echo $terms->slug; ?>"><?php echo $terms->name; ?></a><span>></span>

      <span><?php the_title(); ?></span>

    </div>
  </div>

  <div class="main-full">
    <h1><?php the_title();?></h1>
  </div>



  <?php get_template_part('template-parts/detail/roof_animals', false, [
					'slug' =>  'events'
				]); ?>

  <div class="main-grid animals-main">
    <div class="col-9 col-lg-8 col-xs-12">
      <?php get_template_part('/template-parts/animals/animals-thumb'); ?>

      <div class="animals-param-mobile">

        <?php 
					if($terms->slug == 'porodi-sobak' ){ 
						get_template_part('/template-parts/animals/animals-param'); 
					} else if($terms->slug == 'porodi-koshki'){
						get_template_part('/template-parts/animals/animals-param-cat'); 
					};
				?>


      </div>

      <div class="animals-desription">
        <div class="point-1"></div>
        <?php  echo get_field('pervyj_abzac');?>
        <?php get_template_part('template-parts/home/ads', false, [
					'location' =>  'detail_animal',
          'name'  => get_the_title()
				]); ?>
        <div class="point-2"></div>
        <?php echo get_field('pervyj_abzac_second');?>
        <a href="/pitomniki"
          class="banner-animals banner-animals-<?php echo $terms->slug == 'porodi-sobak' ? 'dog' : 'cat'; ?> ">
          <?php if($terms->slug == 'porodi-sobak'){?>
          <img class="banner-animals-desk"
            src="<?php echo get_bloginfo('template_url');?>/images/banner/Pitomniki-sobak-site-Zoonika.jpg" alt="">
          <img class="banner-animals-mobile"
            src="<?php echo get_bloginfo('template_url');?>/images/banner/Pitomniki-sobak-site-Zoonika-mob.jpg" alt="">
          <?php }else{?>
          <img class="banner-animals-desk"
            src="<?php echo get_bloginfo('template_url');?>/images/banner/Pitomniki-koshek-site-Zoonika.jpg" alt="">
          <img class="banner-animals-mobile"
            src="<?php echo get_bloginfo('template_url');?>/images/banner/Pitomniki-koshek-site-Zoonika-mob.jpg" alt="">
          <?php }?>
        </a>
        <?php get_template_part('/template-parts/animals/animals-parts', null, [
					'type'	=>	$terms->slug == 'porodi-sobak' ? 'dog' : 'cat'
				]); ?>


        <?php if($terms->slug == 'porodi-sobak' ){?>
        <?php get_template_part('/template-parts/animals/animals-speciality'); ?>
        <?php }
			else if($terms->slug == 'porodi-koshki'){?>
        <?php get_template_part('/template-parts/animals/animals-speciality-cat'); ?>
        <?php }  ?>

        <div class="point-4"></div>
        <?php echo get_field('vtoroj_blok_teksta'); ?>
      
        <?php get_template_part('template-parts/home/pitomniki', false, [
					'location' =>  'detail_animal',
          'name'  => get_the_title()
				]); ?>
        
        <div class="fact-hint">
          <h3><?php echo get_field('interesnyj_fakt_1')['title'];?></h3>
          <?php echo get_field('interesnyj_fakt_1')['content'];?>
        </div>

        <div class="point-5"></div>
        <?php echo get_field('tretij_blok_teksta');?>
        <div class="fact-hint">
          <h3><?php echo get_field('interesnyj_fakt_2')['title'];?></h3>
          <?php echo get_field('interesnyj_fakt_2')['content'];?>
        </div>
        <div class="point-6"></div>
        <?php echo get_field('chetvertyj_blok_teksta');?>


        <div class="fact-hint">
          <h3><?php echo get_field('interesnyj_fakt_3')['title'];?></h3>
          <?php echo get_field('interesnyj_fakt_3')['content'];?>
        </div>
        <div class="point-7"></div>
        <?php echo get_field('pyatyj_blok_teksta');?>
        <div class="point-8"></div>
        <?php echo get_field('shestoy_blok_teksta');?>

      </div>




    </div>

    <div class="col-3 col-lg-4 col-xs-12 animals-sidebar">

      <div class="animals-param-desk">
        <?php if($terms->slug == 'porodi-sobak' ){?>
        <?php get_template_part('/template-parts/animals/animals-param'); ?>
        <?php }
			else if($terms->slug == 'porodi-koshki'){?>
        <?php get_template_part('/template-parts/animals/animals-param-cat'); ?>
        <?php }  ?>
      </div>

      <div class="sticky-sidebar">

        <?php get_template_part('/template-parts/animals/animals-nav'); ?>
        <?php 
					get_template_part('/template-parts/animals/animals-social', null,[
						'term'  =>  $terms->slug
					]); 
				?>
      </div>


    </div>


  </div>






  <?php 
		comments_template();

	?>

</div>

<div class="section-stub"></div>

<?php get_footer(); ?>