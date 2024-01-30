import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aasiriyarkuzhu from "./components/Aasiriyar-kuzhu";
import PengalAmaippu from "./components/PengalAmaippu";
import Ithazgal from "./components/Ithazgal";
import Nigazhvugal from "./components/Nigazhvugal";
import Nirvagam from "./components/Nirvagam";
import PageNotFound from "./components/PageNotFound";
import AppLayout from "./components/AppLayout";
import Niruvanar from "./components/Niruvanar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home title="தவப்புதல்வி" />}></Route>
            <Route
              path="/Nirvagam"
              element={<Nirvagam title="நிர்வாகம்" />}
            ></Route>
            <Route
              path="/Niruvanar"
              element={<Niruvanar title="நிறுவனர்" />}
            ></Route>
            <Route
              path="/Aasiriyar-Kuzhu"
              element={<Aasiriyarkuzhu title="ஆசிரியர்-குழு" />}
            ></Route>
            <Route
              path="/Ithazhgal"
              element={<Ithazgal title="இதழ்கள்" />}
            ></Route>
            <Route
              path="/Nigalvugal"
              element={<Nigazhvugal title="நிகழ்வுகள்" />}
            ></Route>
            <Route
              path="/Pengal-Amaipu"
              element={<PengalAmaippu title="பெண்கள்அமைப்பு" />}
            ></Route>
          </Route>
          <Route
            exact
            path="*"
            element={<PageNotFound title="தவறான பதிவு" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
