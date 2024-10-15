import { useEffect } from 'react';
import { Field } from 'redux-form';

const TemplateInput = (props) => {

  const {
    input
  } = props;


  const {
    options,
    setTypeCompanies
  } = props.obj;

  useEffect(() => {

    if (setTypeCompanies && input.value) {
      console.log('input.value', input.value)
      setTypeCompanies(JSON.parse(input.value)[0])
    }

  }, []);


  let getInputValue = input.value && JSON.parse(input.value);

  const onChangeCheck = ({ value }) => {

    if (getInputValue.indexOf(value) < 0) {
      const toString = JSON.stringify([value]);
      input.onChange(toString)
      setTypeCompanies && setTypeCompanies(value);

    } else {

      input.onChange('')
      setTypeCompanies && setTypeCompanies('');
    }


  };



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