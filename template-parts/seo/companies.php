<!-- <h1>SEO TEST</h1> -->
<?php
function checkAnimals($array) {
    $hasDog = false;
    $hasCat = false;

    if (!$array || count($array) === 0) {
        return 'none';
    }

    foreach ($array as $item) {
        if (!$item) {
            return 'none';
        }
        if ($item->parody === 'porodi-sobak') {
            $hasDog = true;
        } else if ($item->parody === 'porodi-koshki') {
            $hasCat = true;
        }
    }

    if ($hasDog && $hasCat) {
        return 'dog-cat';
    } else if ($hasDog) {
        return 'dog';
    } else if ($hasCat) {
        return 'cat';
    } else {
        return 'none';
    }
}



$specialization =  $GLOBALS['seoAll']['specialization'];

$title =  $GLOBALS['seoAll']['title'];

 $main_img =  $GLOBALS['seoAll']['main_img'];
  if($main_img){
    $main_img = json_decode($main_img); 
    $main_img = $main_img[0]->url; 
  }
if($specialization){
$specializationArrDog = [];
$specializationArrCat = [];

foreach($specialization as $item){

  if($item->parody == 'porodi-sobak'){
    $specializationArrDog[] = $item->name;
  }
}
foreach($specialization as $item){

  if($item->parody == 'porodi-koshki'){
    $specializationArrCat[] = $item->name;
  }
}


$specializationArrDog = implode(", ", $specializationArrDog);
$specializationArrCat = implode(", ", $specializationArrCat);

}


$seoData;

// Define the SEO arrays
$seoCompaniesDog = [
    "keywords_seo" => "купить продажа взять породистого щенка {$specializationArrDog} из питомника собак {$title}",
    "title_seo" => "Выбери своего щенка породы {$specializationArrDog} премиум-класса прямо из профессионального питомника на сайте о собаках Зооника",
    "description_seo" => "Купить породистого щенка породы {$specializationArrDog} в питомнике {$title} по привлекательной цене. Бронь будущих пометов. Продажа и профессиональное разведение чемпионов."
];

$seoCompaniesCat = [
    "keywords_seo" => "купить продажа взять породистого котенка {$specializationArrCat} из питомника кошек {$title}",
    "title_seo" => "Выбери своего котенка породы {$specializationArrCat} премиум-класса прямо из профессионального питомника на сайте о кошках Зооника",
    "description_seo" => "Купить породистого котенка породы {$specializationArrCat} в питомнике {$title} по привлекательной цене. Бронь будущих пометов. Продажа и профессиональное разведение чемпионов."
];

$seoCompaniesDogCat = [
    "keywords_seo" => "купить продажа взять породистого котенка {$specializationArrCat} или щенка {$specializationArrDog} из питомника {$title}",
    "title_seo" => "Выбери своего котенка породы {$specializationArrCat} или щенка породы {$specializationArrDog} премиум-класса прямо из профессионального питомника на сайте о кошках Зооника",
    "description_seo" => "Купить породистого котенка породы {$specializationArrCat} или щенка породы {$specializationArrDog} в питомнике {$title} по привлекательной цене. Бронь будущих пометов. Продажа и профессиональное разведение чемпионов."
];

$seoCompaniesNo = [
    "keywords_seo" => "купить продажа взять породистого котенка или щенка из питомника {$title}",
    "title_seo" => "Выбери своего котенка или щенка премиум-класса прямо из профессионального питомника на сайте о кошках Зооника",
    "description_seo" => "Купить породистого котенка или щенка в питомнике {$title} по привлекательной цене. Бронь будущих пометов. Продажа и профессиональное разведение чемпионов."
];
// echo '<h1>test</h1>';

// print_r(checkAnimals($specialization));

switch (checkAnimals($specialization)) {
  case 'dog':
      $seoData = $seoCompaniesDog;
      break;
  case 'cat':
      $seoData = $seoCompaniesCat;
      break;
  case 'dog-cat':
      $seoData = $seoCompaniesDogCat;
      break;
  default:
      $seoData = $seoCompaniesNo;
      break;
}
// 
// 

echo '<meta name="description" content="'.$seoData['description_seo'].'">'; 
echo '<meta property="og:description" content="'.$seoData['description_seo'].'">'; 

echo '<title>'.$seoData['title_seo'].'</title>';  
echo '<meta property="og:title" content="'.$seoData['title_seo'].'">'; 

echo '<meta name="keywords" content="'.$seoData['keywords_seo'].'">';
echo '<meta property="og:image" content="'.$main_img.'">';

?>