import React,{ Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Loader from './assets/img/preloader.gif'

const ContactUs=lazy(()=>import('./components/ContactUs'))
const EventDetails=lazy(()=>import('./components/EventDetails'))

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div className='loaderGif'>
      <img src={Loader}></img>
    </div>}>
        <Routes>
          <Route path="/" element={<MainPage />}/> {/*  Main page  */}
          <Route path="/cinemas" element={<Cinemas />}/>{/* For cinemas  */}
          <Route path="/concerts" element={<Concerts />}/>{/*  For concerts  */}
          <Route path="/theaters" element={<Theaters />}/> {/*  For theaters  */}
          <Route path="/clubsAndPubs" element={<ClubsAndPubs />}/>{/*  For clubs and pubs events  */}
          <Route path="/register" element={<Register />}/> {/* Register page  */}
          <Route path="/login" element={<Login />}/> {/* Login page  */}
          <Route path="/contacts" element={<ContactUs />}/>{/* About us page  */}
          <Route path="/profile" element={<Profile />} />{/* For profile page  */}
          <Route path="/event/" element={<Event  />} /> {/* for each event  */}
          <Route path="/error" element={<Error404  />} /> {/* for each event  */}
        </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
