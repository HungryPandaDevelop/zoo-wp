import { Field } from 'redux-form';
import { useState, useEffect } from 'react';



const TemplateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;



  const [firstLoad, setFirstLoad] = useState(0);
  const [stringMulty, setStringMulty] = useState({});

  const [inputs, setInputs] = useState(['']);

  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      input.onChange(input.value);

      const parseValue = JSON.parse(input.value);

      setInputs(Object.keys(parseValue));

      setStringMulty(parseValue)

    } else {
      let jsonMulty = JSON.stringify(stringMulty);
      input.onChange(jsonMulty)

      console.log('jsonMulty', jsonMulty)
    }
    // console.log('jsonMulty', stringMulty)

  }, [input, stringMulty]);

  const addInput = () => {
    setInputs([...inputs, '']);
  }
  const removeInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1); // Удаляем input с указанным индексом из списка
    setInputs(newInputs);


    // Удаляем соответствующую запись в stringMulty
    setStringMulty(prevState => {
      const newState = {};
      // Обновляем индексы в stringMulty
      Object.keys(prevState).forEach((key, idx) => {
        if (parseInt(key) !== index) {
          newState[idx < index ? key : idx - 1] = prevState[key];
        }
      });
      return newState;
    });
  }

  const onChangeInput = (e) => {

    const { name, value, id } = e.target;

    const updatedValue = { ...stringMulty[id], [name]: value }; // Обновляем соответствующее значение

    setStringMulty(prevState => ({
      ...prevState,
      [id]: updatedValue
    }));

  }


  return (
    <>
      <input
        {...input}
      />

      {inputs.map((item, index) => (
        <div key={index}>
          <input
            value={stringMulty[index] && stringMulty[index].first}
            name={`first`}
            id={index}
            onChange={(e) => onChangeInput(e)}
          />
          <input
            value={stringMulty[index] && stringMulty[index].second}
            name={`second`}
            id={index}
            onChange={(e) => onChangeInput(e)}
          />
          <button type="button" onClick={() => removeInput(index)}>Удалить</button>
        </div>))}



      <div><div className='btn btn-reg' onClick={addInput}>+</div></div>
    </>
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