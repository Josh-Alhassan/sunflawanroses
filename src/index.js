import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Booking from './pages/Booking';
import Photos from './pages/Photos';
import PhotoAll from './components/PhotoAll';
// import PhotoPage from './pages/PhotoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='bookings' element={<Booking />} />
            <Route path='photos' element={<Photos/>}>
              <Route path="all" element={<PhotoAll />} />
            </Route>
            {/* <Route path='photopage' element={<PhotoPage/>} /> */}
          </Routes>
        </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
