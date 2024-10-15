import { Field } from 'redux-form';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { useEffect, useRef } from "react";

import { InputMask } from '@react-input/mask';

const TempateInput = (props) => {

  let dp = useRef(null);
  let inputRef = useRef(null);


  const {
    input,
    meta: { error }
  } = props;

  const {
    onlyMonth,
    placeholder,
    checkErrorSubmit,
    setErrCheck,
  } = props.obj;

  useEffect(() => {
    // console.log('input.name', input.value)
    if (setErrCheck) {
      if (error) {
        setErrCheck(false);
      }
      else {
        setErrCheck(true);
      }
    }

  }, [error]);

  useEffect(() => {
    // Save instance for the further update

    let monthSettings = onlyMonth ? {
      dateFormat: 'MM-yyyy',
      view: 'months',
      minView: 'months'
    } : {
      dateFormat: 'dd-MM-yyyy'
    };

    dp.current = new AirDatepicker(inputRef.current, {
      ...monthSettings
    });


  }, []);



  const choiseEmpty = () => {

    if (input.value === 'empty') {
      input.onChange('');
    } else {
      input.onChange('empty');
    }

  }

  return (
    <>

      <div className="data-input-container">

        <InputMask
          {...input}
          value={input.value === 'empty' ? 'Дата неизвестна' : input.value}
          placeholder={placeholder}
          id={input.name}
          className={`input-date input-decorate ${checkErrorSubmit && error && 'input-error'}`}
          mask="__-__-____"
          replacement={{ _: /\d/ }}
          ref={inputRef}
          readOnly
        />
        <div
          className="check-race-empty-container"
        >
          <div
            className={`check-race-empty ${input.value === 'empty' ? 'active' : ''}`}
            onClick={() => { choiseEmpty() }}
          >
            <i></i>
            <span>Дата неизвестна</span>
          </div>
        </div>

      </div>
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </>
  );
}


const Input = ({ obj }) => {



  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}
    validate={obj.validate}
  />;
}



export default Input;