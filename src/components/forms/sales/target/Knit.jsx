import RenderInput from '/src/components/input/RenderInput';
import { inputs } from '/src/components/forms/sales/inputs';
const Knit = ({
  initialValues,
  idAnimal,
  race,
  checkErrorSubmit }) => {
  return (
    <>
      <div className="input-box">
        <label><b>3. {inputs.gender.placeholder}</b></label>
        <RenderInput param={{ ...inputs.gender }} />
      </div>
      <div className="input-box">
        <label><b>4. {inputs.nickname.placeholder}</b></label>
        <RenderInput param={{ ...inputs.nickname }} />
      </div>
      <div className="input-box">
        <label><b>5. Дата рождения</b></label>
        <RenderInput param={{ ...inputs.birth, checkErrorSubmit }} />
      </div>
      <div className="input-box">
        <label><b>6. {inputs.photos_sale.placeholder}</b></label>
        <div className="input-hint">
          Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Формат файлов: *.jpg, *.png. Рекомендуемый формат вертикальный - 2:1 (Ширина 1920px, Высота 960px).
        </div>
        <RenderInput param={{ ...inputs.photos_sale }} />
      </div>
      {race === 'porodi-sobak' ? (<>
        <div className="input-box">
          <label><b>7. {inputs.dokumenty_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.dokumenty_pitomca, idAnimal }} />
        </div>
        <div className="input-box">
          <label><b>8. {inputs.osobennosti_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.osobennosti_pitomca, idAnimal }} />
        </div>
        <div className="input-box">
          <label><b>9. {inputs.navyki_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.navyki_pitomca, idAnimal }} />
        </div>
      </>) : (<>
        <div className="input-box">
          <label><b>10. {inputs.dokumenty_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.dokumenty_pitomca, idAnimal, race: race }} />
        </div>
        <div className="input-box">
          <label><b>11. {inputs.osobennosti_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.osobennosti_pitomca, idAnimal, race: race }} />
        </div>
        <div className="input-box">
          <label><b>12. {inputs.navyki_pitomca.placeholder}</b></label>
          <RenderInput param={{ ...inputs.navyki_pitomca, idAnimal, race: race }} />
        </div>
      </>)}



      <div className="input-box">
        <label><b>13. Стоимость за вязку</b></label>
        <RenderInput param={{ ...inputs.price }} />
      </div>



      {/* <div className="input-box">
        <label><b>10. {inputs.mather.placeholder}</b></label>
        <RenderInput param={{ ...inputs.mather, uid: initialValues.uid }} />
      </div>
      <div className="input-box">
        <label><b>11. {inputs.father.placeholder}</b></label>
        <RenderInput param={{ ...inputs.father, uid: initialValues.uid }} />
      </div> */}
      <div className="input-box">
        <label><b>14. {inputs.rodoslovnaya.placeholder}</b></label>
        <RenderInput param={{ ...inputs.rodoslovnaya, uid: initialValues.uid }} />
      </div>
      <div className="input-box">
        <label><b>15. {inputs.tituly.placeholder}</b></label>
        <RenderInput param={{ ...inputs.tituly, uid: initialValues.uid }} />
      </div>

      {race === 'porodi-sobak' && (
        <>
          <div className="input-box">
            <label><b>16. Дрессировка</b></label>
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
        </>)}
    </>
  )
}

export default Knit;
