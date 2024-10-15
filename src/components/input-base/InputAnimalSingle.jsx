import axios from 'axios';
import { useState, useEffect } from 'react';

import InputSearch from '/src/components/input-base/InputSearch'; // поле search


import { Field } from 'redux-form';

const TemplateInput = (props) => {

  const {
    input,
    invalid,
    meta: { error }
  } = props;

  const {
    setIdAnimal,
    setRace,
    num
  } = props.obj;


  const [loadAnimals, setLoadAnimals] = useState(false);
  const [listDog, setListDog] = useState([]);
  const [listCat, setListCat] = useState([]);


  const [listAnimals, setListAnimals] = useState([]);

  const [inputValue, setInputValue] = useState(input.value ? JSON.parse(input.value) : '');


  const getAnimals = async (term) => {
    setLoadAnimals(true)


    const response = await axios.post('/wp-json/get/animals/', {
      'term': term
    });

    setLoadAnimals(false)
    return response.data;
  }

  const getInputValueView = inputValue && inputValue.view;
  const getInputValueRace = inputValue && inputValue.race;

  useEffect(() => {

    // ??? setIdAnimal && inputValue && setIdAnimal(inputValue.race.id);

    const fetchDogs = async () => {
      const dogs = await getAnimals('porodi-sobak');
      // console.log('dogs', dogs)
      setListDog(dogs);
      if (getInputValueView && getInputValueView.value === 'porodi-sobak') {
        setListAnimals(dogs);
      }
    };

    const fetchCats = async () => {
      const cats = await getAnimals('porodi-koshki');
      // console.log('cats', cats)
      setListCat(cats);
      if (getInputValueView && getInputValueView.value === 'porodi-koshki') {
        setListAnimals(cats);
      }
    };
    setRace && setRace(getInputValueView.value);
    fetchDogs();
    fetchCats();

  }, []);






  const onChangeCheck = (value) => {
    const toString = JSON.stringify(value);

    setInputValue(value);

    if (value.view.value === 'porodi-sobak') {
      setListAnimals(listDog);
      // console.log("value", value.view.value, listDog)
    }
    if (value.view.value === 'porodi-koshki') {
      setListAnimals(listCat);
      // console.log("value", value.view.value, listCat)
    }
    console.log('setRace', value.view.value)
    setRace && setRace(value.view.value);
    input.onChange(toString);
  }


  // const onChangeLoad = () => {
  //   getAnimals(inputValue.view.value);
  // }

  const view = [{ label: 'Собака', value: 'porodi-sobak' }, { label: 'Кошка', value: 'porodi-koshki' }];

  const choiseEmpty = () => {


    setInputValue(prevState => {
      let newState;

      newState = { view: { label: null, value: null }, race: { name: 'Без породы', id: null } };

      const toString = JSON.stringify(newState);
      input.onChange(toString);

      return newState;
    });


  }
  // console.log('listAnimals', listAnimals)
  return (

    <>
      <div className="input-box">
        <label><b>{num}. Вид питомца</b></label>
        <div>
          {view.map((el, index) => (
            <div
              key={index}
              className={`target-sale-option ${el.value} ${getInputValueView.value === el.value ? 'active' : ''}`}
              onClick={() => {
                onChangeCheck({ view: { label: el.label, value: el.value }, race: { name: '', id: '' } });
              }}
            >
              <div className="box">
                <i></i>
                <span>{el.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="input-box">
        <label><b>{num + 1}. Выбрать породу</b></label>

        {!loadAnimals && !getInputValueView ? (<div className='search-select'><span className='search-input input-decorate'>Выберите породу</span></div>) : (
          <InputSearch obj={{
            name: 'race',
            options: listAnimals,
            onChangeCheck: onChangeCheck,
            inputValue: inputValue
          }} />
        )}

        <div
          className="check-race-empty-container"
        >
          <div
            className={`check-race-empty ${getInputValueRace.id === null ? 'active' : ''}`}
            onClick={() => { choiseEmpty() }}
          >
            <i></i>
            <span>Без породы</span>
          </div>
        </div>
      </div>

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
