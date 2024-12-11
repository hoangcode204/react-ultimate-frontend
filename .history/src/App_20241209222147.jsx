import './App.css';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
c

const App = () => {
  return (
    <>
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
