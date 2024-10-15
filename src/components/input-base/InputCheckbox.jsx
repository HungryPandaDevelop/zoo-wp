
import { Field } from 'redux-form';

const TemplateInput = (props) => {

  const {
    input
  } = props;


  const {
    options
  } = props.obj;


  let getInputValue = input.value && JSON.parse(input.value);

  const onChangeCheck = ({ value }) => {

    if (getInputValue.indexOf(value) < 0) {
      const toString = JSON.stringify([...getInputValue, value]);
      input.onChange(toString)

    } else {
      const filterData = getInputValue.filter(el => el !== value);

      const toString = filterData.length > 0 ? JSON.stringify(getInputValue.filter(el => el !== value)) : '';
      input.onChange(toString)
    }

  }



  return (
    <div className="checkbox-container">
      {options ? options.map((item, index) => (
        <div
          className='checkbox'
          key={index}
          onClick={() => { onChangeCheck(item) }}
        >
          <input
            type="checkbox"
            checked={getInputValue.indexOf(item.value) >= 0 ? 'checked' : ''}
          />
          <span></span>
          <em>{item.label}</em>
        </div>
      )) : 'Нету полей'}
    </div>
  );
}

const Input = ({ obj }) => {

  return (
    <Field
      name={obj.name}
      obj={obj}
      validate={obj.validate}
      component={TemplateInput}
    />
  );



}


export default Input;