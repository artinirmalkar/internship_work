import NavBar from "./components/Header/NavBar";
import Employer from "./components/Employer";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QRcode from "./components/DownloadSection/QRcode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/QRcode" element={<QRcode />} />
        {/* <Route path='/login'  element={<Login/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
