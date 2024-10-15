<?
$items = new WP_Query(array(
	'posts_per_page'  =>  -1, // вывести все
	'post_type' =>  'production ',
	'order' =>  'ASC', // порядок сортировки
	'tax_query' => array(
		array(
			'taxonomy' => 'production_category', // замените на реальное название вашей таксономии
			'field' => 'slug',
			'terms' => 'asfaltobetonnye-zavody',
		),
	),
  ));



?>

<section>
  <div class="main-full head-section">
    <h1>123 Поставка и запуск асфальтобетонных заводов</h1>
    <p>
      Компания Мерко Руссланд специализируется на строительстве асфальтобетонных заводов и поставке
      высокотехнологического оборудования и транспорта по обеспечению бесперебойного производства асфальта.</p>
    <p>Мы занимаемся поставкой оборудования для производства бетона, растворобетонных и асфальтобетонных смесей,
      осуществляя профессиональную поддержку по производству продукции высокого качества и обеспечению бесперебойной
      работы оборудования, используемого в производственном процессе.</p>
  </div>
  <div class="about-slider-container slider-container">
    <div class="main-full">
      <div class="num-slider">
        <div class="current">
          <ul class="ln num-box"> </ul>
        </div><span>/</span>
        <div class="total">1</div>
      </div>
    </div>
    <div class="about-slider">
      <?
      $counter = 1;
      $total = $items->found_posts;
      $posts_array = $items->posts;
      $first_post_id = $posts_array[0]->ID;
      
    while($items->have_posts()){
      $items->the_post();
      
      ?>
      <? 
      // Получаем текущий ID
      $current_id = get_the_ID();
      
      // Получаем следующий ID
      // $next_post = get_next_post();
      // $next_id = get_next_post()->ID;
      $next_id = $posts_array[$counter]->ID;

        get_template_part('template-parts/module/items/home-about-item',null, array(
          'id' =>  $current_id,
          'next_id' =>  $next_id,
          'count' => $counter,
          'total' => $total,
          'first_id'  => $first_post_id
        )); 

        $counter++;
      ?>
      <?}
    
      // Restore global post data
      wp_reset_postdata();
      ?>
    </div>
  </div>
</section>