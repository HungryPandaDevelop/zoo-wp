
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from '/src/components/forms/password/Form';


import axios from 'axios';


const ResetPassword = () => {

  const navigate = useNavigate();

  let [searchParams] = useSearchParams()

  const formData = useSelector((state) => {
    return state.form.regFormId
  });




  const submitSuccess = async () => {
    console.log('n', searchParams.get('email'), searchParams.get('code'), formData.values.user_pass)
    const data = {
      'email': searchParams.get('email'),
      'code': searchParams.get('code'),
      'password': formData.values.user_pass
    }
    try {
      const response = await axios.post('/wp-json/bdpwr/v1/set-password', data);
      toast.success('Пароль изменен')
      navigate('/cabinet/authorization/', { replace: true });
      console.log('send update', response)
    } catch (err) {
      toast.error('Ошибка')
      console.log("err", err)
    }
  };



  return (
    <div className="main-full page-auth">
      <h1>Поменять пароль</h1>
      <Form param={{ submitSuccess }} />
    </div>
  )
}

export default ResetPassword
