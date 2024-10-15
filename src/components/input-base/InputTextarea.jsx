import { Field } from 'redux-form';
import { useEffect } from 'react';

const TempateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    placeholder,
    maxLength,
    checkErrorSubmit,
  } = props.obj;


  useEffect(() => {
    // if (input.value && firstLoad === 0) {
    // setFirstLoad(1);
    input.onChange(input.value);
    // }
  }, [input]);

  return (
    <>
      <textarea
        {...input}
        type="textarea"
        id={input.name}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} `}
        placeholder={placeholder}
        maxLength={maxLength}
      >
      </textarea>
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