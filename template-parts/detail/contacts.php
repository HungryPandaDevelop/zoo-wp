  <div class="main-grid contacts-info">
    <div class="contacts-item col-3 col-xs-12">
      <h3>
        <div class="marker-ico contacts-ico"></div><span>Aдрес</span>
      </h3>
      <div class="contacts-item-body"><?php echo $GLOBALS['crbAll']['address']; ?></div>
    </div>
    <div class="contacts-item col-3 col-xs-12">
      <h3>
        <div class="time-ico contacts-ico"></div><b>Режим работы:</b>
      </h3>
      <div class="contacts-item-body">
        <?php
          foreach ($GLOBALS['crbAll']['times'] as $phone) { ?>
        <div><?php echo $phone['text']; ?> </div>
        <?php } ?>
      </div>
    </div>
    <div class="contacts-item col-3 col-xs-12">
      <h3>
        <div class="phone-ico contacts-ico"></div><b>Телефоны:</b>
      </h3>
      <div class="contacts-item-body">
        <?php
          foreach ($GLOBALS['crbAll']['phones'] as $phone) {
              ?>
        <div>
          <a href="tel:<?php echo $phone['link']; ?>">
            <i></i><span>
              <?php echo $phone['title']; ?>
            </span>
          </a>
        </div>
        <?php } ?>
      </div>
    </div>
    <div class="contacts-item col-3 col-xs-12">
      <h3>
        <div class="mail-ico contacts-ico"></div><b>Почта:</b>
      </h3>
      <div class="contacts-item-body">
        <a href="mailto:<?php echo $GLOBALS['crbAll']['mail']; ?>">
          <i></i><span>
            <? echo $GLOBALS['crbAll']['mail']; ?>
          </span>
        </a>
      </div>
    </div>
  </div>
<?php if($GLOBALS['crbAll']['map_coords']){ ?> 
  <div class="main-full map">
    <div class="address-for-map">
      <div class="contacts-address-line" data-coords="<?php echo $GLOBALS['crbAll']['map_coords']; ?>"
        data-phone="<? echo $GLOBALS['crbAll']['phones'][0]['title']; ?>"
        data-address="<?php echo $GLOBALS['crbAll']['address']; ?>"></div>

    </div>
    <div class="map">
      <div id="map" data-marker="<?php echo get_bloginfo('template_url');?>/images/icons/marker-black.svg"></div>
    </div>
  </div>
  <?php }?>