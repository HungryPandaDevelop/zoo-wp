

import { FieldArray } from 'redux-form';
import { useState, useEffect } from 'react';


import RenderInput from '/src/components/input/RenderInput';

import axios from 'axios';

const TemplateInput = (props) => {


  const {
    fields,
    meta: { error }
  } = props;


  const {
    setSpecializations
    // placeholder,
    // disabled,
    // subfields,
  } = props.obj;

  // const [changeSelect, setChangeSelect] = useState(null);

  const [listAnimals, setListAnimals] = useState([]);

  const [loadAnimals, setLoadAnimals] = useState(false);

  const getAnimals = async (term) => {

    setLoadAnimals(true);

    const response = await axios.post('/wp-json/get/animals/');
    // console.log(response.data)
    setListAnimals(response.data);
    setLoadAnimals(false);

  }

  useEffect(() => {
    getAnimals();

  }, []);

  useEffect(() => {
    // console.log(fields.getAll());
    setSpecializations(fields.getAll())
    // fields.push();
  }, [fields]);



  const removeEl = (num) => {
    // console.log('index', num)
    fields.remove(num)
  }
  if (loadAnimals) { return 'Loading...'; }
  if (listAnimals.length === 0) { return 'Выберите тип породы'; }

  return (
    <div className="complex-container">
      {fields.map((item, index) => {
        // console.log('item', item)
        return <div className="complex-line">
          <RenderInput param={{
            name: item,
            type: 'search',
            options: listAnimals,
          }} />
          <div className="btn-container">
            <div
              className="delete-btn"
              onClick={() => removeEl(index)}
            >
              <span>Удалить</span>
              <i></i>
            </div></div>
        </div>
      })}

      <div className='col-12'>
        <a className='add-btn' onClick={() => { fields.push(); }}>
          <i></i><span>Добавить поле</span>
        </a>
      </div>
    </div>
  )
}

const Input = ({ obj }) => {
  return <FieldArray
    name={obj.name}
    obj={obj}
    component={TemplateInput}
  />;
}


export default Input;
