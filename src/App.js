import NavBar from "./components/Header/NavBar";
import Employer from "./components/Employer";
// import Counter from "./components/Main/Counter";
// import Banner from "./components/Header/Banner";
// import TopFooter from "./components/Footer/TopFooter";
// import Footer from "./components/Footer/Footer";
// import Features from "./components/Main/Features";
// import MainCarousel from "./components/Main/MainCarosusel";
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
      {/* arti */}
      {/* <NavBar /> */}
      {/* <Banner />
      <Features />
      <Counter countIncrease="5000" />
        <MainCarousel/>
       <TopFooter />
      <Footer title="Zaajira" /> 
       */}
    </BrowserRouter>
  );
}

export default App;
