import Landing from "./components/Pages/Landing/Landing";
import EmpLogin from "./components/Pages/EmpLogin/EmpLogin";
import EmpRegister from "./components/Pages/EmpRegister/EmpRegister";
import Employers from "./components/CommonComponent/Footer/Employers";
import PrivacyPolicy from "./components/CommonComponent/Footer/PrivacyPolicy";
import QRcode from "./components/Pages/QR Download Section/QRcode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsAndCondition from "./components/CommonComponent/Footer/TermsAndCondition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/EmpLogin" element={<EmpLogin />} />
        <Route path="/QRcode" element={<QRcode />} />
        <Route path="/EmpRegister" element={<EmpRegister />} />
        <Route path="/Employers" element={<Employers />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
