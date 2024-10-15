import { reduxForm } from 'redux-form';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { inputs } from '/src/components/forms/password/inputs';

import { onSubmitForm } from '/src/components/forms/onSubmitForm';
import RenderInput from '/src/components/input/RenderInput';

// import { toast } from 'react-toastify';
// import ErrPopup from '/src/components/forms/ErrPopup'

// import { useDispatch } from 'react-redux';
// import { clearErrorUser } from '/src/store';

const TemplateForm = ({
  param,
  invalid,
}) => {

  const { submitSuccess, isLoadingUser, errorUser } = param;

  // const dispatch = useDispatch();


  // useEffect(() => {

  //   if (errorUser) {

  //     const timer = setTimeout(() => {
  //       dispatch(clearErrorUser())
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }


  // }, [errorUser]);

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);

  return (
    <form
      className="form"
    >
      {/* {errorUser && <ErrPopup message={errorUser} />} */}
      <div className="input-box">
        {/* <label for={inputs.user_pass.name}><b>2. Пароль*</b></label> */}
        <RenderInput param={{ ...inputs.user_pass, checkErrorSubmit }} />

      </div>

      <div className="btn-container">
        {isLoadingUser ? 'Loading User...' : <submit
          className="btn btn--blue long-btn"
          onClick={(e) => { onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid) }}
        >
          Поменять пароль
        </submit>}
        <Link className='prev-btn' to="/cabinet"><i></i><span>Вернуться</span></Link>
      </div>


    </form >

  )
}

// export default RegForm
const GenerateForm = reduxForm({
  form: 'regFormId'  // a unique identifier for this form
})(TemplateForm);

export default GenerateForm;