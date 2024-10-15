import Form from '/src/components/forms/chat/Form';
import { sendMessage } from '/src/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const MessaageForm = () => {

  const dispatch = useDispatch();

  const [reqOr, setReqOr] = useState(true);

  const formData = useSelector((state) => {
    return state.form.chatForm;
  });

  useEffect(() => {
    // console.log('formData', formData)
    if (formData && formData.values) {
      if (formData.values.fileChat || formData.values.imgEmodsy) {
        setReqOr(false);
      } else {
        setReqOr(true);
      }
    } else {
      setReqOr(true);
    }

  }, [formData]);


  const submitSuccess = () => {


    let sendValues = { ...formData.values };
    if ((!sendValues?.message && sendValues.fileChat) || (!sendValues?.message && sendValues.imgEmodsy)) {
      sendValues.message = ' ';
    }

    console.log('sendValues', sendValues)

    dispatch(sendMessage(sendValues));

  };



  return (
    <div className='messages-panel-footer'>
      <Form param={{
        submitSuccess,
        reqOr
      }} />
    </div>
  )
}

export default MessaageForm;