
import { useDispatch } from 'react-redux';
import { deletePost } from '/src/store';
import { Link } from 'react-router-dom';
import BtnEdit from '/src/pages/cabinet/parts/BtnEdit';
import BtnDelete from '/src/pages/cabinet/parts/BtnDelete';

import Status from '/src/pages/cabinet/sales/Status';

const CompaniesItem = (el) => {
  const { name, id, token, status, item } = el;
  const dispatch = useDispatch();

  const onDeletePost = (id) => {
    dispatch(deletePost({ id: id, token: token, type: 'sales' }))
  }



  return (
    <li className='post-item post-item-sales'>
      <h3>
        <Link to={`/cabinet/sales/${id}`}>
          {name}
        </Link>
      </h3>
      <div className='vertical-align'>
        <Status post={item} status={status} token={token} />
      </div>
      <div className='btn-container'>
        <Link className="copy-btn post-item-btn" to={`/cabinet/sales/new/${id}`} >
          <span>Скопировать</span>
          <i></i>
        </Link>
        <BtnEdit to={`/cabinet/sales/${id}`} />
        <BtnDelete onClick={() => { onDeletePost(id) }} />
      </div>
    </li>
  )
}

export default CompaniesItem;