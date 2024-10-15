<form class="main-grid">
  <div class="col-6 col-lg-5 col-md-4 col-xs-5">
    <!--  search-choises -->
    <!-- <div class="search-select search-select-animals">
      <div class="search-field-container">
        <em class="close-btn"></em>
        <div class="preloader-container">
          <div class="preloader"></div>
        </div>
        <input class="search-input input-decorate animals-input-ajax" type="text" placeholder="Все" name="animal"
          value="<?php echo $_GET['animal']; ?>">
      </div>
      <ul class="ln"></ul>
    </div> -->

    <?php get_template_part('template-parts/module/new-search',null,[
    'placeholder' =>  'Все',
    'name'  =>  'animal',
    'lite'  =>  true
  ]); ?>
  </div>
  <div class="col-4  col-md-4">
    <label>Тип объявления</label>
    <select class="style-select" name="target">
      <option value="">Все</option>
      <option value="sale" <?php if($_GET['target']=='sale'){?>selected<?}; ?>>Продажа</option>
      <option value="anons" <?php if($_GET['target']=='anons'){?>selected<?}; ?>>Ананос помета</option>
      <option value="knit" <?php if($_GET['target']=='knit'){?>selected<?}; ?>>Вязка</option>
      <option value="gift" <?php if($_GET['target']=='gift'){?>selected<?}; ?>>В дар</option>
    </select>
  </div>
  <div class="col-2 col-lg-3 col-md-4 col-xs-3">
    <div class="btn-container-sales-catalog">
      <input type="submit" value="Поиск" class="btn btn--blue">
    </div>
  </div>




</form>