import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const About=lazy(()=>import("./pages/about/About"));
const Blogs=lazy(()=>import ("./pages/blogs/Blogs"));
const Contact=lazy(()=>import ("./pages/contact/Contact"));
const Events=lazy(()=> import ("./pages/events/Events"));
const Gallery=lazy(()=>import (  "./pages/gallery/Gallery"));
const Home=lazy(()=>import("./pages/home/Home"));
const Speaker=lazy(()=>import("./pages/speaker/Speaker"));
import "./App.css";
import React from "react";
import Loader from './assets/img/preloader.gif'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback ={<div className="loaderGif"><img src={Loader}></img></div>}>
        <Routes>
          <Route path="/">
            {/* <Route path="/login" element={<Login/>} /> */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="events" element={<Events />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="speaker" element={<Speaker />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;