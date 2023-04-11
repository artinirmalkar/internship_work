import "./App.css";
// import Card from "./static/Single Component/Card";
// import CardCarousel from "./static/Single Component/CardCarousel";
import NavBar from "./components/Header/NavBar";
import Counter from "./components/Main/Counter";import Banner from "./components/Header/Banner";

import TopFooter from "./components/Footer/TopFooter";
import Footer from "./components/Footer/Footer";
// import Profile from "./static/Single Component/Profile";
import Body from "./components/Main/Body";


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Body />
      <Counter />
      <TopFooter />
      <Footer title="Zaajira" />

      {/* <CardCarousel/> */}

{/* <Card/> */}
    
    </>
  );
}

export default App;
