import NavBar from "./components/Header/NavBar";
import Counter from "./components/Main/Counter";
import Banner from "./components/Header/Banner";
import TopFooter from "./components/Footer/TopFooter";
import Footer from "./components/Footer/Footer";


// import Card from "./static/Single Component/Card";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Counter />
      <TopFooter />
      <Footer title="Zaajira" />

    {/* <Card/> */}
    </>
  );
}

export default App;
