import { useState, useEffect, useRef } from 'react';
import { Field, } from 'redux-form';


const TempateInput = (props) => {
  // console.log('hi', props)
  const {
    input,
    // meta: { error }

  } = props;

  const {
    placeholder,
    options,
  } = props.obj;

  // создание селекта

  const selectRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [select, setSelect] = useState(placeholder);

  const [filtringOptions, setFiltringOptions] = useState([]);

  const [firstLoad, setFirstLoad] = useState(0);

  useEffect(() => {

    if (input.value) {
      let toJson = JSON.parse(input.value);
      onSelectedChange(toJson)
    } else {
      setFiltringOptions(options)
    }


  }, []);




  const renderOptions = filtringOptions.map((el) => {
    return (
      <li
        key={el.value}
        onClick={() => { onSelectedChange(el) }}>
        {el.label}
      </li>
    )
  });


  const onSelectedChange = (el) => {

    let newOptions = options.filter(item => item.value !== el.value);

    setFiltringOptions(newOptions);

    setSelect(el.label);

    let toString = JSON.stringify(el)
    input.onChange(toString);



  }


  return (
    <div
      ref={selectRef}
      className={`react-select ${open ? 'active' : ''}`}

    >
      <span>{select}</span>
      <input
        {...input}
        onFocus={() => { setOpen(true) }}
        onBlur={() => { setOpen(false) }}
      />
      <i></i>
      <ul className='ln'>
        {renderOptions}
      </ul>
    </div>
  )
}

const Input = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}
  />

}


export default Input;