import RenderInput from '/src/components/input/RenderInput';
import { useState, useEffect } from 'react';
import axios from 'axios';

const InputAnimalsItem = ({ removeEl, index, item, subfields }) => {

  const [changeSelect, setChangeSelect] = useState(null);

  const [listAnimals, setListAnimals] = useState([]);

  const [loadAnimals, setLoadAnimals] = useState(false);

  // const [newValue, setNewValue] = useState(false);


  const getAnimals = async (term) => {

    setLoadAnimals(true);

    const response = await axios.post('/wp-json/get/animals/', { term: term });
    setListAnimals(response.data);
    setLoadAnimals(false);

    // console.log('item', item)
    // setNewValue(true);
    // console.log('response', response.data);
  }

  useEffect(() => {
    console.log('changeSelect', changeSelect)
    if (changeSelect) {

      getAnimals(changeSelect);
    }
  }, [changeSelect]);

  const renderAnimalsInput = (name) => {
    if (loadAnimals) { return 'Loading...'; }
    if (listAnimals.length === 0) { return 'Выберете тип породы'; }
    return <RenderInput param={{
      ...subfields[1],
      options: listAnimals,
      name: name,
      changeSelect: changeSelect
    }} />
  }


  return (
    <div className='main-grid complex-line'>

      <div className="col-6" >
        <RenderInput param={{
          ...subfields[0],
          name: item + '.' + subfields[0].name,
          getAnimals: setChangeSelect,
        }} />
      </div>

      <div className="col-5">{renderAnimalsInput(item + '.' + subfields[1].name)}</div>
      <span
        onClick={() => removeEl(index)}
      >
        delete
      </span>
    </div>
  )
}

export default InputAnimalsItem
