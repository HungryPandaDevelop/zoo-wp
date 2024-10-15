import RenderInput from '/src/components/input/RenderInput';
import { inputs } from '/src/components/forms/sales/inputs';
const Sale = ({
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
        <label><b>9. {inputs.price.placeholder}</b></label>
        <RenderInput param={{ ...inputs.price }} />
      </div>



      <div className="input-box">
        <label><b>10. {inputs.mather.placeholder}</b></label>
        <RenderInput param={{ ...inputs.mather, uid: initialValues.uid }} />
      </div>
      <div className="input-box">
        <label><b>11. {inputs.father.placeholder}</b></label>
        <RenderInput param={{ ...inputs.father, uid: initialValues.uid }} />
      </div>

      {/* <div className="input-box">
        <label><b>11. {inputs.baer.placeholder}</b></label>
        <RenderInput param={{ ...inputs.baer }} />
      </div> */}
      {/* <div className="input-box">
        <label><b>12. {inputs.hd.placeholder}</b></label>
        <RenderInput param={{ ...inputs.hd }} />
      </div> */}
      {/* <div className="input-box">
        <label><b>13. {inputs.pl.placeholder}</b></label>
        <RenderInput param={{ ...inputs.pl }} />
      </div> */}
      {/* <div className="input-box">
        <label><b>14. {inputs.vaccine.placeholder}</b></label>
        <RenderInput param={{ ...inputs.vaccine }} />
      </div> */}
      {/* <div className="input-box">
        <label><b>15. {inputs.childrens.placeholder}</b></label>
        <RenderInput param={{ ...inputs.childrens }} />
      </div> */}
      {/* <div className="input-box">
        <label><b>16. {inputs.brand.placeholder}</b></label>
        <RenderInput param={{ ...inputs.brand }} />
      </div> */}
      {/* <div className="input-box">
        <label><b>17. {inputs.chipping.placeholder}</b></label>
        <RenderInput param={{ ...inputs.chipping }} />
      </div> */}

      {/* <div className="input-box">
        <label><b>18. {inputs.priceRange.placeholder}</b></label>
        <RenderInput param={{ ...inputs.priceRange }} />
      </div> */}

    </>
  )
}

export default Sale
