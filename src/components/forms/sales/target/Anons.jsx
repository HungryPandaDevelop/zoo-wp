import RenderInput from '/src/components/input/RenderInput';
import { inputs } from '/src/components/forms/sales/inputs';
const Anons = ({ initialValues }) => {
  return (
    <>

      <div className="input-box">
        <label><b>7. {inputs.mather.placeholder}</b></label>
        <RenderInput param={{ ...inputs.mather, uid: initialValues.uid }} />
      </div>
      <div className="input-box">
        <label><b>8. {inputs.father.placeholder}</b></label>
        <RenderInput param={{ ...inputs.father, uid: initialValues.uid }} />
      </div>
      <div className="input-box">
        <label><b>9. Фото родителей</b></label>
        <RenderInput param={{ ...inputs.photos_sale }} />
      </div>
      <div className="input-box">
        <label><b>10. {inputs.price.placeholder}</b></label>
        <RenderInput param={{ ...inputs.price }} />
      </div>
      <div className="input-box">
        <label><b>11. {inputs.month.placeholder}</b></label>
        <RenderInput param={{ ...inputs.month }} />
      </div>

    </>
  )
}

export default Anons
