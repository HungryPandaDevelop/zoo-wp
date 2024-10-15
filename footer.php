<!-- footer start -->

<div id="chat-root"></div>
<footer>
  
  <div class="main-grid">
    <div class="col-3 col-sm-6 col-xs-12 logo-container"><a class="logo" href="/"><img
          src="<?php echo get_bloginfo('template_url');?>/images/logo.svg" alt=""></a>


    </div>
    <div class="col-3 hidden-sm hidden-xs">
      <div class="nav">
        <!-- <h3> <a href="#"> Title</a></h3>
        <ul>
          <li> <a href="#"> Link 1</a></li>
          <li> <a href="#"> Link 2</a></li>
          <li> <a href="#"> Link 3</a></li>
        </ul> -->
        <?php footer_menu(); ?>
      </div>
    </div>

    <div class="col-6 col-sm-6 col-xs-12 feedback">
      <?php /* get_template_part('template-parts/footer/feedback');*/ ?>
      <div class="logo-text">
        <?php echo $GLOBALS['crbAll']['copyright'];  ?>
      </div>
      <div>
        <div class="btn btn--blue element-btn" data-element="11">Я нашел ошибку на сайте</div>
      </div>
    </div>
    <div class="col-12">
      <ul class="footer-links">
        <li>© <?php echo date("Y"); ?> Зооника. Все права защищены.</li>
        <li><a href="/pravila-publikacii">Правила публикации отзывов</a></li>
        <li><a href="/privacy-policy">Политика конфиденциальности</a></li>
        <li><a href="/usloviya-ispolzovaniya-zoonika">Условия использования</a></li>
        <li><a target="_blank" href="https://www.style-you.ru/">Создание сайта Style You</a></li>
      </ul>
    </div>
  </div>
</footer>
<? wp_footer(); ?>
<script></script>
<!-- footer end-->
</body>

</html>