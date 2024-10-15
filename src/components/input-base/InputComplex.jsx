import { useEffect } from 'react';

import { FieldArray } from 'redux-form';

import RenderInput from '/src/components/input/RenderInput';


const TemplateInput = (
  {
    subfields,
    fields
  }) => {


  useEffect(() => {
    fields.push();
  }, []);


  return (
    <>
      {fields.map((item, index) => (
        <div key={index} >
          <RenderInput
            param={{ ...subfields[0], name: item + '.' + subfields[0].name }}
          />
          <RenderInput
            param={{ ...subfields[1], name: item + '.' + subfields[1].name }}
          />
          <span
            onClick={() => fields.remove(index)}
          >
            delete
          </span>
        </div>
      ))}
      <div>
        <div onClick={() => { fields.push(); }}>
          <i></i><span>+</span>
        </div>
      </div>
    </>
  )
}

const Input = ({ obj }) => {

  return (
    <FieldArray
      subfields={obj.subfields}
      name={obj.name}
      component={TemplateInput}

    />
  )
}


export default Input;
