import { Field } from 'redux-form';
// import { useState, useEffect } from 'react';

// import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';




const TempateInput = (props) => {
  const {
    input,
    meta: { error }
  } = props;


  const choiseEmpty = () => {

    if (input.value === 'empty') {
      input.onChange('');
    } else {
      input.onChange('empty');
    }

  }


  // const handleValueChange = (values) => {
  //   const { formattedValue, value: rawValue } = values;
  //   if (!/^0[0-9]/.test(formattedValue)) {  // Проверка на ведущий ноль
  //     // onChange(rawValue);
  //     input.onChange(rawValue)
  //   }
  // };




  return (
    <div className='field-price'>
      {/* {<InputMask
        {...input}
        mask='99 999 999 '
        placeholder='0'
        maskChar={null}
        id={input.name}
        className={`input-decorate ${input.value.length > 0 ? 'input-empty' : ''} ${input.value === 'empty' ? 'disable' : ''}`}
        disabled={input.value === 'empty' ? true : false}
      />} */}


      <NumericFormat
        {...input}
        id={input.name}
        disabled={input.value === 'empty' ? true : false}
        className={`input-decorate ${input.value.length > 0 ? 'input-empty' : ''} ${input.value === 'empty' ? 'disable' : ''}`}
        // onValueChange={handleValueChange}
        thousandSeparator=" "
        suffix=" ₽"
        allowNegative={false}
        decimalScale={0}
        fixedDecimalScale
        isNumericString

      />

      {/* <CurrencyInput name="myInput" /> */}
      {/* <span className='symbol'>₽</span> */}
      <div
        className="check-race-empty-container"
      >
        <div
          className={`check-race-empty ${input.value === 'empty' ? 'active' : ''}`}
          onClick={() => { choiseEmpty() }}
        >
          <i></i>
          <span>Цена договорная</span>
        </div>
      </div>

    </div>
  );
}


const Input = ({ obj }) => {

  return <Field
    name={obj.name}
    validate={obj.validate}
    obj={obj}
    component={TempateInput}
  />;
}

export default Input;