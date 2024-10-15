import { Field } from 'redux-form';
import { useState, useEffect } from 'react';


const TemplateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    checkErrorSubmit,
  } = props.obj;



  const [firstLoad, setFirstLoad] = useState(0);

  const [stringMulty, setStringMulty] = useState({});

  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      input.onChange(input.value);

      setStringMulty(JSON.parse(input.value))

    } else {
      let jsonMulty = JSON.stringify(stringMulty);
      input.onChange(jsonMulty)
    }


  }, [input, stringMulty]);


  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setStringMulty(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="main-grid">
      <input
        type="hidden"
        {...input}

      />
      <div className="col-6">
        <input
          type="text"
          className='input-decorate'
          placeholder='от'
          id={input.name + '_first'}
          value={stringMulty.first}
          name="first"
          onChange={(e) => onChangeInput(e)}
        /></div>
      <div className="col-6">
        <input
          type="text"
          name="second"
          placeholder='до'
          className='input-decorate'
          value={stringMulty.second}
          id={input.name + '_second'}
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </div>
  );
}



const Input = ({ obj }) => {
  // console.log('o', obj);
  return <Field
    name={obj.name}
    obj={obj}
    validate={obj.validate}
    component={TemplateInput}
  />;
}



export default Input;