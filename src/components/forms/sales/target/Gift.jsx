import RenderInput from '/src/components/input/RenderInput';
import { inputs } from '/src/components/forms/sales/inputs';

const Gift = ({
  initialValues,
  idAnimal,
  race,
  checkErrorSubmit
}) => {
  return (
    <>
      <div className="input-box">
        <label><b>3. {inputs.gender.placeholder}</b></label>
        <RenderInput param={{ ...inputs.gender }} />
      </div>
      <div className="input-box">
        <label><b>4. Дата рождения</b></label>
        <RenderInput param={{ ...inputs.birth, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>5. {inputs.photos_sale.placeholder}</b></label>
        <div className="input-hint">
          Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Формат файлов: *.jpg, *.png. Рекомендуемый формат вертикальный - 2:1 (Ширина 1920px, Высота 960px).
        </div>
        <RenderInput param={{ ...inputs.photos_sale }} />
      </div>
      {race === 'porodi-sobak' ? (<>
        <div className="input-box">
          <label><b>6. {inputs.dokumenty_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.dokumenty_pitomca, idAnimal }} />
        </div>
        <div className="input-box">
          <label><b>7. {inputs.osobennosti_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.osobennosti_pitomca, idAnimal }} />
        </div>
        <div className="input-box">
          <label><b>8. {inputs.navyki_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.navyki_pitomca, idAnimal }} />
        </div>
      </>) : (<>
        <div className="input-box">
          <label><b>6. {inputs.dokumenty_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.dokumenty_pitomca, idAnimal, race: race }} />
        </div>
        <div className="input-box">
          <label><b>7. {inputs.osobennosti_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.osobennosti_pitomca, idAnimal, race: race }} />
        </div>
        <div className="input-box">
          <label><b>8. {inputs.navyki_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.navyki_pitomca, idAnimal, race: race }} />
        </div>
      </>)}


      <div className="input-box">
        <label><b>9. {inputs.mather.placeholder}</b></label>
        <RenderInput param={{ ...inputs.mather, uid: initialValues.uid }} />
      </div>
      <div className="input-box">
        <label><b>10. {inputs.father.placeholder}</b></label>
        <RenderInput param={{ ...inputs.father, uid: initialValues.uid }} />
      </div>


    </>
  )
}

export default Gift
