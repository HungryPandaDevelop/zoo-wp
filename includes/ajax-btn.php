<?php
function ajax_btn($wp_query){ 
// $wp_query->max_num_pages === кол страниц пагинации
?>

<?php if (  $wp_query->max_num_pages > 1 ) { ?>
<script>
let true_posts = '<?php echo serialize($wp_query->query_vars); ?>';
let current_page = <?php echo (get_query_var('paged')) ? get_query_var('paged') : 1; ?>;
let max_pages = '<?php echo $wp_query->max_num_pages; ?>';
let id_post = '<?php get_the_ID() ?>';
</script>




<div class="btn-container-section">
  <div class="btn btn--blue" id="true_loadmore">Показать еще</div>
</div>


<script>
let btnMore = $('#true_loadmore');
btnMore.on('click', function(e) {
  e.preventDefault();
  $(this).text('Показываю...'); // изменяем текст кнопки, вы также можете добавить прелоадер
  var data = {
    'action': 'loadmore',
    'query': true_posts,
    'page': current_page,
    'template': 'template-parts/blog/blog-item',
    'id': id_post,
  };
  $.ajax({
    url: '/wp-admin/admin-ajax.php', // обработчик
    data: data, // данные
    type: 'POST', // тип запроса
    success: function(data) {
      if (data) {
        btnMore.text('Показать ещё');
        $('.ajax-content').append(data);
        // img src
        $('.img-cover').each(function() {
          let imgSrc = $(this).find('img').attr('src');
          //console.log(imgSrc);
          $(this).css('background-image', 'url(' + imgSrc + ')');
        });
        // img src
        current_page++;
        if (current_page == max_pages) {
          btnMore.remove();
        }

      } else {
        btnMore.remove();
      }
    }
  });
});
</script>
<?}?>

<?}?>