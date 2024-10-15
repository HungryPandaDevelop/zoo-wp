// import { useNavigate } from 'react-router-dom';
import { addPost } from '/src/store';

import { useDispatch, useSelector } from "react-redux";
import Form from '/src/components/forms/companies/FormMini';



const PostsPetsFORM = ({
  onShowPopup,
  typeCompany
}) => {

  // const navigate = useNavigate();

  const dispatch = useDispatch();

  const { userData } = useSelector((state) => {
    return state.users;
  });

  const formData = useSelector((state) => {
    return state.form.companiesFormMini;
  });

  // const formDataAnimal = useSelector((state) => {
  //   return state.form.salesForm.values.animal;
  // });



  const { isLoadingPost, errorPost } = useSelector((state) => {
    return state.posts;
  });

  const submitSuccess = async () => {

    let sendData = { ...formData.values };
    console.log('formData.values', formData.values)
    dispatch(addPost(sendData)).then(res => {
      // navigate('/cabinet/pets', { replace: true });
    });
  };

  return (
    <div className="popup element-show show" >
      <div className="popup-overlay popup-overlay-js"></div>
      <div className="popup-container">
        <div className="close-btn close-btn--popup close-js" onClick={() => { onShowPopup(false) }}></div>
        <div className="form-default">
          <Form
            param={{ submitSuccess, isLoadingPost, formData }}
            btnText={`Добавить ${typeCompany[0] === 53 ? 'питомник' : 'приют'}`}
            title={`Новый ${typeCompany[0] === 53 ? 'питомник' : 'приют'}`}
            subTitle={`${typeCompany[0] === 53 ? 'питомника' : 'приюта'}`}
            initialValues={{
              token: userData.token,
              type: 'companies',
              type_company: JSON.stringify(typeCompany),
              companies_category: typeCompany[0],
            }}
          />
          {errorPost && 'Error creating...'}
        </div>
      </div>
    </div>
  )
}



export default PostsPetsFORM;