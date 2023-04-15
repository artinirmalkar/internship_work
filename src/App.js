import NavBar from "./components/Header/NavBar";
import EmpLogin from "./components/EmpLogin";
import Landing from "./components/Landing";
import EmpRegister from "./components/EmpRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Landing />} />
          <Route path="/EmpLogin" element={<EmpLogin />} />
          <Route path="/EmpRegister" element={<EmpRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
