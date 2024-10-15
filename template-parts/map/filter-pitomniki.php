<form class="map-filter">
  <?php get_template_part('template-parts/module/new-search',null,[
    'placeholder' =>  'Все',
  ]); ?>

  <div>
    <input type="hidden" class="specialization-input" name="specialization" value="<?php echo $_GET['specialization']; ?>">
    <!-- <input type="submit" class="map-filter-tag tag" value="Найти" /> -->
    <!-- <a type="submit" href="/pitomniki-map" class="map-filter-tag tag" >Сбросить</a> -->
  </div>
</form>