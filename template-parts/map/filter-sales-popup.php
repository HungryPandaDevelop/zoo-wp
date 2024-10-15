<div class="popup element-show" data-element="20">
  <div class="popup-overlay popup-overlay-js"></div>
  <div class="popup-container popup-container-filter auto">
    <form>
      <div class="close-btn close-btn--popup close-js"></div>
      <div class="popup-filter-head">
        <h3>Еще фильтры</h3>
      </div>
      <div class="popup-filter-line">
        <div class="popup-filter-line-topic">Тип объявления</div>
        <div class="popup-filter-line-body">
          <select class="custom-select" name="type_sales">
            <option value="sale" <?php if($type_sales == 'sale'){?> selected <?php } ?>>Продажа</option>
            <option value="gift" <?php if($type_sales == 'gift'){?> selected <?php } ?>>В дар</option>
            <option value="anons" <?php if($type_sales == 'anons'){?> selected <?php } ?>>Анонс</option>
            <option value="knit" <?php if($type_sales == 'knit'){?> selected <?php } ?>>Вязка</option>
          </select>
        </div>
      </div>
      <div class="popup-filter-line">
        <div class="popup-filter-line-topic">Тип животного</div>
        <!-- <div class="popup-filter-line-body">
        <div class="choise-input-btn-container">
          <div class="choise-btn choise-input-btn" data-value='porodi-sobak'>Собака</div>
          <div class="choise-btn choise-input-btn" data-value='porodi-koshki'>Кошка</div>
          <input type="hidden" class="choise-input-field" name="race" />
        </div>
      </div> -->
      </div>
      <div class="popup-filter-line">
        <div class="popup-filter-line-topic">Пол</div>
        <div class="popup-filter-line-body">
          <div class="choise-input-btn-container">
            <div class="choise-btn choise-input-btn" data-value='boy'>Мальчик</div>
            <div class="choise-btn choise-input-btn" data-value='gerl'>Девочка</div>
            <input type="hidden" class="choise-input-field" name="gender" />
          </div>
        </div>
      </div>
      <div class="btn-container">
        <input type="submit" class="btn btn--blue" value="Найти" />
        <a type="submit" href="/pitomniki-map" class="btn btn--blue btn--blue-border">Сбросить</a>
      </div>
  </div>
  </form>
</div>