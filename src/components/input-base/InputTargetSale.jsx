
import { Field } from 'redux-form';
import { useState, useEffect } from 'react';

const TemplateInput = (props) => {

  const {
    input
  } = props;

  const {
    options,
    setTypeSale,
  } = props.obj;

  const onChangeCheck = (value) => {
    const toString = JSON.stringify(value);

    // setTypeSale(value.value);
    input.onChange(toString);

  }

  useEffect(() => {
    if (input.value) {
      // console.log('input.value', JSON.parse(input.value))

      const getInputValue = JSON.parse(input.value);

      setTypeSale(getInputValue);
    }
  }, [input]);

  const getInputValue = input.value && JSON.parse(input.value);

  return (
    <div className="checkbox-container">
      {options.map((item, index) => (
        <div
          key={index}
          className={`target-sale-option ${item.value} ${getInputValue.value === item.value ? 'active' : ''}`}
          onClick={() => { onChangeCheck(item) }}
        >
          <div className="box" >
            <i></i>
            <span>{item.label}</span></div>

        </div>
      ))}
    </div>
  );
}

const Input = ({ obj }) => {



  return <Field
    name={obj.name}
    obj={obj}
    validate={obj.validate}
    component={TemplateInput}

  />;
}



export default Input;