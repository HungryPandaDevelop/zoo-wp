import { reduxForm } from 'redux-form';
import { useState, useEffect } from 'react';

import { inputs } from '/src/components/forms/pets/inputs';

import { onSubmitForm } from '/src/components/forms/onSubmitForm';

import RenderInput from '/src/components/input/RenderInput';

import { toast } from 'react-toastify';


const TemplateForm = (props) => {

  const {
    param,
    invalid,
    btnText,
    title
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

      <div className="input-box">
        <h1>{title}</h1>
      </div>

      <div className="input-box">
        <label for={inputs.title.name}><b>1. {inputs.title.placeholder}</b></label>
        <RenderInput param={{ ...inputs.title, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>2. {inputs.birth.placeholder}</b>
        </label>
        <RenderInput param={{ ...inputs.birth, checkErrorSubmit }} />
      </div>

      <div className="input-box">
        <label><b>3. {inputs.content.placeholder}</b>
          <span className='input-hint'> Длина текста не должна превышать 3 000 символов, включая пробелы.</span>
        </label>
        <RenderInput param={{ ...inputs.content, checkErrorSubmit }} />
      </div>

      <div className="input-box">
        <label><b>4. {inputs.dokumenty_pitomca.placeholder}</b>
        </label>
        <RenderInput param={{ ...inputs.dokumenty_pitomca, checkErrorSubmit }} />
      </div>

      <div className="input-box">
        <label><b>5. {inputs.fotografia_pitomca.placeholder}</b>
          <div className="input-hint">Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.</div>
        </label>
        <RenderInput param={{ ...inputs.fotografia_pitomca, checkErrorSubmit }} />
      </div>

      <div className="input-box">
        <label><b>6. {inputs.tituly.placeholder}</b>
          <span className="input-hint">
            Длина текста не должна превышать 300 символов, включая пробелы.</span>
        </label>
        <RenderInput param={{ ...inputs.tituly, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>7. {inputs.foto_roditelya.placeholder}</b>
          <div className="input-hint">
            Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png. Рекомендуемый формат вертикальный - 2:1 (Ширина 1920px, Высота 960px).</div>
        </label>
        <RenderInput param={{ ...inputs.foto_roditelya, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>8. Дрессировка</b></label>
      </div>
      <div className="input-box">
        <label><b>{inputs.sportivnoe_napravlenie.placeholder}</b>
        </label>
        <RenderInput param={{ ...inputs.sportivnoe_napravlenie, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>{inputs.rossijskie_vidy_sluzhb.placeholder}</b>
        </label>
        <RenderInput param={{ ...inputs.rossijskie_vidy_sluzhb, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>{inputs.socialnye_vidy_sluzhb.placeholder}</b>
        </label>
        <RenderInput param={{ ...inputs.socialnye_vidy_sluzhb, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>{inputs.sportivnye_vidy_dressirovki.placeholder}</b>
        </label>
        <RenderInput param={{ ...inputs.sportivnye_vidy_dressirovki, checkErrorSubmit }} />
      </div>








      {isLoadingPost ? 'Loading...' : <submit
        className="btn btn--blue"
        onClick={(e) => { onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid) }}
      >
        {btnText}
      </submit>}
      {/* <Link className='prev-btn' to="/cabinet/pets"><i></i><span>Вернуться</span></Link> */}
    </form >
  )
}

// export default RegForm
const GenerateForm = reduxForm({
  form: 'petsFormMini'  // a unique identifier for this form
})(TemplateForm);

export default GenerateForm;