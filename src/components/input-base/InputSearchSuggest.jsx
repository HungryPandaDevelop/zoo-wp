import { Field } from 'redux-form';
import { useState, useEffect } from 'react';


const TemplateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    placeholder,
    // disabled,
    checkErrorSubmit,
  } = props.obj;



  // const [firstLoad, setFirstLoad] = useState(0);
  // const [currentLocation, setCurrentLocation] = useState(null);


  useEffect(() => {
    if (input.value) {
      // setFirstLoad(1);
      input.onChange(input.value);
    }


  }, [input]);

  const { ymaps } = window;
  useEffect(() => {
    // setCurrentLocation(input.value.coords);

    setTimeout(() => {
      const suggest = new ymaps.SuggestView(input.name);

      suggest.events.add('select', (e) => {

        const val = String(e.get('item').value.trim());

        const myGeocoder = ymaps.geocode(val);

        myGeocoder
          .then(res => {

            console.log('res', res)

            const coords = [res.geoObjects.get(0).geometry._coordinates[0], res.geoObjects.get(0).geometry._coordinates[1]]

            const currentValue = { 'address': val, 'coords': coords };

            input.onChange(JSON.stringify(currentValue));
            // setCurrentLocation(coords);
          });
      });


    }, 1000)


  }, [ymaps]);
  return (
    <>
      <input
        id={input.name}
        placeholder={placeholder}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''}`}
        defaultValue={input.value && JSON.parse(input.value).address}
      />

      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </>
  );
}



const Input = ({ obj }) => {
  // console.log('o', obj);
  return <Field
    name={obj.name}
    obj={obj}
    validate={obj.validate}
    component={TemplateInput}
  />;
}



export default Input;