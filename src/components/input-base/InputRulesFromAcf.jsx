
import { Field } from 'redux-form';

import { useState, useEffect } from 'react';

import axios from 'axios';

const TemplateInput = (props) => {

  const [checkValues, setCheckValues] = useState([]);
  const [firstLoad, setFirstLoad] = useState(0);
  const [listValues, setListValues] = useState([]);
  const [loadValues, setLoadValues] = useState(false);


  const {
    input,
    meta: { error }
  } = props;

  const {
    idAnimal,
    race
  } = props.obj;



  const getFields = async () => {

    // setCheckValues([]);
    // input.onChange('');
    let valueFields;
    // console.log('race', input.name, race)
    if (race === 'porodi-koshki') {
      valueFields = REST_API_data[input.name + '_' + race].instructions;
    } else {
      valueFields = REST_API_data[input.name].instructions;
    }




    // console.log('valueFields', REST_API_data[input.name])
    if (idAnimal) {
      setLoadValues(true);

      const response = await axios.post('/wp-json/get/fields',
        {
          id_post: idAnimal,
          field_name: input.name
        });

      if (response.data.length > 0) {
        valueFields += ', ' + response.data;
      }
      setLoadValues(false);
    }


    valueFields = valueFields.split(', ');
    setListValues(valueFields);


  }


  useEffect(() => {
    getFields();
  }, [idAnimal, race]);



  useEffect(() => {
    if (input.value) {
      let toJson = JSON.parse(input.value);
      setCheckValues(toJson);

      // console.log('toJson', toJson)
    }


  }, []);






  const onChangeCheck = (value) => {

    setCheckValues(prevState => {
      let newState;

      if (prevState.indexOf(value) < 0) {
        newState = [...prevState, value];
      } else {
        newState = prevState.filter(el => el !== value);
      }

      // Преобразуем новый массив в строку
      let toString = JSON.stringify(newState);
      // Вызываем input.onChange с новой строкой
      input.onChange(toString);

      return newState;
    });

  }



  return (
    <div >
      {loadValues ? 'Loading...' : (listValues ? listValues.map((item, index) => (
        <div

          key={index}
          onClick={() => { onChangeCheck(item) }}
          className={`choise-btn ${checkValues.indexOf(item) >= 0 ? 'active' : ''}`}
        >
          {item}
        </div>
      )) : 'Нету полей')}
    </div>
  );
}

const Input = ({ obj }) => {

  return (
    <Field
      name={obj.name}
      obj={obj}
      validate={obj.validate}
      component={TemplateInput}
    />
  );



}


export default Input;