import { Field } from 'redux-form';
import { useState, useEffect } from 'react';


const TemplateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    placeholder,
    checkErrorSubmit,
    setErrCheck,
  } = props.obj;

  const [showPass, setShowPass] = useState(false);


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


  return (
    <>
      <div className="password-field">
        <input
          type={showPass ? ("text") : ("password")}
          {...input}
          placeholder={placeholder}
          className={`input-decorate ${checkErrorSubmit && error && 'input-error'}`}
          autocomplete="false"
        />
        <i data-visibility={showPass} onClick={() => { setShowPass(!showPass) }}></i>
      </div>
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </>
  )
}

const Input = ({ obj }) => {



  return <Field
    name={obj.name}
    validate={obj.validate}
    obj={obj}
    component={TemplateInput}
  />;
}

export default Input;