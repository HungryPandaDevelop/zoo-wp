<?php

$tituly = $args['tituly'];
$post_content = $args['post_content'];
$dressirovka_string = $args['dressirovka_string'];

?>

<?php if($post_content || $post_content || $dressirovka_string){ ?>
<div class="pets-tabs-container">
  <div class="pets-tabs-head">
    <?php if($post_content){ ?><span>Описание</span><?php }; ?>
    <?php if($tituly){ ?><span>Титулы</span><?php }; ?>
    <?php if($dressirovka_string){ ?><span>Дрессировка</span><?php }; ?>
  </div>
  <div class="pets-tabs-body">
    <?php if($post_content){ ?>
    <div class="pets-tabs-item">
      <?php echo $post_content; ?>
    </div>
    <?php }; ?>
    <?php if($tituly){ ?>
    <div class="pets-tabs-item">
      <?php if($tituly){?>
      <div class="pets-description-line">
        <?php echo $tituly; ?>
      </div>
      <?php }?>
    </div>
    <?php }; ?>
    <?php if($dressirovka_string){ ?>
    <div class="pets-tabs-item">
      <?php if($dressirovka_string){ ?>
      <div class="pets-hidden-box-container">
        <?php echo $dressirovka_string; ?>
      </div>
      <?php } ?>
    </div>
    <?php }; ?>
  </div>
</div>
<?php } ?>