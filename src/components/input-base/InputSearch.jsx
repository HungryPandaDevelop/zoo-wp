import { Field } from 'redux-form';
import { useState, useEffect, useRef } from 'react';


const TempateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    placeholder,
    options,
    inputValue,
    onChangeCheck
  } = props.obj;


  const [filterVal, setFilterVal] = useState('');

  const [optionsList, setOptionsList] = useState(options);

  useEffect(() => {
    setOptionsList(options);
  }, [options]);

  useEffect(() => {
    inputValue ? setFilterVal(inputValue.race.name) : setFilterVal(input.value ? input.value.name : '');
  }, [inputValue]);


  const [open, setOpen] = useState(false);


  const choiseOptions = (e) => {

    setOptionsList(options);

    setFilterVal(e.currentTarget.getAttribute('name'));

    input.onChange({ name: e.currentTarget.getAttribute('name'), parody: e.currentTarget.getAttribute('term') });

    // специально для объявлений
    if (inputValue) {
      inputValue.race = { name: e.currentTarget.getAttribute('name'), id: e.currentTarget.getAttribute('id') };
      onChangeCheck(inputValue);
    }

  }

  const onSearchOptions = (e) => {
    // console.log('e.target.value', e.target.value)

    setFilterVal(e.target.value);

    const dataSearch = options.filter(item => (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0));

    setOptionsList(dataSearch)


  }

  const clearFilterVal = () => {

    setFilterVal('');
    setOptionsList(options);

  }

  const renderOptionsList = (list) => {

    return (list.length > 0) ? list.map((item, index) => (
      <li
        key={index}
        name={item.name}
        id={item.id}
        term={item.terms}
        onClick={choiseOptions}
      >
        {item.name}</li>
    )) : (<li>Список пуст</li>);
  }


  return (
    <div className={`search-select ${open ? 'active' : ''}`} >
      <div className={`search-field-container ${filterVal.length > 0 ? 'search-choises' : ''}`}>
        <i onClick={clearFilterVal} ></i>
        <input
          {...input}
          value={filterVal}
          className="search-input input-decorate"
          placeholder={placeholder}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onChange={onSearchOptions}
        />
      </div>

      <ul className='ln' >
        {renderOptionsList(optionsList)}
      </ul>

    </div>


  );
}



const RenderInput = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}

  />;
}


export default RenderInput;