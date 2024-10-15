<?php

$breed_name = $args['breed'];

if(str_contains($breed_name, ', '))
{
  $breed_names = explode(', ', $breed_name);
}else{
  $breed_names = [$breed_name];
}
?>
<b>
<?php
$post_index = 0;
$count_posts = count($breed_names);

foreach ($breed_names as $name) {
  $post_index++;
  $breed = get_page_by_title($name, OBJECT, 'events');
  $breed_id = $breed->ID;

  ?>
<a href="<?php echo get_the_permalink($breed_id); ?>"><?php echo $name; ?></a><?php if($post_index < $count_posts){ ?>, <?php } ?>
<?php
}
?>

</b>
