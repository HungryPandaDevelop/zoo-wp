import {
  Navigate,
  Outlet
} from 'react-router-dom';

import {
  // useDispatch,
  useSelector
} from "react-redux";
// import { useEffect } from 'react';

// import { getNowDate } from '/src/store/thunks/getNowDate';
// import { logoutUser } from "/src/store";

const renderPrivateContent = () => {
  return <Outlet />;
};

const PrivateRoute = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (userData && !userData.token) {
  //     dispatch(logoutUser());
  //   }
  // }, []);

  const { userData } = useSelector((state) => {
    return state.users;
  });

  return (
    <div>
      {userData ? renderPrivateContent() : <Navigate to="/cabinet" />}
    </div>
  )
}

export default PrivateRoute
