import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Menu from "./components/menu/Menu.jsx";
import Home from "./components/home/Home.jsx";
import Videos from "./components/videos/Videos.jsx";
import VideoDetail from "./components/video-detail/VideoDetail.jsx";

function App() {

  return (
    <div className="App">
      <div className='Left'>
        <div className='Left_up'>
          <Header />
          <Menu />
        </div>
        <Footer />
      </div>
      <div className='Right'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:seccion' element={<Videos />} />
          <Route path='/:seccion/:video' element={<VideoDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
