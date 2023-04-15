import NavBar from "./components/Header/NavBar";
import EmpLogin from "./components/EmpLogin";
import Landing from "./components/Landing";
import EmpRegister from "./components/EmpRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QRcode from "./components/DownloadSection/QRcode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/EmpLogin" element={<EmpLogin />} />
        <Route path="/QRcode" element={<QRcode />} />
        <Route path="/EmpRegister" element={<EmpRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
