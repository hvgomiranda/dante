import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Datos from "./data_base/database.json";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Menu from "./components/menu/Menu.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Videos from "./components/videos/Videos.jsx";
import Contact from './components/contact/Contact.jsx';
import VideoDetail from "./components/video-detail/VideoDetail.jsx";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleHomeMouseMove = (event) => {
    if (!isHome) return;

    const sidebar = event.currentTarget.querySelector(".Left");
    if (!sidebar) return;

    const sidebarRect = sidebar.getBoundingClientRect();
    const isOverSidebar =
      event.clientX >= sidebarRect.left &&
      event.clientX <= sidebarRect.right &&
      event.clientY >= sidebarRect.top &&
      event.clientY <= sidebarRect.bottom;

    event.currentTarget.classList.toggle("App--home-nav-active", isOverSidebar);

    if (isOverSidebar) {
      event.currentTarget.style.setProperty("--home-nav-opacity", 1);
      return;
    }

    const fadeDistance = window.innerWidth / 2;
    const opacity = Math.max(0, Math.min(1, 1 - event.clientX / fadeDistance));

    event.currentTarget.style.setProperty("--home-nav-opacity", opacity);
  };

  return (
    <div
      className={`App${isHome ? " App--home" : ""}`}
      onMouseMove={handleHomeMouseMove}
      style={{ "--home-nav-opacity": 1 }}
    >
      <div className='Left'>
        <Header />
        <Menu />
        <Footer />
      </div>
      <div className='Right'>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/video/:video' element={<VideoDetail Datos={Datos}/>} />
          <Route path='/section/:seccion' element={<Videos Datos={Datos} />} />
          <Route path='/' element={<Home Media={Datos}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
