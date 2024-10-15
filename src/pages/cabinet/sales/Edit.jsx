import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '/src/pages/cabinet/parts/Sidebar';

import Form from '/src/components/forms/sales/Form';

import { useSelector, useDispatch } from 'react-redux';

import { getPostSingle, updatePost } from '/src/store';



const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentCompany, setCurrentCompany] = useState(null);
  const [raceAnimal, setRaceAnimal] = useState(null);

  const { postSingle, isLoadingPost, errorPost } = useSelector((state) => {
    return state.posts;
  });
  const { userData } = useSelector((state) => {
    return state.users;
  });

  const formData = useSelector((state) => {
    // console.log("salesForm.values", state.form.salesForm)
    return state.form.salesForm;
  });
  // console.log('currentCompany', currentCompany)
  const submitSuccess = async () => {

    let { title, animal, target } = formData.values;

    let targetLabel = target && JSON.parse(target).label;
    let targetValue = target && JSON.parse(target).value;

    let raceName = animal && JSON.parse(animal).race.name;
    console.log(raceName)
    let address_company = currentCompany && currentCompany?.address_company?.address;
    let specialization_company = currentCompany && currentCompany?.specialization_company;
    // console.log('raceAnimal', raceAnimal)
    let dogOrCat = raceAnimal === 'porodi-koshki' ? ['кошек и котят', 'кошках', 'кошки', 'котят', 'кошек'] : ['собак и щенков', 'собаках', 'собаки', 'щенков', 'собаку'];

    let seoSale = {
      keywords_seo: `${raceName} ${targetLabel}  в ${address_company} ${title} купить объявление`,
      title_seo: `${raceName} ${targetLabel} породистых ${dogOrCat[0]} в ${address_company} на сайте о ${dogOrCat[1]} Зооника`,
      description_seo: `${title} - ${targetLabel}  ${dogOrCat[0]} породы ${specialization_company} из питомника в ${address_company}`,
    };


    let seoAnons = {
      keywords_seo: `${targetLabel} ${raceName} в ${address_company} ${title} объявление`,
      title_seo: `${targetLabel} ${dogOrCat[2]} породы ${raceName} в ${address_company} из питомника`,
      description_seo: `${title} - ${targetLabel}  ${dogOrCat[3]}  в ${raceName} в ${address_company}`,
    };

    let seoKnit = {
      keywords_seo: `${raceName} ${targetLabel}  в ${address_company} ${title} объявление`,
      title_seo: `${targetLabel} ${dogOrCat[2]} породы ${raceName} в ${address_company} из питомника`,
      description_seo: `${title} - ${targetLabel} ${dogOrCat[4]} породы ${raceName} в ${address_company}`,
    };

    let seoGift = {
      keywords_seo: ` ${targetLabel} ${raceName}  в ${address_company} ${title} ищет семью дом бесплатно объявление`,
      title_seo: `Отдам ${targetLabel} ${dogOrCat[2]} породы ${raceName} в ${address_company}`,
      description_seo: `${title} - ${targetLabel} ${dogOrCat[4]} ${raceName} в ${address_company} бесплатно`,
    };

    let seoData;

    switch (targetValue) {
      case 'sale':
        seoData = seoSale;
        break;
      case 'anons':
        seoData = seoAnons;
        break;
      case 'knit':
        seoData = seoKnit;
        break;
      case 'gift':
        seoData = seoGift;
        break;
      default:
        seoData = {}; // или другое значение по умолчанию, если необходимо
    }


    let sendData = {
      ...formData.values,
      ...seoData
    };


    dispatch(updatePost(sendData)).then(res => {
      navigate('/cabinet/sales', { replace: true });
    });
  };

  useEffect(() => {
    // setLoadingSingle(true);
    dispatch(getPostSingle({ id: params.id, type: 'sales' }));
  }, []);



  const renderPostForm = () => {

    return <>

      <Form
        param={{ submitSuccess }}
        btnText='Обновить объявление'
        title={`${postSingle.title.rendered}`}
        setCurrentCompany={setCurrentCompany}
        race={raceAnimal}
        setRace={setRaceAnimal}
        initialValues={{
          id: params.id,
          token: userData.token,
          uid: userData.user_id,
          type: 'sales',
          title: postSingle.title.rendered,
          excerpt: postSingle.excerpt.rendered,
          content: postSingle.content.rendered,
          ...postSingle.acf,

        }}
      /></>
  }

  return (
    <div className="main-grid">
      <div className="col-3 col-xs-12">
        <Sidebar />
      </div>
      <div className="col-9 col-xs-12 cabinet-body">
        {(isLoadingPost) ? ('Loading...') : (postSingle && renderPostForm())}


      </div>
    </div>
  )
}

export default Edit;