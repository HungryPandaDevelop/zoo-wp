import { useNavigate } from 'react-router-dom';
import { addPost } from '/src/store';

import Sidebar from '/src/pages/cabinet/parts/Sidebar';
import { useDispatch, useSelector } from "react-redux";
import Form from '/src/components/forms/pets/Form';

// import { useThunk } from '/src/pages/cabinet/companies/use-thunk';

const New = () => {
  // const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const [doCreate, isCreating, creatingError] = useThunk(addCompanies);


  const { userData } = useSelector((state) => {
    return state.users;
  });
  const formData = useSelector((state) => {
    return state.form.petsForm;
  });

  const { isLoadingPost, errorPost } = useSelector((state) => {
    return state.posts;
  });

  const submitSuccess = async () => {

    let sendData = { ...formData.values };

    dispatch(addPost(sendData)).then(res => {
      navigate('/cabinet/pets', { replace: true });
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
          btnText='Добавить питомца'
          title="Новый питомец"
          initialValues={{
            token: userData.token,
            type: 'pets'
          }}
        />
        {errorPost && 'Error creating...'}
      </div>
    </div>
  )
}

export default New