import { Field } from 'redux-form';

import { useState, useEffect } from 'react';


const TemplateInput = (props) => {

  const {
    input,
  } = props;

  const {
    sendWithoutBtn,
    options
  } = props.obj;


  const [showEmodsy, setShowEmodsy] = useState(false);

  useEffect(() => {
    if (input.value) {

      sendWithoutBtn();
    }
  }, [input]);

  // const emodsyArr = ['emodsy-el-1', 'emodsy-el-2', 'emodsy-el-3'];
  const emodsyCount = 16;
  const choiseEmodsy = (i) => {

    input.onChange('/wp-content/themes/zoonika/images/emodsy/' + i + '.jpg');
    setShowEmodsy(false);
  }

  return (
    <div className="emodsy-container">
      {showEmodsy && <div className="emodsy-popup">
        {[...Array(emodsyCount)].map((el, index) => (
          <div
            key={index}
            className={`emodsy-el emodsy-el-${index + 1}`}
            onClick={() => { choiseEmodsy(index + 1) }}
          ></div>))}

      </div>}
      <div onClick={() => { setShowEmodsy(!showEmodsy) }} className="emodsy-btn"></div>
    </div>
  )
}

const Input = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TemplateInput}
  />

}

export default Input