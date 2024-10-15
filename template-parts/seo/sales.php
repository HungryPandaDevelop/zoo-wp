<?php
  // echo '<h1>test</h1>';
  $race =  $GLOBALS['seoAll']['sale_race']; // из объявления
  $target =  $GLOBALS['seoAll']['sale_target'];
  $title =  $GLOBALS['seoAll']['title'];
  $address =  $GLOBALS['seoAll']['address'];

  $specialization =  $GLOBALS['seoAll']['specialization']; // из питомнка
  $name_company =  $GLOBALS['seoAll']['name_company']; // из питомнка

  $main_img =  $GLOBALS['seoAll']['main_img'];
  if($main_img){
    $main_img = json_decode($main_img); 
    $main_img = $main_img[0]->url; 
  }

  $address_company;
  if($address){ 
    $address_company = $address->address;
  };


  if( $target ){ 
    $targetLabel = json_decode( $target )->label; 

    $targetValue = json_decode( $target )->value; 
  }; 


// print_r($race->view->value);

  // $raceValue = $race['view']['value'];
  $raceValue = $race->view->value;

  // $raceLabel = $race['race']['name'];
  $raceLabel = $race->race->name;


// echo '<h1>dsfds</h1>';
//  print_r($main_img[0]->url);
//  print_r($targetLabel);
  $dogOrCat;

  if($raceValue == 'porodi-koshki'){
    $dogOrCat = ['кошек и котят', 'кошках', 'кошки', 'котят', 'кошек','кошку'];
  }else{
    $dogOrCat = ['собак и щенков', 'собаках', 'собаки', 'щенков', 'собак', 'собаку'];
  };


  $seoSale = [
      'keywords_seo' => "{$raceLabel} {$targetLabel} в {$address_company} {$title} купить объявление",
      'title_seo' => "{$raceLabel} {$targetLabel} породистых {$dogOrCat[0]} в {$address_company} на сайте о {$dogOrCat[1]} Зооника",
      'description_seo' => "$title - $targetLabel {$dogOrCat[0]} породы {$raceLabel} из питомника {$name_company} в {$address_company}"
  ];

  $seoAnons = [
      'keywords_seo' => "{$targetLabel} {$raceLabel} в {$address_company} {$title} объявление",
      'title_seo' => "{$targetLabel} {$dogOrCat[2]} породы {$raceLabel} в {$address_company} из питомника",
      'description_seo' => "{$title} - {$targetLabel} {$dogOrCat[3]} {$raceLabel} из питомника {$name_company} в {$address_company}"
  ];

  $seoKnit = [
      'keywords_seo' => "{$targetLabel} {$targetLabel} в {$address_company} {$title} объявление",
      'title_seo' => "{$targetLabel} {$dogOrCat[2]} породы {$raceLabel} в {$address_company} из питомника {$name_company}",
      'description_seo' => "{$title} - {$targetLabel} {$dogOrCat[2]} породы {$targetLabel} в {$address_company}"
  ];

  $seoGift = [
      'keywords_seo' => "{$targetLabel} {$raceLabel} в {$address_company} {$title} ищет семью дом бесплатно объявление",
      'title_seo' => "Отдам {$targetLabel} {$dogOrCat[5]} в {$address_company}",
      'description_seo' => "{$title} - {$targetLabel} {$dogOrCat[5]} в {$address_company} бесплатно"
  ];

  $seoData;

  switch ($targetValue) {
      case 'sale':
          $seoData = $seoSale;
          break;
      case 'anons':
          $seoData = $seoAnons;
          break;
      case 'knit':
          $seoData = $seoKnit;
          break;
      case 'gift':
          $seoData = $seoGift;
          break;
      default:
          $seoData = []; // или другое значение по умолчанию, если необходимо
  }


echo '<meta name="description" content="'.$seoData['description_seo'].'">'; 
echo '<meta property="og:description" content="'.$seoData['description_seo'].'">'; 

echo '<title>'.$seoData['title_seo'].'</title>';  
echo '<meta property="og:title" content="'.$seoData['title_seo'].'">'; 

echo '<meta name="keywords" content="'.$seoData['keywords_seo'].'">';


echo '<meta property="og:image" content="'.$main_img.'">';
?>