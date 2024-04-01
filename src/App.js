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
    <div className="App poppins-regular">
      <div className='Left'>
        <Header />
        <Menu />
        <Footer />
      </div>
      <div className='right'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:tipo' element={<Videos />} />
          <Route path='/:tipo/:video' element={<VideoDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
