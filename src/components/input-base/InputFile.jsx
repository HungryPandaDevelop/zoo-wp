

import { useState, useEffect } from 'react';

import { Field, change } from 'redux-form';

import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";

import { updateUser } from '/src/store';

import { useDropzone } from 'react-dropzone'

const TemplateInput = (props) => {

  const dispatch = useDispatch();

  const userData = useSelector((state) => {
    return state.users.userData
  });




  const {
    input,
  } = props;

  const {

  } = props.obj;


  const [firstLoad, setFirstLoad] = useState(0);


  useEffect(() => {
    // console.log('input.value', input.value)
    if (input.value) {
      // setFirstLoad(1);
      const stringifiedUrls = JSON.parse(input.value);

      // console.log('input.value', stringifiedUrls)
      input.onChange(input.value);
      setFileUrls(stringifiedUrls)

    }
  }, [input]);



  // const [fileUrls, setFileUrls] = useState(userData[input.name] ? JSON.parse(userData[input.name]) : []);
  const [fileUrls, setFileUrls] = useState([]);
  const [loadingFile, setLoadingFile] = useState(false);

  const config = {
    headers: {
      Authorization: 'Bearer ' + userData.token,
      'Content-Type': 'multipart/form-data'
    }
  };

  const onDrop = (acceptedFiles) => {

    acceptedFiles.forEach(async (file) => {
      setLoadingFile(true);

      const formData = new FormData();
      formData.append(`file`, file, file.name);

      try {
        const response = await axios.post(`/wp-json/wp/v2/media`, formData, config);

        setLoadingFile(false);

        setFileUrls(prev => {
          const updatedFileUrls = [...prev, { url: response.data.source_url, id: response.data.id }];

          const stringifiedUrls = JSON.stringify(updatedFileUrls);

          input.onChange(stringifiedUrls); // Вызываем input.onChange с обновленным состоянием fileUrls
          dispatch(updateUser({ ...userData, [input.name]: stringifiedUrls }));

          return updatedFileUrls; // Возвращаем обновленное состояние fileUrls
        });

        console.log('resp upload', response.data);

        // Обновление значения поля в состоянии Redux


      } catch (err) {
        console.log('err', err)
      }
    });

  }

  const deleteFile = async (deleteItem) => {

    try {
      const response = await axios.delete(`/wp-json/wp/v2/media/${deleteItem}?force=True`, config);
      console.log('res delete', response);
      const filterFiles = fileUrls.filter(item => item.id !== deleteItem);
      setFileUrls(filterFiles);

      const stringifiedUrls = JSON.stringify(filterFiles);
      dispatch(updateUser({ ...userData, [input.name]: stringifiedUrls }));
      input.onChange(stringifiedUrls);

    } catch (err) {
      console.log('err', err);
    }

  }



  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] }
  });



  const renderImgs = () => {

    return fileUrls.map((img, index) => (
      <div className='dragdrop-file-item' key={index}>
        <div className="dragdrop-file-img">
          <img src={img.url} alt="" />
        </div>
        <i data-id={img.id} onClick={() => { deleteFile(img.id) }}></i>
      </div>
    ))
  }


  return (
    <>
      <div className={`dragdrop-zone ${isDragActive ? 'dragged' : ''}`} {...getRootProps()}>
        <input {...getInputProps()} />
        {
          loadingFile === true ?
            <div className="preloader"></div>
            :
            <>
              <i className='file-upload-img'></i>
              <span>Перетащите несколько файлов сюда или нажмите, чтобы выбрать файлы</span>
            </>

        }
      </div>
      <div className="dragdrop-uploaded">
        {renderImgs()}
      </div>
    </>
  )
}


const Input = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TemplateInput}
  />

}



export default Input;