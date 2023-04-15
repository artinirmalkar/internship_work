import Landing from "./components/Pages/Landing/Landing";
import EmpLogin from "./components/Pages/EmpLogin/EmpLogin";
import EmpRegister from "./components/Pages/EmpRegister/EmpRegister";
import QRcode from "./components/Pages/QR Download Section/QRcode";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
