import "./App.css";
import NavBar from "./components/Header/NavBar";
import Banner from "./components/Header/Banner";

import TopFooter from "./components/Footer/TopFooter";
import Footer from "./components/Footer/Footer";

import Body from "./components/Main/Body";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Body />

      <TopFooter />
      <Footer title="Zaajira" />
    </>
  );
}

export default App;
