
import { Field } from 'redux-form';

const TemplateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    options

  } = props.obj;


  const getInputValue = input.value && JSON.parse(input.value);

  const onChangeCheck = (value) => {
    const toString = JSON.stringify(value);

    input.onChange(toString);
  }

  return (
    <div className="checkbox-container">
      {getInputValue.label}
      <hr />
      {options.map((item, index) => (
        <div
          key={index}
          className={`${getInputValue.value === item.value ? 'active' : ''}`}
          onClick={() => { onChangeCheck(item) }}
        >
          <div className="box" >
            {item.label}
          </div>

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