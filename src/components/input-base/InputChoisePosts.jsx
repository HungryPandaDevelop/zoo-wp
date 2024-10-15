
import { Field } from 'redux-form';

import { useState, useEffect } from 'react';

import axios from 'axios';

import PostsPetsFORMfull from '/src/components/input-base/parts/PostsPetsFORMfull'


const TemplateInput = (props) => {

  const [checkValues, setCheckValues] = useState([]);


  const {
    input,
    meta: { error }
  } = props;

  const {
    uid,
    post,
    single,
    choise
  } = props.obj;

  const [statusPopup, setStatusPopup] = useState(false);
  const onShowPopup = (status) => {
    console.log('show')
    setStatusPopup(status);
  }

  const [listAnimals, setListAnimals] = useState([]);

  const [loadAnimals, setLoadAnimals] = useState(false);

  const getAnimals = async () => {
    setLoadAnimals(true);

    const response = await axios.post('/wp-json/get/posts',
      {
        user_id: uid,
        slug: post
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



  return (
    <div className="choise-inputs">
      {loadAnimals ? 'Loading...' : (listAnimals ? listAnimals.map((item, index) => (
        <div

          key={index}
          onClick={() => { !choise && onChangeCheck(item) }}
          className={`choise-item ${checkValues.indexOf(item.id) >= 0 ? 'active' : ''}`}
        >
          <div className="choise-item-img">
            <img src={item.img ? item.img : '/wp-content/themes/zoonika/images/stub-pets.jpg'} alt="" />
          </div>
          <h4>{item.value}</h4>
        </div>
      )) : 'Нету полей')}

      {statusPopup && <PostsPetsFORMfull onShowPopup={onShowPopup} />}
      <div>
        <span
          className="add-btn"
          onClick={() => { onShowPopup(true) }}
        >
          <i></i>
          <span>Добавить питомца  </span>
        </span>
      </div>

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