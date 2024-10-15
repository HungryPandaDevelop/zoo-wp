import { reduxForm } from 'redux-form';
import { useState, useEffect } from 'react';

import { inputs } from '/src/components/forms/sales/inputs';

import { onSubmitForm } from '/src/components/forms/onSubmitForm';
import RenderInput from '/src/components/input/RenderInput';

import Sale from './target/Sale';
import Anons from './target/Anons';
import Knit from './target/Knit';
import Gift from './target/Gift';

import { toast } from 'react-toastify';

const TemplateForm = ({
  param,
  invalid,
  initialValues,
  btnText,
  title,
  setCurrentCompany,
  race,
  setRace
}) => {

  const [typeSale, setTypeSale] = useState({ value: '' });
  const [idAnimal, setIdAnimal] = useState(null);



  const { submitSuccess, isLoadingPost, errorUser } = param;




  useEffect(() => {
    errorUser && toast.error(errorUser)
  }, [errorUser]);

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);


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
          <label><b>1. {inputs.company.placeholder}</b></label>
          <RenderInput param={{ ...inputs.company, uid: initialValues.uid, setCurrentCompany }} />
        </div>

        <div className="input-box">
          <label><b>2. {inputs.target.placeholder}</b></label>
          <RenderInput param={{ ...inputs.target, setTypeSale }} />
        </div>

        <RenderInput param={{
          ...inputs.animal,
          setIdAnimal,
          setRace,
          checkErrorSubmit
        }} />
        {(typeSale.value === 'sale') && (
          <div className="input-box">
            <label><b>5. {inputs.quantity.placeholder}</b></label>
            <div className="input-hint">Если вы хотите разместить объявление о всем помете целиком, то выберите "Помет". Если вы хотите опубликовать отдельные объявления для каждого питомца из одного помета, то выберите "Один". После сохранения объявления, в списке ваших объявлений вы сможете клонировать данное объявление и изменить необходимую информацию о дополнительном питомце.</div>
            <RenderInput param={{ ...inputs.quantity }} />
          </div>
        )}


        <h2>Параметры объявления</h2>

        <div className="input-box">
          <label><b>1. Название</b></label>
          <div className="input-hint">Длина текста не должна превышать 110 символов, включая пробелы.</div>
          <RenderInput param={{ ...inputs.title, checkErrorSubmit }} />
        </div>

        <div className="input-box">
          <label><b>2. Описание</b></label>
          <div className="input-hint">Длина текста не должна превышать 3 000 символов, включая пробелы.</div>
          <RenderInput param={{ ...inputs.content }} />
        </div>


        {typeSale.value === 'sale' && <Sale
          initialValues={initialValues}
          idAnimal={idAnimal}
          race={race}
          checkErrorSubmit={checkErrorSubmit}
        />}
        {typeSale.value === 'anons' && <Anons
          initialValues={initialValues}
          idAnimal={idAnimal}
          race={race}
          checkErrorSubmit={checkErrorSubmit}
        />}
        {typeSale.value === 'knit' && <Knit
          initialValues={initialValues}
          idAnimal={idAnimal}
          race={race}
          checkErrorSubmit={checkErrorSubmit} />}
        {typeSale.value === 'gift' && <Gift
          initialValues={initialValues}
          idAnimal={idAnimal}
          race={race}
        />}

      </div>

      {isLoadingPost ? 'Loading...' : <submit
        className="btn btn--blue"
        onClick={(e) => { onSubmitForm(setCheckErrorSubmit, submitSuccess, invalid) }}
      >
        {btnText}
      </submit>}
      {/* <Link className='prev-btn' to="/cabinet/sales"><i></i><span>Вернуться</span></Link> */}
    </form >
  )
}


const GenerateForm = reduxForm({
  form: 'salesForm'  // a unique identifier for this form
})(TemplateForm);

export default GenerateForm;