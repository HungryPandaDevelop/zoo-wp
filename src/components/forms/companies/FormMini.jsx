import { reduxForm } from 'redux-form';
import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';

import { inputs } from '/src/components/forms/companies/inputs';

import { onSubmitForm } from '/src/components/forms/onSubmitForm';

import RenderInput from '/src/components/input/RenderInput';

// import { russianCities } from '/src/base/russianCities';

// import FindAnimals from '/src/components/forms/companies//FindAnimals';

import { toast } from 'react-toastify';


const TemplateForm = (props) => {

  const {
    param,
    invalid,
    btnText,
    title,
    subTitle
  } = props;

  const { submitSuccess, isLoadingPost, errorUser } = param;

  useEffect(() => {

    errorUser && toast.error(errorUser)
  }, [errorUser]);

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);

  return (
    <form
      className="form"
    >
      <h1>{title}</h1>

      <div className="input-box">
        <label for={inputs.title.name}><b>1. Наименование {subTitle}*</b></label>
        <RenderInput param={{ ...inputs.title, checkErrorSubmit }} />

      </div>
      <div className="input-box">
        <label><b>2. Cпециализация  {subTitle}</b></label>
        <RenderInput param={{ ...inputs.specialization }} />
      </div>

      <div className="input-box ">
        <label><b>3. Загрузите логотип  {subTitle}</b>
          <span className='input-hint'> Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.</span>
        </label>
        <RenderInput param={{ ...inputs.logo, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>4. Краткое описание</b>
          <span className='input-hint'> Длина текста не должна превышать 110 символов, включая пробелы.</span>
        </label>
        <RenderInput param={{ ...inputs.excerpt, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>5. Подробное описание</b>
          <span className='input-hint'> Длина текста не должна превышать 3 000 символов, включая пробелы.</span>
        </label>
        <RenderInput param={{ ...inputs.content, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>6. Загрузите фото  {subTitle}</b><span className='input-hint'> Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png. Рекомендуемый формат вертикальный - 2:1 (Ширина 1920px, Высота 960px).</span></label>
        <RenderInput param={{ ...inputs.photos_company, checkErrorSubmit }} />
      </div>
      {/* <div className="input-box">
        <label><b>8. Выберите город</b></label>
        <RenderInput param={{ ...inputs.city, options: russianCities, checkErrorSubmit }} />
      </div> */}
      <div className="input-box">
        <label for={inputs.address.name}><b>7. Выберите адрес</b></label>
        <RenderInput param={{ ...inputs.address, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label for={inputs.phone_company.name}><b>8. Телефон  {subTitle}</b></label>
        <RenderInput param={{ ...inputs.phone_company, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label for={inputs.email_company.name}><b>9. Email</b></label>
        <RenderInput param={{ ...inputs.email_company, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label for={inputs.site_company.name} ><b>10. Адрес сайта  {subTitle}</b></label>
        <RenderInput param={{ ...inputs.site_company, checkErrorSubmit }} />

      </div>
      <div className="input-box">
        <label><b>11. Социальные сети  {subTitle}</b></label>
        <div className="main-grid">
          <div className="col-6">
            <div className="input-box">
              <label for={inputs.vk.name}><b>Вконтакте</b></label>
              <RenderInput param={{ ...inputs.vk, checkErrorSubmit }} />

            </div>
          </div>
          <div className="col-6">
            <div className="input-box">
              <label for={inputs.ok.name}><b>Одноклассники</b></label>
              <RenderInput param={{ ...inputs.ok, checkErrorSubmit }} />

            </div>
          </div>
          <div className="col-6">
            <div className="input-box">
              <label for={inputs.telegramm.name}><b>Телеграм</b></label>
              <RenderInput param={{ ...inputs.telegramm, checkErrorSubmit }} />

            </div>
          </div>
        </div>
      </div>



      {isLoadingPost ? 'Loading...' : <submit
        className="btn btn--blue"
        onClick={(e) => { onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid) }}
      >
        {btnText}
      </submit>}
      {/* <Link className='prev-btn' to="/cabinet/companies"><i></i><span>Вернуться</span></Link> */}
    </form >
  )
}

// export default RegForm
const GenerateForm = reduxForm({
  form: 'companiesFormMini'  // a unique identifier for this form
})(TemplateForm);

export default GenerateForm;