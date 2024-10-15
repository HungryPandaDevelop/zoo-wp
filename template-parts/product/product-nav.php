<?
$current_term = get_queried_object();
$current_term_id = $current_term ? $current_term->term_id : 0;

$terms_slug = 'product_category';

$terms = get_terms(array(
  'taxonomy' => $terms_slug,
  'hide_empty' => false, // Показываем даже пустые термины
  'parent' => 0,
));

?>



<div class="sidebar-nav">

  <ul class="ln">
    <?
    foreach ($terms as $term) {
      // Получаем ссылку на термин
      $term_link = get_term_link($term);
      // Определяем, является ли текущий термин активным
      $is_active = ($term->term_id === $current_term_id);

      // Проверяем, есть ли подкатегории у текущей категории
      $subcategories = get_terms(array(
        'taxonomy' => $terms_slug,
        'parent' => $term->term_id,
        'hide_empty' => false,
        // 'exclude_tree'  => 15
      ));
 
    ?>

    <li>
      <a href="<? echo $term_link; ?>" class="<? if($is_active){echo 'active';} ?>">
        <? echo $term->name; ?>
      </a>

      <?
      // Если есть подкатегории, отобразим их
      if (!empty($subcategories)) {

        
        echo '<ul>';
        $current_subcategory = get_queried_object();
        $current_subcategory_id = $current_subcategory ? $current_subcategory->term_id : 0;

        foreach ($subcategories as $subcategory) {
          
          $subterm_link = get_term_link($subcategory);
          $is_subcategory_active = ($subcategory->term_id === $current_subcategory_id);
          echo '<li><a class="' . ($is_subcategory_active ? 'active' : '') . '" href="' . $subterm_link . '">' . $subcategory->name . '</a></li>';
        }
        echo '</ul>';
      }
      ?>
    </li>

    <?}?>
  </ul>
</div>