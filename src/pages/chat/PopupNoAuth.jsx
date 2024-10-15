import { useDispatch } from 'react-redux';

import {
  setShowChat,
} from '/src/store';


const PopupNoAuth = () => {
  const dispatch = useDispatch();
  return (
    <div className="popup element-show show popup-noauth">
      <div className="popup-overlay popup-overlay-js"></div>
      <div className="popup-container auto">
        <div className="close-btn close-btn--popup close-js" onClick={() => { dispatch(setShowChat(false)) }}></div>
        <div className="form-default">
          <div className="popup-noauth-info">
            <span>
              <h3>Войдите,</h3>
              <div className="popup-noauth-text">
                чтобы открыть все возможности<br />  Зооники
              </div>
            </span>
          </div>
          <div className="popup-noauth-img"></div>
        </div>
        <div className="btn-container">
          <a href="/cabinet" className="btn btn--gold">
            Войти
          </a>
        </div>
      </div>
    </div>
  )
}

export default PopupNoAuth