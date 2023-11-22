// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
// import Booking from './pages/Booking';
import Film from './pages/Film';
import Footer from './pages/Footer';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
// import Photos from './pages/Photos';

function App() {
  return (
    <div>
      <Header />
      <main className='section'>
        <AboutUs />
        {/* <Gallery /> */}
        <Film />
        <Shop />
        <Footer />
      </main>

        {/* <BrowserRouter>
          <Routes>
            <Route path='bookings' element={<Booking />} />
            <Route path='photos' element={<Photos/>} />
          </Routes>
        
        </BrowserRouter> */}
    </div>
  );
}

export default App;
