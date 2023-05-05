import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aasiriyarkuzhu from "./components/Aasiriyar-kuzhu";
import Contact from "./components/Contact";
import Ithazgal from "./components/Ithazgal";
import Nigazhvugal from "./components/Nigazhvugal";
import Nirvagam from "./components/Nirvagam";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/நிர்வாகம்" element={<Nirvagam />}></Route>
          <Route path="/ஆசிரியர்-குழு" element={<Aasiriyarkuzhu />}></Route>
          <Route path="/இதழ்கள்" element={<Ithazgal />}></Route>
          <Route path="/நிகழ்வுகள்" element={<Nigazhvugal />}></Route>
          <Route path="/தொடர்பு-கொள்ள" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
