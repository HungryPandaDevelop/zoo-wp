import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostItem from '/src/pages/cabinet/sales/Item';
import Hint from '/src/pages/cabinet/sales/Hint';


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

  const [showHint, setShowHint] = useState(false);


  useEffect(() => {

    dispatch(getPosts({ id: userData.user_id, type: 'sales' }));

  }, []);


  return (
    <div className='posts-list'>
      <div className="roof-sales-cabinet">
        {showHint ? <Hint setShowHint={setShowHint} /> : <div className='tag' onClick={() => { setShowHint(true) }}>Значения стутасов</div>}
      </div>
      <Link className='btn btn--blue-border long-btn' to="/cabinet/sales/new">+ Добавить объявление</Link>

      {isLoadingPost ? (<div>Loading...</div>) : postsList.length === 0 ? (<div></div>) : (
        <div className="posts-list-body">
          <ul className='ln'>
            <li className='post-item post-item-head'>
              <h3>
                Название
              </h3>
              <div >
                <span>Статус</span>
              </div>
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
                status={item.acf.status_post}
              />
            })}
          </ul>
        </div>)}

    </div>
  )
}

export default List;