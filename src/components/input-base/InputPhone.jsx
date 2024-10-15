import { Field } from 'redux-form';
import { useState, useEffect } from 'react';

import InputMask from 'react-input-mask';



const TempateInput = (props) => {
  const {
    input,
    meta: { error }
  } = props;

  const {
    checkErrorSubmit,
    setErrCheck,
  } = props.obj;

  const [firstLoad, setFirstLoad] = useState(0);


  useEffect(() => {

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
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      input.onChange(input.value);
    }
  }, [input]);
  return (
    <>
      {<InputMask
        {...input}
        mask='+7(999)999-99-99'
        placeholder='+79999999999'
        maskChar={null}
        id={input.name}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''} `}
      />}

      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </>
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