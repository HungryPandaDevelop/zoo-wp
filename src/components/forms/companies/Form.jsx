import { reduxForm } from 'redux-form';
import { useState, useEffect } from 'react';

import { inputs } from '/src/components/forms/companies/inputs';

import { onSubmitForm } from '/src/components/forms/onSubmitForm';

import RenderInput from '/src/components/input/RenderInput';

import { toast } from 'react-toastify';

import Pitomniki from '/src/components/forms/companies/types/Pitomniki';
import Prijuty from '/src/components/forms/companies/types/Prijuty';

const TemplateForm = (props) => {

  const {
    param,
    invalid,
    title,
    btnText,
    initialValues
  } = props;

  const {
    submitSuccess,
    isLoadingPost,
    errorUser
  } = param;

  useEffect(() => {

    errorUser && toast.error(errorUser)
  }, [errorUser]);

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);

  const [typeCompanies, setTypeCompanies] = useState(false);



  return (
    <form
      className="form"
    >


      <div className="cabinet-form-head">
        <div className="cabinet-status">
          <RenderInput param={{ ...inputs.status, checkErrorSubmit }} />
        </div>
      </div>
      <div className="cabinet-form-container">
        <div className="input-box">
          <h1>{title}</h1>
        </div>
        <div className="input-box">
          <label><b>1. {inputs.type_company.placeholder}</b></label>
          <RenderInput
            param={{
              ...inputs.type_company,
              checkErrorSubmit,
              setTypeCompanies
            }} />
        </div>
      </div>

      {typeCompanies === 53 && <Pitomniki
        checkErrorSubmit={checkErrorSubmit}
        initialValues={initialValues}
      />}
      {typeCompanies === 54 && <Prijuty
        checkErrorSubmit={checkErrorSubmit}
        initialValues={initialValues}
      />}
      {/* {console.log('typeCompanies', typeCompanies)} */}
      {typeCompanies && (<>
        {isLoadingPost ? 'Loading...' : <submit
          className="btn btn--blue"
          onClick={(e) => { onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid) }}
        >
          {typeCompanies === 53 && btnText + " питомник"}
          {typeCompanies === 54 && btnText + " приют"}
        </submit>}
      </>)}

      {/* <Link className='prev-btn' to="/cabinet/companies"><i></i><span>Вернуться</span></Link> */}
    </form >
  )
}

// export default RegForm
const GenerateForm = reduxForm({
  form: 'regFormId'  // a unique identifier for this form
})(TemplateForm);

export default GenerateForm;