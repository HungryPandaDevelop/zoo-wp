<?php
$target = $args['target'];
$sportivnye_vidy_dressirovki = get_field('sportivnye_vidy_dressirovki');
$socialnye_vidy_sluzhb = get_field('socialnye_vidy_sluzhb');
$rossijskie_vidy_sluzhb = get_field('rossijskie_vidy_sluzhb');
if($sportivnye_vidy_dressirovki  || $socialnye_vidy_sluzhb || $rossijskie_vidy_sluzhb){ ?>
<h3>Дрессировка:</h3>
<?php
  $all_text = [];

  if($sportivnye_vidy_dressirovki && $target == 'knit' ){ 
    $sportivnye_vidy_dressirovki = json_decode( $sportivnye_vidy_dressirovki ); 
    foreach ($sportivnye_vidy_dressirovki as $item) {
      $all_text[] = $item;
    }

  ?>


<?php } ?>

<?php
  if($socialnye_vidy_sluzhb && $target == 'knit' ){ 
    $socialnye_vidy_sluzhb = json_decode( $socialnye_vidy_sluzhb ); 
      foreach ($socialnye_vidy_sluzhb as $item) {
        $all_text[] = $item;
      }


  ?>

<?php } ?>

<?php
    if($rossijskie_vidy_sluzhb && $target == 'knit' ){ 
      $rossijskie_vidy_sluzhb = json_decode( $rossijskie_vidy_sluzhb ); 
      
        foreach ($rossijskie_vidy_sluzhb as $item) {
          $all_text[] = $item;
        }

  ?>
<?php } ?>

<?php
$all_text =  implode(', ', $all_text);
echo $all_text;?>
<?php }
?>