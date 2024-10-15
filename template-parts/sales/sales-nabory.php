<?php
  $nabory = get_field('dokumenty_pitomca');
  if($nabory){?>
<h3>Документы питомца:</h3>
<?php
  $nabory  = json_decode($nabory);

  foreach($nabory as $item){
    echo '<div class="choise-btn ">'.$item.'</div>';
  }

  } ?>
<?php
  $nabory = get_field('osobennosti_pitomca');
  if($nabory){?>
<h3>Особенности питомца:</h3>
<?php
  $nabory  = json_decode($nabory);

  foreach($nabory as $item){
    echo '<div class="choise-btn ">'.$item.'</div>';
  }

  } ?>
<?php
  $nabory = get_field('navyki_pitomca');
  if($nabory){?>
<h3>Навыки питомца:</h3>
<?php
  $nabory  = json_decode($nabory);

  foreach($nabory as $item){
    echo '<div class="choise-btn ">'.$item.'</div>';
  }

  } ?>