import './App.css';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Datos from "./data_base/database.json";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Menu from "./components/menu/Menu.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Videos from "./components/videos/Videos.jsx";
import VideoDetail from "./components/video-detail/VideoDetail.jsx";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleWindowMouseOut = (event) => {
      if (event.relatedTarget || event.toElement) return;

      const app = document.querySelector(".App--home");
      if (!app) return;

      app.style.setProperty("--home-nav-opacity", 0);
      app.classList.remove("App--home-nav-active");
      app.classList.remove("App--home-nav-visible");
    };

    window.addEventListener("mouseout", handleWindowMouseOut);

    return () => {
      window.removeEventListener("mouseout", handleWindowMouseOut);
    };
  }, [isHome]);

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
      event.currentTarget.classList.add("App--home-nav-visible");
      return;
    }

    const fadeDistance = window.innerWidth * 0.3;
    const opacity = Math.max(0, Math.min(1, 1 - event.clientX / fadeDistance));

    event.currentTarget.style.setProperty("--home-nav-opacity", opacity);
    event.currentTarget.classList.toggle("App--home-nav-visible", opacity > 0.05);
  };

  return (
    <div
      className={`App${isHome ? " App--home" : ""}`}
      onMouseMove={handleHomeMouseMove}
      style={{ "--home-nav-opacity": isHome ? 0 : 1 }}
    >
      <div className='Left'>
        <Header />
        <Menu />
        <Footer />
      </div>
      <div className='Right'>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/video/:video' element={<VideoDetail Datos={Datos}/>} />
          <Route path='/section/:seccion' element={<Videos Datos={Datos} />} />
          <Route path='/' element={<Home Media={Datos}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
