import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aasiriyarkuzhu from "./components/Aasiriyar-kuzhu";
import Contact from "./components/Contact";
import Ithazgal from "./components/Ithazgal";
import Nigazhvugal from "./components/Nigazhvugal";
import Nirvagam from "./components/Nirvagam";
import PageNotFound from "./components/PageNotFound";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home title="தவப்புதல்வி"/>}></Route>
            <Route path="/நிர்வாகம்" element={<Nirvagam title="நிர்வாகம்"/>}></Route>
            <Route path="/ஆசிரியர்-குழு" element={<Aasiriyarkuzhu title="ஆசிரியர்-குழு"/>}></Route>
            <Route path="/இதழ்கள்" element={<Ithazgal title="இதழ்கள்"/>}></Route>
            <Route path="/நிகழ்வுகள்" element={<Nigazhvugal title="நிகழ்வுகள்"/>}></Route>
            <Route path="/தொடர்பு-கொள்ள" element={<Contact title="தொடர்பு-கொள்ள"/>}></Route>
          </Route>
          <Route exact path="*" element={<PageNotFound title="தவறான பதிவு"/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
