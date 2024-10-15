import { checkAnimal } from '/src/components/forms/companies/checkAnimal';

export const createSeoCompanies = (data) => {

  let seoData = {};
  const animalsType = checkAnimal(data.specialization);

  const { title, specialization } = data;
  let specializationArr;
  let specializationArrDog;
  let specializationArrCat;

  if (specialization) {
    specializationArr = specialization.map(item => item.name).join(', ');

    specializationArrDog = specialization.filter((item) => item.parody === 'porodi-sobak')
      .map((item) => item.name)
      .join(', ');

    specializationArrCat = specialization.filter((item) => item.parody === 'porodi-koshki')
      .map((item) => item.name)
      .join(', ');
  }

  let seoCompaniesDog = {
    keywords_seo: `купить продажа взять породистого щенка ${specializationArr} из питомника собак ${title}`,
    title_seo: `Выбери своего щенка породы ${specializationArr} премиум-класса прямо из профессионального питомника на сайте о собаках Зооника`,
    description_seo: `Купить породистого щенка породы ${specializationArr} в питомнике ${title} по привлекательной цене. Бронь будущих пометов. Продажа и профессиональное разведение чемпионов.`,
  };
  let seoCompaniesCat = {
    keywords_seo: `купить продажа взять породистого щенка ${specializationArr} из питомника собак ${title}`,
    title_seo: `Выбери своего щенка породы ${specializationArr} премиум-класса прямо из профессионального питомника на сайте о собаках Зооника`,
    description_seo: `Купить породистого щенка породы ${specializationArr} в питомнике ${title} по привлекательной цене. Бронь будущих пометов. Продажа и профессиональное разведение чемпионов.`,
  };
  let seoCompaniesDogCat = {
    keywords_seo: `купить продажа взять породистого котенка ${specializationArrCat} или щенка ${specializationArrDog} из питомника кошек ${title}`,
    title_seo: `Выбери своего котенка породы ${specializationArrCat} или щенка породы ${specializationArrDog} премиум-класса прямо из профессионального питомника на сайте о кошках Зооника`,
    description_seo: `Купить породистого котенка породы ${specializationArrCat} или щенка породы ${specializationArrDog} в питомнике ${title} по привлекательной цене. Бронь будущих пометов. Продажа и профессиональное разведение чемпионов.`,
  };

  let seoCompaniesNo = {
    keywords_seo: `купить продажа взять породистого котенка или щенка  из питомника кошек ${title}`,
    title_seo: `Выбери своего котенка  или щенка  премиум-класса прямо из профессионального питомника на сайте о кошках Зооника`,
    description_seo: `Купить породистого котенка или щенка  в питомнике ${title} по привлекательной цене. Бронь будущих пометов. Продажа и профессиональное разведение чемпионов.`,
  };


  switch (animalsType) {
    case 'dog':
      seoData = seoCompaniesDog;
      break;
    case 'cat':
      seoData = seoCompaniesCat;
      break;
    case 'dog-cat':
      seoData = seoCompaniesDogCat;
      break;
    default:
      seoData = seoCompaniesNo;
      break;
  }

  console.log('se 1', seoData)

  return seoData;

}


