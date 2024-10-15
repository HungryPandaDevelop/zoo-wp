
import Choise from '/src/pages/auth/Choise';
import CabinetEdit from '/src/pages/cabinet/CabinetEdit';

import { useSelector } from "react-redux";

const MainPage = () => {

  const userInfo = useSelector((state) => {
    // console.log(state.users.userData)
    return state.users.userData
  });
  console.log("userInfo !!!!", userInfo)
  return (
    <>
      {userInfo ? <CabinetEdit /> : <Choise />}
    </>
  )
};


export default MainPage;
