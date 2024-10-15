import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostItem from '/src/pages/cabinet/companies/Item';


import { getPosts } from '/src/store';

import { useSelector, useDispatch } from 'react-redux';

const List = () => {
  const dispatch = useDispatch();

  const { postsList, isLoadingPost, errorPost } = useSelector((state) => {
    return state.posts;
  });

  const { userData } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {

    dispatch(getPosts({ id: userData.user_id, type: 'companies' }));
  }, []);

  // console.log('isLoadingCompanies', companiesList)


  return (
    <div className='posts-list'>
      <Link className='btn btn--blue-border long-btn' to="/cabinet/companies/new">+ Добавить компанию</Link>
      {isLoadingPost ? (<div>Loading...</div>) : postsList.length === 0 ? (<div></div>) : (
        <div className="posts-list-body">
          <ul className='ln'>
            <li className='post-item post-item-head'>
              <h3>
                Название
              </h3>
              <div className="btn-container">
                <span>Действия</span>
              </div>
            </li>
            {postsList.map((item, index) => {
              return <PostItem
                id={item.id}
                name={item.title.rendered}
                item={item}
                token={userData.token}
              />
            })}
          </ul>
        </div>)}
    </div>
  )
}

export default List;