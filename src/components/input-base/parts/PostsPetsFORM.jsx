// import { useNavigate } from 'react-router-dom';
import { addPost } from '/src/store';

import { useDispatch, useSelector } from "react-redux";
import Form from '/src/components/forms/pets/FormMini';



const PostsPetsFORM = ({ onShowPopup, popupVal }) => {
  // const navigate = useNavigate();
  console.log('popupVal', popupVal);
  const dispatch = useDispatch();



  const { userData } = useSelector((state) => {
    return state.users;
  });

  const formData = useSelector((state) => {
    return state.form.petsFormMini;
  });

  const formDataAnimal = useSelector((state) => {
    return state.form.salesForm.values.animal;
  });



  const { isLoadingPost, errorPost } = useSelector((state) => {
    return state.posts;
  });

  const submitSuccess = async () => {

    let sendData = { ...formData.values };

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
            btnText='Добавить питомца'
            title="Новый питомец"
            initialValues={{
              token: userData.token,
              type: 'pets',
              animal: formDataAnimal,
              genderPets: JSON.stringify(popupVal)
            }}
          />
          {errorPost && 'Error creating...'}
        </div>
      </div>
    </div>
  )
}



export default PostsPetsFORM;