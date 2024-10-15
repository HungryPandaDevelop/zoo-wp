
import Sidebar from "/src/pages/cabinet/parts/Sidebar";

const Main = () => {

  return (
    <div className="main-grid">
      <div className="col-4 col-xs-12">
        <Sidebar />
      </div>
      <div className="col-8 col-xs-12">
        <h1>Добро пожаловать!</h1>
      </div>
    </div>
  )
}

export default Main
