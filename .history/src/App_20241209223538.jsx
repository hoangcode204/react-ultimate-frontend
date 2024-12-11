import "./App.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
const ParentComponent = (props) => {
  <>
    return <div>parent components</div>;
  </>;
};
const ChildComponent = (props) => {
  return <div>child component</div>;
};
const App = () => {
  return (
    <>
      {/* <ParentComponent/> */}
      <ParentComponent></ParentComponent>
      <Header /> {/* Header luôn nằm trên cùng */}
      <div className="main-content">
        <Outlet />
        {/* Phân trang nằm ở đây */}
      </div>
      <Footer /> {/* Footer luôn nằm dưới */}
    </>
  );
};

export default App;
