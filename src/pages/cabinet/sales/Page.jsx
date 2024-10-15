
import Sidebar from '/src/pages/cabinet/parts/Sidebar';

import List from '/src/pages/cabinet/sales/List';



const Page = () => {


  return (
    <div className="main-grid">
      <div className="col-3 col-xs-12">
        <Sidebar />
      </div>
      <div className="col-9 col-xs-12">

        <h1 className="sales">Мои объявления</h1>
        <List />
      </div>
    </div>
  )
}

export default Page;