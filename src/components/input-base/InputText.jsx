import { Field } from 'redux-form';
import { useState, useEffect } from 'react';


const TemplateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    placeholder,
    disabled,
    checkErrorSubmit,
  } = props.obj;



  const [firstLoad, setFirstLoad] = useState(0);


  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      input.onChange(input.value);
    }
  }, [input]);

  return (
    <>

      <input
        {...input}
        id={input.name}
        placeholder={placeholder}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''}`}
        disabled={disabled}
        autocomplete="false"
      />
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </>
  );
}



const Input = ({ obj }) => {
  return <Field
    name={obj.name}
    obj={obj}
    validate={obj.reqOr ? obj.validate : []}
    component={TemplateInput}
  />;
}



export default Input;