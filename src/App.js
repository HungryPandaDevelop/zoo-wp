import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from '/src/blocks/PrivateRoute';
import ScrollTop from '/src/blocks/ScrollTop';

import Registration from '/src/pages/auth/Registration';
import Authorization from '/src/pages/auth/Authorization';
import ForgotPassword from '/src/pages/auth/ForgotPassword';
import ResetPassword from '/src/pages/auth/ResetPassword';


import MainPage from '/src/pages/MainPage';

// import CabinetEdit from '/src/pages/cabinet/CabinetEdit';

import Sales from '/src/pages/cabinet/sales/Page';
import SalesNew from '/src/pages/cabinet/sales/New';
import SalesEdit from '/src/pages/cabinet/sales/Edit';

import Companies from '/src/pages/cabinet/companies/Page';
import CompaniesNew from '/src/pages/cabinet/companies/New';
import CompaniesEdit from '/src/pages/cabinet/companies/Edit';

import Pets from '/src/pages/cabinet/pets/Page';
import PetsNew from '/src/pages/cabinet/pets/New';
import PetsEdit from '/src/pages/cabinet/pets/Edit';

import Chat from '/src/pages/chat/Page';



const App = () => {




  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/cabinet/" element={<MainPage />} />
          <Route path="/cabinet/" element={<PrivateRoute />} >
            {/* <Route path='/cabinet/edit' element={<CabinetEdit />} /> */}
            <Route path='/cabinet/sales' element={<Sales />} />
            <Route path='/cabinet/companies' element={<Companies />} />
            <Route path='/cabinet/companies/new' element={<CompaniesNew />} />
            <Route path='/cabinet/companies/:id' element={<CompaniesEdit />} />
            <Route path='/cabinet/pets' element={<Pets />} />
            <Route path='/cabinet/pets/new' element={<PetsNew />} />
            <Route path='/cabinet/pets/:id' element={<PetsEdit />} />
            <Route path='/cabinet/sales' element={<Sales />} />
            <Route path='/cabinet/sales/new' element={<SalesNew />} />
            <Route path='/cabinet/sales/new/:id' element={<SalesNew />} />
            <Route path='/cabinet/sales/:id' element={<SalesEdit />} />

            <Route path='/cabinet/chat' element={<Chat />} />
            <Route path='/cabinet/chat/:id' element={<Chat />} />

          </Route>

          <Route path="/cabinet/registration" element={<Registration />} />
          <Route path="/cabinet/authorization" element={<Authorization />} />
          <Route path="/cabinet/forgot" element={<ForgotPassword />} />
          <Route path="/cabinet/reset" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </>
  );

}


export default App;


