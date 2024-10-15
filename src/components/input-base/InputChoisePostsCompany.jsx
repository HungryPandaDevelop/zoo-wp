
import { Field } from 'redux-form';

import { useState, useEffect } from 'react';

import axios from 'axios';


import PostsFORM from '/src/components/input-base/parts/PostsCompaniesFORM'

const TemplateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    uid,
    post,
    setCurrentCompany
  } = props.obj;



  const [checkValues, setCheckValues] = useState(input.value ? JSON.parse(input.value) : []);

  const [listPosts, setListPosts] = useState([]);

  const [loadPosts, setLoadPosts] = useState(false);

  const getPosts = async () => {

    setLoadPosts(true);

    const response = await axios.post('/wp-json/get/posts',
      {
        user_id: uid,
        slug: post,
      });

    setListPosts(response.data);

    setLoadPosts(false);

  }


  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (listPosts.length > 0 && input.value) {
      console.log('listPosts', listPosts)
      listPosts.map(item => {

        if (item.id === (JSON.parse(input.value)[0])) {
          // console.log('listPosts', item);
          setCurrentCompany(item)
        }
      })
    }

  }, [listPosts, input])



  const onChangeCheck = (item) => {
    const { id } = item;
    setCheckValues(prevState => {
      if (prevState[0] === id) {
        input.onChange('');
        return '';
      } else {
        input.onChange(JSON.stringify([id]));
        return [id];
      }
    });

  }

  const [statusPopup, setStatusPopup] = useState(false)
  const [typeCompany, setTypeCompany] = useState(null)

  const choiseEmpty = () => {

    setCheckValues(prevState => {
      if (prevState[0] === 'person') {
        input.onChange('');
        return '';
      } else {
        input.onChange(JSON.stringify(['person']));
        return ['person'];
      }
    });

  }


  const onShowPopup = (status, type) => {
    // console.log('show')
    setStatusPopup(status);
    setTypeCompany(type)
  }
  // console.log('listPosts', listPosts)
  return (
    <div className="choise-inputs">
      {loadPosts ? 'Loading...' : (listPosts ? listPosts.map((item, index) => (
        <div
          key={index}
          onClick={() => { onChangeCheck(item) }}
          className={`choise-item ${checkValues.indexOf(item.id) >= 0 ? 'active' : ''}`}
        >
          {console.log('item.type_company', item.type_company)}
          {item.type_company && (item.type_company === 53 ? <div className='choise-item-type nurseries'>Питомник</div> :
            <div className='choise-item-type "shelter"'>Приют</div>)}
          <div className="choise-item-img">
            <img src={item.img ? item.img : '/wp-content/themes/zoonika/images/stub-pets.jpg'} alt="" />
          </div>
          <h4>{item.value}</h4>
        </div>
      )) : 'Нету полей')}
      <div>
        <span
          className="add-btn"
          onClick={() => { onShowPopup(true, [53]) }}
        >
          <i></i>
          <span>Добавить питомник</span>
        </span>
        <span
          className="add-btn"
          onClick={() => { onShowPopup(true, [54]) }}
        >
          <i></i>
          <span>Добавить приют</span>
        </span>

        <div>

          <span
            className={`check-race-empty ${checkValues[0] === 'person' ? 'active' : ''}`}
            onClick={() => { choiseEmpty() }}
          >
            <i></i>
            <span>Разместить как частное лицо</span>
          </span>
          <div className="input-hint">
            При размещении объявления от частного лица, контактные данные в объявлении выводятся из вашего профиля
          </div>
        </div>

      </div>


      {statusPopup && <PostsFORM
        onShowPopup={onShowPopup}
        typeCompany={typeCompany}
      />}
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