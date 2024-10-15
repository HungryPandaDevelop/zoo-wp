<?php

function nav_posts($slug){
  $item = new WP_Query( array(
    'posts_per_page'  => -1,
    'post_type' => $slug,
    'orderby'        => 'date',
    'order' => 'ASC'
  ));


  $total = $item->post_count - 1;

  $counter = 0;
  $currentNum;


  foreach ($item->posts as $post) {
      if (get_the_ID() == $post->ID  ){
          $currentNum = $counter;
      }
    $counter++;
  }
  

    $next_post_id = $currentNum != $total ? $item->posts[$currentNum + 1 ]->ID : $item->posts[0]->ID;
    $prev_post_id = $currentNum != 0 ? $item->posts[$currentNum - 1]->ID : $item->posts[$total]->ID;

    return [$prev_post_id, $next_post_id];
  }