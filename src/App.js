import NavBar from "./components/Header/NavBar";
import Employer from "./components/Employer";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Landing />} />
          <Route path="/employer" element={<Employer />} />
          {/* <Route path='/login'  element={<Login/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
