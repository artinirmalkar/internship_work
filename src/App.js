import NavBar from "./components/Header/NavBar";
import Counter from "./components/Main/Counter";
import Banner from "./components/Header/Banner";
import TopFooter from "./components/Footer/TopFooter";
import Footer from "./components/Footer/Footer";
import Features from "./components/Main/Features";
import Card from "./static/Single Component/Card";
import Carousel from "./components/Main/Carousel";
import CardCarousel from "./static/Single Component/CardCarousel";
import MainCarousel from "./components/Main/MainCarosusel";


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Features />
      <Counter countIncrease="5000" />
        <MainCarousel/>
       <TopFooter />
      <Footer title="Zaajira" /> 
      
      
    </>
  );
}

export default App;
