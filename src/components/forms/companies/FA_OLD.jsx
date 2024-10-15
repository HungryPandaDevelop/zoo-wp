import RenderInput from '/src/components/input/RenderInput';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { inputs } from '/src/components/forms/companies/inputs';


const FindAnimals = ({ num }) => {


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
    if (changeSelect) { getAnimals(changeSelect); }
  }, [changeSelect]);

  const renderAnimalsInput = () => {
    if (loadAnimals) { return 'Loading...'; }
    if (listAnimals.length === 0) { return 'Выберете тип породы'; }
    return <RenderInput param={{
      ...inputs.specialization,
      options: listAnimals,
      num: num
    }} />
  }

  return (
    <div className="main-grid">
      <div className="col-6">
        <RenderInput param={{
          ...inputs.species,
          getAnimals: setChangeSelect,
          num: num
        }} />
      </div>
      <div className="col-6">{renderAnimalsInput()}</div>
    </div>
  )
}

export default FindAnimals;
