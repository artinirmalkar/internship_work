import "./App.css";
import NavBar from "./components/Header/NavBar";

import TopFooter from "./components/Footer/TopFooter";
import Footer from "./components/Footer/Footer";

import Body from "./components/Main/Body";

function App() {
  return (
    <>
      <NavBar />
      <Body />

      <TopFooter />
      <Footer title="Zaajira" />
    </>
  );
}

export default App;
