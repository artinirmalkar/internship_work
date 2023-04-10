import { Navbar } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import Body from "./components/Main/Body";

function App() {
  return (
    <>
      <NavBar />
      <Body />
      <Footer title="Zaajira" />
    </>
  );
}

export default App;
