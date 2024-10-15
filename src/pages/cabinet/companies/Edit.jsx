import { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '/src/pages/cabinet/parts/Sidebar';

import Form from '/src/components/forms/companies/Form';

import { useSelector, useDispatch } from 'react-redux';

import { getPostSingle, updatePost } from '/src/store';

// import { createSeoCompanies } from '/src/pages/cabinet/companies/seo/createSeoCompanies';

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { postSingle, isLoadingPost, errorPost } = useSelector((state) => {

    return state.posts;
  });
  const { userData } = useSelector((state) => {

    return state.users;
  });

  const formData = useSelector((state) => {
    return state.form.regFormId;
  });
  const submitSuccess = async () => {

    // let type_company = formData.values.type_company && JSON.parse(formData.values.type_company)[0];
    // let seoData = {};

    // if (type_company === 53) {
    //   seoData = createSeoCompanies(formData.values);
    // }

    let sendData = {
      ...formData.values,
      // ...seoData,
    };


    if (formData.values.specialization) {

      let tempData = sendData.specialization;

      tempData = tempData.filter(item => (item !== null && item !== undefined))

      sendData.specialization = JSON.stringify(tempData);

    }

    sendData.companies_category = sendData.type_company && JSON.parse(sendData.type_company)[0];

    dispatch(updatePost(sendData)).then(res => {
      navigate('/cabinet/companies', { replace: true });
    });
  };

  useEffect(() => {
    // setLoadingSingle(true);
    dispatch(getPostSingle({ id: params.id, type: 'companies' }));
  }, []);



  const renderPostForm = () => {



    return <>

      <Form
        param={{ submitSuccess }}
        btnText='Обновить'
        title={`${postSingle.title.rendered}`}
        initialValues={{
          id: params.id,
          token: userData.token,
          uid: userData.user_id,
          type: 'companies',
          title: postSingle.title.rendered,
          excerpt: postSingle.excerpt.rendered,
          content: postSingle.content.rendered,
          ...postSingle.acf,
          email_company: postSingle.acf.email_company ? postSingle.acf.email_company : userData.user_email,
          specialization: (postSingle.acf.specialization) && JSON.parse(postSingle.acf.specialization),
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