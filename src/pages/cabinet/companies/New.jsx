import { useNavigate } from 'react-router-dom';
import { addPost } from '/src/store';

import Sidebar from '/src/pages/cabinet/parts/Sidebar';
import { useDispatch, useSelector } from "react-redux";
import Form from '/src/components/forms/companies/Form';

// import { useThunk } from '/src/pages/cabinet/companies/use-thunk';
// import { createSeoCompanies } from '/src/pages/cabinet/companies/seo/createSeoCompanies';



const New = () => {
  // const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const [doCreate, isCreating, creatingError] = useThunk(addCompanies);


  const { userData } = useSelector((state) => {
    return state.users;
  });
  const formData = useSelector((state) => {
    return state.form.regFormId;
  });

  const { isLoadingPost, errorPost } = useSelector((state) => {
    return state.posts;
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

    dispatch(addPost(sendData)).then(res => {
      navigate('/cabinet/companies', { replace: true });
    });
  };

  return (
    <div className="main-grid">
      <div className="col-3 col-xs-12">
        <Sidebar />
      </div>
      <div className="col-9 col-xs-12 cabinet-body">
        <Form
          param={{ submitSuccess, isLoadingPost, formData }}
          title="Новый"
          btnText="Добавить"
          initialValues={{
            token: userData.token,
            email_company: userData.user_email,
            type: 'companies',
            uid: userData.user_id,
          }}
        />
        {errorPost && 'Error creating...'}
      </div>
    </div>
  )
}

export default New