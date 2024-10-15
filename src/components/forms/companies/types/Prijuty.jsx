
import { inputs } from '/src/components/forms/companies/inputs';
import { inputsPrijuty } from '/src/components/forms/companies/inputsPrijuty';

import RenderInput from '/src/components/input/RenderInput';

import { russianCities } from '/src/base/russianCities';

const Prijuty = ({
  title,
  setTypeCompanies,
  checkErrorSubmit,
  initialValues
}) => {
  return (

    <div className="cabinet-form-container">
      <div className="input-box">
        <label for={inputs.title.name}><b>2. Наименование приюта*</b></label>
        <RenderInput param={{ ...inputs.title, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>3. Специализация приюта</b>
        </label>
        <RenderInput param={{ ...inputsPrijuty.race, checkErrorSubmit }} />
      </div>

      <div className="input-box ">
        <label><b>4. Загрузите логотип приюта</b>
          <span className='input-hint'> Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.</span>
        </label>
        <RenderInput param={{ ...inputs.logo, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>5. Краткое описание</b>
          <span className='input-hint'> Длина текста не должна превышать 110 символов, включая пробелы.</span>
        </label>
        <RenderInput param={{ ...inputs.excerpt, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>6. Подробное описание</b>
          <span className='input-hint'> Длина текста не должна превышать 3 000 символов, включая пробелы.</span>
        </label>
        <RenderInput param={{ ...inputs.content, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>7. Загрузите фото приюта</b>
          <span className='input-hint'> Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png. Рекомендуемый формат вертикальный - 2:1 (Ширина 1920px, Высота 960px).</span></label>
        <RenderInput param={{ ...inputs.photos_company, checkErrorSubmit }} />
      </div>
      {/* <div className="input-box">
        <label><b>8. Выберите город</b></label>
        <RenderInput param={{ ...inputs.city, options: russianCities, checkErrorSubmit }} />
      </div> */}
      <div className="input-box">
        <label for={inputs.address.name}><b>8. Выберите адрес</b></label>
        <RenderInput param={{ ...inputs.address, checkErrorSubmit }} />

      </div>
      <div className="input-box">
        <label for={inputs.phone_company.name}><b>9. Телефон приюта</b></label>
        <RenderInput param={{ ...inputs.phone_company, checkErrorSubmit }} />

      </div>
      <div className="input-box">
        <label for={inputs.email_company.name}><b>11. Email</b></label>
        <RenderInput param={{ ...inputs.email_company, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label for={inputs.site_company.name} ><b>10. Адрес сайта приюта</b></label>
        <RenderInput param={{ ...inputs.site_company, checkErrorSubmit }} />

      </div>
      <div className="input-box">
        <label><b>11. Социальные сети приюта</b></label>
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
      <div className="input-box">
        <label><b>12. Загрузите сертификаты вашего приюта</b><span className='input-hint'>Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Допустимый формат файлов: .jpg, .png</span></label>
        <RenderInput param={{ ...inputs.certificates, checkErrorSubmit }} />
      </div>



    </div>
  )
}

export default Prijuty;
