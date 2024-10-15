
import { Field } from 'redux-form';

import { useState, useEffect } from 'react';

import axios from 'axios';

import PostsPetsFORM from '/src/components/input-base/parts/PostsPetsFORM'

const TemplateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    uid,
    post,
    single,
    gender,
    popupVal
  } = props.obj;



  const [checkValues, setCheckValues] = useState(input.value ? JSON.parse(input.value) : []);

  const [listAnimals, setListAnimals] = useState([]);

  const [loadAnimals, setLoadAnimals] = useState(false);

  const getAnimals = async () => {
    setLoadAnimals(true);

    const response = await axios.post('/wp-json/get/posts',
      {
        user_id: uid,
        slug: post,
        gender: gender
      });

    setListAnimals(response.data);

    setLoadAnimals(false);

  }


  useEffect(() => {
    getAnimals();
  }, [])


  const onChangeCheck = ({ id }) => {

    if (single) {

      setCheckValues(prevState => {
        if (prevState[0] === id) {
          input.onChange('');
          return '';
        } else {
          input.onChange(JSON.stringify([id]));
          return [id];
        }
      });

    } else {
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
  }

  const [statusPopup, setStatusPopup] = useState(false)



  const onShowPopup = (status) => {
    console.log('show')
    setStatusPopup(status);
  }

  return (
    <div className="choise-inputs">
      {loadAnimals ? 'Loading...' : (listAnimals ? listAnimals.map((item, index) => (
        <div

          key={index}
          onClick={() => { onChangeCheck(item) }}
          className={`choise-item ${checkValues.indexOf(item.id) >= 0 ? 'active' : ''}`}
        >
          <div className="choise-item-img">
            <img src={item.img ? item.img : '/wp-content/themes/zoonika/images/stub-pets.jpg'} alt="" />
          </div>
          <h4>{item.value}</h4>
        </div>
      )) : 'Нету полей')}

      <div>
        <span
          className="add-btn"
          onClick={() => { onShowPopup(true) }}
        >
          <i></i>
          <span>Добавить {gender && (gender === 'boy' ? 'папу' : 'маму')}  </span>
        </span>
      </div>

      {statusPopup && <PostsPetsFORM onShowPopup={onShowPopup} popupVal={popupVal} />}
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