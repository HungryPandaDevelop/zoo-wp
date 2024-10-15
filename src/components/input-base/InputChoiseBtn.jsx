
import { Field } from 'redux-form';


const TemplateInput = (props) => {

  const {
    input
  } = props;

  const {
    options,
    multy
  } = props.obj;

  // console.log('opt', options)

  const onChangeCheck = (value) => {
    const toString = JSON.stringify(value);

    input.onChange(toString);

  }

  const getInputValue = input.value && JSON.parse(input.value);

  return (
    <div className="checkbox-container">
      {options.map((item, index) => (
        <div
          key={index}
          className={`choise-btn ${item.value} ${getInputValue.value === item.value ? 'active' : ''}`}
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