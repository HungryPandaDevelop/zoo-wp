import { reduxForm } from 'redux-form';
import { useState, useEffect } from 'react';

import { russianCities } from '/src/base/russianCities';

import { inputs } from '/src/components/forms/account/inputs';

import { onSubmitForm } from '/src/components/forms/onSubmitForm';
import RenderInput from '/src/components/input/RenderInput';

import { toast } from 'react-toastify';

const TemplateForm = ({
  param,
  invalid,
}) => {

  const { submitSuccess, isLoadingUser, errorUser } = param;

  useEffect(() => {
    errorUser && toast.error(errorUser)
  }, [errorUser]);

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);

  return (
    <form
      className="form"
    >
      <div className="cabinet-form-container">
        <div className="input-box">
          <label><b>1. {inputs.user_login.placeholder}</b></label>
          <RenderInput param={{ ...inputs.user_login, checkErrorSubmit }} />

        </div>
        <div className="input-box">
          <label><b>2. {inputs.first_name.placeholder}</b></label>
          <RenderInput param={{ ...inputs.first_name, checkErrorSubmit }} />

        </div>
        <div className="input-box">
          <label><b>3. {inputs.last_name.placeholder}</b></label>
          <RenderInput param={{ ...inputs.last_name, checkErrorSubmit }} />

        </div>
        <div className="input-box">
          <label><b>4. {inputs.extra_name.placeholder}</b></label>
          <RenderInput param={{ ...inputs.extra_name, checkErrorSubmit }} />

        </div>
        <div className="input-box">
          <label><b>5. {inputs.phone.placeholder}</b></label>
          <RenderInput param={{ ...inputs.phone, checkErrorSubmit }} />

        </div>
        <div className="input-box">
          <label><b>6. {inputs.user_email.placeholder}</b></label>
          <RenderInput param={{ ...inputs.user_email, checkErrorSubmit }} />

        </div>
        {/* <div className="input-box">
          <label><b>7. Выберите город</b></label>
          <RenderInput param={{ ...inputs.city, options: russianCities, checkErrorSubmit }} />
        </div> */}
        <div className="input-box">
          <label><b>7. Выберите адрес</b></label>
          <RenderInput param={{ ...inputs.address, checkErrorSubmit }} />
        </div>

        <div className="input-box ">
          <label><b>8. Загрузите фото профиля</b>
            <span className='input-hint'> Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.</span>
          </label>
          <RenderInput param={{ ...inputs.foto_profilya, checkErrorSubmit }} />
        </div>
      </div>

      {isLoadingUser ? 'Loading User...' : <submit
        className="btn btn--blue"
        onClick={(e) => { onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid) }}
      >
        Сохранить
      </submit>}
      {/* <Link className='prev-btn' to="/cabinet"><i></i><span>Вернуться</span></Link> */}
    </form>
  )
}

// export default RegForm
const GenerateForm = reduxForm({
  form: 'regFormId'  // a unique identifier for this form
})(TemplateForm);

export default GenerateForm;