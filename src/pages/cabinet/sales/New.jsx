import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPostSingle, addPost } from '/src/store';

import Sidebar from '/src/pages/cabinet/parts/Sidebar';

import { useDispatch, useSelector } from "react-redux";

import Form from '/src/components/forms/sales/Form';

const New = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentCompany, setCurrentCompany] = useState(null);
  const [raceAnimal, setRaceAnimal] = useState(null);

  useEffect(() => {

    if (params.id) {

      dispatch(getPostSingle({ id: params.id, type: 'sales' }));
    }

  }, []);


  const { userData } = useSelector((state) => {
    return state.users;
  });
  const formData = useSelector((state) => {
    return state.form.salesForm;
  });

  const { postSingle, isLoadingPost, errorPost } = useSelector((state) => {
    return state.posts;
  });


  const submitSuccess = async () => {

    let { title, race, target } = formData.values;
    let targetLabel = target && JSON.parse(target).label;
    let targetValue = target && JSON.parse(target).value;

    let address_company = currentCompany && currentCompany?.address_company?.address;
    let specialization_company = currentCompany && currentCompany?.specialization_company;
    console.log('raceAnimal', raceAnimal)
    let dogOrCat = raceAnimal === 'porodi-koshki' ? ['кошек и котят', 'кошках', 'кошки', 'котят', 'кошек'] : ['собак и щенков', 'собаках', 'собаки', 'щенков', 'собаку'];

    let seoSale = {
      keywords_seo: `${race} ${targetLabel}  в ${address_company} ${title} купить объявление`,
      title_seo: `${race} ${targetLabel} породистых ${dogOrCat[0]} в ${address_company} на сайте о ${dogOrCat[1]} Зооника`,
      description_seo: `${title} - ${targetLabel}  ${dogOrCat[0]} породы ${specialization_company} из питомника в ${address_company}`,
    };


    let seoAnons = {
      keywords_seo: `${targetLabel} ${race} в ${address_company} ${title} объявление`,
      title_seo: `${targetLabel} ${dogOrCat[2]} породы ${race} в ${address_company} из питомника`,
      description_seo: `${title} - ${targetLabel}  ${dogOrCat[3]}  в ${race} в ${address_company}`,
    };

    let seoKnit = {
      keywords_seo: `${race} ${targetLabel}  в ${address_company} ${title} объявление`,
      title_seo: `${targetLabel} ${dogOrCat[2]} породы ${race} в ${address_company} из питомника`,
      description_seo: `${title} - ${targetLabel} ${dogOrCat[4]} породы ${race} в ${address_company}`,
    };

    let seoGift = {
      keywords_seo: ` ${targetLabel} ${race}  в ${address_company} ${title} ищет семью дом бесплатно объявление`,
      title_seo: `Отдам ${targetLabel} ${dogOrCat[2]} породы ${race} в ${address_company}`,
      description_seo: `${title} - ${targetLabel} ${dogOrCat[4]} ${race} в ${address_company} бесплатно`,
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





    dispatch(addPost(sendData)).then(res => {
      navigate('/cabinet/sales', { replace: true });
    });
  };

  const renderPostForm = () => {

    const infoCopySales = params.id ? {
      title: postSingle.title.rendered + ' copy',
      excerpt: postSingle.excerpt.rendered,
      content: postSingle.content.rendered,
      ...postSingle.acf,
    } : {};

    return <>


      <Form
        param={{ submitSuccess, isLoadingPost, formData }}
        title="Новое объявление"
        btnText='Добавить объявление'
        setCurrentCompany={setCurrentCompany}
        race={raceAnimal}
        setRace={setRaceAnimal}
        initialValues={{
          token: userData.token,
          uid: userData.user_id,
          type: 'sales',
          ...infoCopySales,
        }}
      />
    </>
  }

  return (
    <div className="main-grid">
      <div className="col-3 col-xs-12">
        <Sidebar />
      </div>
      <div className="col-9 col-xs-12 cabinet-body">

        {params.id ? ((isLoadingPost) ? ('Loading...') : (postSingle && renderPostForm())) : renderPostForm()}

      </div>
    </div>
  )
}

export default New;