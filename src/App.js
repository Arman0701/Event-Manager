import './App.css';
import {BrowserRouter , Route , Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/> {/*  Main page  */}
          <Route path="/cinemas" element={<Cinemas />}/>{/* For cinemas  */}
          <Route path="/concerts" element={<Concerts />}/>{/*  For concerts  */}
          <Route path="/theaters" element={<Theaters />}/> {/*  For theaters  */}
          <Route path="/clubsAndPubs" element={<ClubsAndPubs />}/>{/*  For clubs and pubs events  */}
          <Route path="/register" element={<Register />}/> {/* Register page  */}
          <Route path="/login" element={<Login />}/> {/* Login page  */}
          <Route path="/contacts" element={<Contacts />}/>{/* About us page  */}
          <Route path="/profile" element={<Profile />} />{/* For profile page  */}
          <Route path="/event/" element={<Event  />} /> {/* for each event  */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
