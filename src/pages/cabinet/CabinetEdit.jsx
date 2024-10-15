
import Sidebar from "/src/pages/cabinet/parts/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import Form from '/src/components/forms/account/Form';

import { updateUser } from '/src/store';

const CabinetEdit = () => {

  const dispatch = useDispatch();

  const { userData, isLoadingUser, errorUser } = useSelector((state) => {
    return state.users;
  });


  const formData = useSelector((state) => {
    return state.form.regFormId;
  });


  const submitSuccess = async () => {

    dispatch(updateUser({ token: userData.token, user_login: userData.user_nicename, ...formData.values }));
  };


  return (
    <div className="main-grid">
      <div className="col-3 col-xs-12">
        <Sidebar />
      </div>
      <div className="col-9  col-xs-12 cabinet-body">
        <h1>Мой профиль</h1>
        <Form
          param={{ submitSuccess, isLoadingUser, errorUser }}
          initialValues={userData}
        />
      </div>
    </div>
  )
}

export default CabinetEdit