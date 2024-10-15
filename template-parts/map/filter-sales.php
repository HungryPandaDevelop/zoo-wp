<?php
  $type_sales = $_GET['type_sales'];
  $race = $_GET['race'];
  $gender = $_GET['gender'];

  $filter_on;
  if($race || $gender){
    $filter_on = 'on';
  }
?>
<form class="map-filter">
  <div class="choise-input-cell">
    <label>Тип животного</label>
    <div class="choise-input-btn-container">
      <div
        class="choise-btn choise-input-btn <?php if($_GET['specialization'] == 'porodi-koshki'){ echo 'active'; }; ?>"
        data-value='porodi-sobak'>Собака</div>
      <div class="choise-btn choise-input-btn" data-value='porodi-koshki'>Кошка</div>
      <input type="hidden" class="choise-input-field choise-input-race" name="race" />
    </div>
  </div>


  <?php get_template_part('template-parts/module/new-search',null,[
    'placeholder' =>  'Все'
  ]); ?>


  <div class="filter-btn-container">
    <a href="#" class="btn btn--blue-border btn-filter element-btn <?php if($filter_on == 'on'){ ?>on<?php } ?>"
      data-element="20">Еще фильтры</a>
    <input type="hidden" class="specialization-input" name="specialization"
      value="<?php echo $_GET['specialization']; ?>">
  </div>

</form>
<?php get_template_part('template-parts/map/filter-sales-popup'); ?>