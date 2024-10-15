<section class="contacts-home">
  <? if(!is_page('contacts')){?>
  <div class="main-full head-section">
    <h2>Контакты</h2>
  </div>
  <?} ?>
  <?php get_template_part('template-parts/detail/contacts'); ?>
</section>