import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatePost } from '/src/store';



const Status = ({ post, token, status }) => {

  const dispatch = useDispatch();

  const tempStatus = status ? JSON.parse(status) : { value: null };

  const btnArr = [
    { label: 'Активно', value: 'active' },
    { label: 'Архив', value: 'archive' },
    { label: 'Черновик', value: 'draft' }
  ];

  const newStatus = (item) => {


    const newPost = {
      id: post.id,
      token: token,
      type: 'sales',
      status_post: JSON.stringify(item)

    }

    dispatch(updatePost(newPost));
  }

  const choiseStatus = (item) => {
    newStatus(item)
    // setTempStatus(item)
  }


  const renderBtn = () => {
    return btnArr.map((item, index) => (
      <span
        className={`status-chouse-item ${tempStatus.value === item.value ? ' active' : ''}`}
        onClick={() => { choiseStatus(item) }}
        key={index}>
        {item.label}
      </span>
    ));
  };

  return (
    <div className='status-chouse-container'>
      {renderBtn()}
    </div>
  )
}

export default Status
