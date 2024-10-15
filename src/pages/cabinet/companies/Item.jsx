import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '/src/store';

import BtnEdit from '/src/pages/cabinet/parts/BtnEdit';
import BtnDelete from '/src/pages/cabinet/parts/BtnDelete';


const CompaniesItem = ({ name, id, token }) => {
  const dispatch = useDispatch();


  const onDeletePost = (id) => {
    dispatch(deletePost({ id: id, token: token, type: 'companies' }))
  }

  return (
    <li className='post-item'>
      <h3>
        <Link to={`/cabinet/companies/${id}`}>
          {name}
        </Link>
      </h3>
      <div className='btn-container'>
        <BtnEdit to={`/cabinet/companies/${id}`} />
        <BtnDelete onClick={() => { onDeletePost(id) }} />
      </div>
    </li>
  )
}

export default CompaniesItem;