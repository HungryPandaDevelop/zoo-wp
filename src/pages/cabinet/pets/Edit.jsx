import { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '/src/pages/cabinet/parts/Sidebar';

import Form from '/src/components/forms/pets/Form';

import { useSelector, useDispatch } from 'react-redux';

import { getPostSingle, updatePost } from '/src/store';

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { postSingle, isLoadingPost, errorPost } = useSelector((state) => {
    return state.posts;
  });
  const { userData } = useSelector((state) => {
    return state.users;
  });

  const formData = useSelector((state) => {

    return state.form.petsForm;
  });
  const submitSuccess = async () => {


    let sendData = { ...formData.values };

    if (sendData.race) {
      sendData.race = JSON.stringify(sendData.race);
    }


    dispatch(updatePost(sendData)).then(res => {
      navigate('/cabinet/pets', { replace: true });
    });
  };

  useEffect(() => {
    // setLoadingSingle(true);

    dispatch(getPostSingle({ id: params.id, type: 'pets' }));
  }, []);



  const renderPostForm = () => {

    return <>
      <Form
        param={{ submitSuccess }}
        btnText='Обновить'
        title={`Редактировать племенной фонд ${postSingle.title.rendered}`}
        initialValues={{
          id: params.id,
          token: userData.token,
          title: postSingle.title.rendered,
          type: 'pets',
          excerpt: postSingle.excerpt.rendered,
          content: postSingle.content.rendered,
          ...postSingle.acf,

        }}
      /></>
  }

  return (
    <div className="main-grid">
      <div className="col-3 col-xs-12">
        <Sidebar />
      </div>
      <div className="col-9 col-xs-12 cabinet-body">
        {(isLoadingPost) ? ('Loading...') : (postSingle && renderPostForm())}


      </div>
    </div>
  )
}

export default Edit;