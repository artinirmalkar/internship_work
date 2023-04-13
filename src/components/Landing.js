import React from "react";
// import NavBar from "../components/Header/NavBar";
import Counter from "./Main/Counter";
import Banner from "./Header/Banner";
import TopFooter from "./Footer/TopFooter";
import Footer from "./Footer/Footer";
import Features from "./Main/Features";
// import Card from "../static/Single Component/Card";
// import Carousel from "../components/Main/Carousel";
// import CardCarousel from "../static/Single Component/CardCarousel";
import MainCarousel from "./Main/MainCarosusel";

export default function Landing() {
  return (
    <div>
      <Banner />
      <Features />
      <Counter countIncrease="5000" />
      <MainCarousel />
      <TopFooter />
      <Footer title="Zaajira" />
    </div>
  );
}
