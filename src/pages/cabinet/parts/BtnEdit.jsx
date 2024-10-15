import { Link } from 'react-router-dom';

const BtnEdit = ({ to }) => {
  return (
    <Link to={to} className='edit-btn post-item-btn'>
      <span>Редактировать</span>
      <i></i>
    </Link>
  )
}

export default BtnEdit
