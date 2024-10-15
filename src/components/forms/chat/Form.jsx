import { reduxForm } from 'redux-form';
import { useState, useEffect } from 'react';



import { inputs } from '/src/components/forms/chat/inputs';

import { onSubmitForm } from '/src/components/forms/onSubmitForm';
import RenderInput from '/src/components/input/RenderInput';


const TemplateForm = ({
  param,
  invalid,
  reset
}) => {

  const {
    submitSuccess,
    reqOr,
    // errorUser
  } = param;



  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);


  const sendWithoutBtn = () => {
    onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid, reset);
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid, reset)
      }}
    >

      <div className="input-box">
        {/* <label for={inputs.user_login.name}><b>1. Ник пользователя*</b></label> */}
        <RenderInput param={{ ...inputs.message, checkErrorSubmit, reqOr }} />

      </div>

      <div className="btn-container">
        <div>
          <submit
            className="btn btn--blue"
            onClick={() => { onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid, reset) }}
          >
            Отправить
          </submit>
        </div>

        <RenderInput param={{ ...inputs.imgEmodsy, sendWithoutBtn }} />
        <RenderInput param={{ ...inputs.fileChat, checkErrorSubmit }} />
      </div>


    </form >

  )
}

// export default RegForm
const GenerateForm = reduxForm({
  form: 'chatForm'  // a unique identifier for this form
})(TemplateForm);

export default GenerateForm;