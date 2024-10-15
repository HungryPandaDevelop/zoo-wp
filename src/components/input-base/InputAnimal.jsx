import RenderInput from '/src/components/input/RenderInput';
import axios from 'axios';
import { Field } from 'redux-form';
import { useState, useEffect } from 'react';
// import { inputs } from '/src/components/forms/companies/inputs';


const TemplateInput = (props) => {


  const {
    input,
    meta: { error }
  } = props;


  const {
    placeholder,
    disabled,
    subfields,
  } = props.obj;




  const [listAnimals, setListAnimals] = useState([]);

  const [loadAnimals, setLoadAnimals] = useState(false);

  const [changeSelect, setChangeSelect] = useState(null);

  const getAnimals = async (term) => {
    setLoadAnimals(true)
    const response = await axios.post('/wp-json/get/animals/', { term: term });
    setListAnimals(response.data);
    setLoadAnimals(false);
    // console.log('response', response.data);
  }

  useEffect(() => {

    getAnimals(changeSelect);
  }, [changeSelect]);

  const renderAnimalsInput = (name) => {
    if (loadAnimals) { return 'Loading...'; }
    if (listAnimals.length === 0) { return ''; }
    return <RenderInput param={{
      ...subfields[1],
      options: listAnimals,
      name: name
    }} />
  }


  return (
    <div className="main-grid">
      <>
        <div className="col-6">
          <RenderInput param={{
            ...subfields[0],
            name: input.name + '.' + subfields[0].name,
            getAnimals: setChangeSelect,
            maker: 'animals'
          }} />
        </div>
        <div className="col-6">{renderAnimalsInput(input.name + '.' + subfields[1].name)}</div>
      </>
    </div>
  )
}

const Input = ({ obj }) => {
  return <Field
    name={obj.name}
    obj={obj}
    component={TemplateInput}
  />;
}


export default Input;
