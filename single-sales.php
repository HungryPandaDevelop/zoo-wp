<?php

  $request_uri = $_SERVER['REQUEST_URI'];

  if (!str_contains( $request_uri, '.html')) {

      $new_url = rtrim($request_uri, '/') . '.html';
      header("Location: $new_url", true, 301);
      exit();
  }


  $id_company = get_field('company');
  $id_company = json_decode($id_company);

  $target = get_field('target') ;
  if( $target ){ 
    $target_full = $target;
    $target = json_decode( $target )->value; 
  }; 

  $race = get_field('animal');
  if( $race ){ 
    $race = json_decode($race);
  }

  $my_post = get_post(); // $id - Post ID
  $user_post_id =  $my_post->post_author; 
  $user_info = get_userdata($user_post_id);

  $address = json_decode( get_field('address', $id_company[0]) );
    // echo get_the_title($id_company[0]);
  if($id_company[0] == 'person'){
    $address = json_decode( $user_info->address );
  }else{
    $address = json_decode( get_field('address', $id_company[0]) );
  }
  // echo '<h1>test0</h1>';
  // print_r($address);  

  $specialization = get_field('specialization', $id_company[0]);
  if(  $specialization ){
  $specialization = json_decode($specialization);

  $specialization_string;
  foreach($specialization as $el){
    $specialization_string = $specialization_string.$el->name.', ';
  }

  $specialization_string = substr($specialization_string, 0, -2);

}

  $imgs = get_field('photos_sale', get_the_ID());



  $GLOBALS['seoAll']['sale_target'] = $target_full;
  $GLOBALS['seoAll']['sale_race'] = $race;
  $GLOBALS['seoAll']['title'] = get_the_title();
  $GLOBALS['seoAll']['address'] = $address;
  $GLOBALS['seoAll']['specialization'] = $specialization_string;
  $GLOBALS['seoAll']['name_company'] = get_the_title($id_company[0]);
  $GLOBALS['seoAll']['main_img'] = $imgs;

  
  ?>

<?php get_header(); ?>


<div class="stub"></div>
<?php

$post_id = get_the_ID(); // ID поста
$user_id = get_post_field('post_author', $post_id);

?>
<div class="content" id="user-id-for-chat" data-userid="<?php echo $user_id?>">

  <div class="main-full">
    <div class="breadcrumbs">
      <?php 
			bcn_display();
		?>
    </div>
  </div>
  <div class="main-full page-head page-head-detail">
    <h1><?php the_title();?></h1>
    <div class="btn-container">
      <a class="btn btn--blue btn-map" href="/ads-map?point=<?php echo get_the_ID(); ?>"><i></i><span>На
          карте</span></a>
    </div>
  </div>



  <?php get_template_part('/template-parts/detail/roof_animals', false, [
					'slug' =>  'events'
				]); ?>

  <div class="main-grid sales-main">
    <div class="col-9 col-lg-8 col-xs-12 sales-main-info">

      <?php get_template_part('/template-parts/sales/sales-thumb', false, [
        'imgs' =>  $imgs
      ]);  ?>

      <div class="sales-info-mobile-one">
        <?php
					get_template_part('/template-parts/sales/sales-detail-info', null,[
						'id_company'  =>  $id_company[0],
            'race'  => $race,
            'specialization'  => $specialization_string,
					]); 
				?>
      </div>


      <h2>Описание:</h2>
      <?php the_content();  ?>
      <?php  get_template_part('/template-parts/sales/sales-nabory');  ?>

      <?php
          $tituly = get_field('tituly');
          if($tituly && $target == 'knit' ){ ?>
      <h3>Титулы:</h3>
      <div><?php echo $tituly; ?></div>
      <?php } ?>
      <?php  get_template_part('/template-parts/sales/sales-dressirovka', null, [
        'target'  => $target
        ]);  ?>


      <div class="sales-info-mobile-two">
        <?php



					get_template_part('/template-parts/sales/sales-detail-info', null,[
						'id_company'  =>  $id_company[0],
            'race'  => $race,
            'specialization'  => $specialization_string,
					]); 
				?>
      </div>


      <?php get_template_part('/template-parts/sales/sales-parents');  ?>





    </div>

    <div class="col-3 col-lg-4 col-xs-12 animals-sidebar">

      <?php 

get_template_part('/template-parts/sales/sales-sidebar', null,[
						'id_company'  =>  $id_company[0],
            'race'  => $race,
            'specialization'  => $specialization_string,
					]); ?>
    </div>


  </div>






  <?php 
		comments_template();

	?>

</div>

<div class="section-stub"></div>

<?php get_footer(); ?>