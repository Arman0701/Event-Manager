import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Events from "./pages/events/Events";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import Speaker from "./pages/speaker/Speaker";
function App() {


  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
  
    </div>
  );
}

export default App;


