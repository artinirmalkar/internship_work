import React from "react";
import Counter from "./Main/Counter";
import Banner from "./Header/Banner";
import TopFooter from "./Footer/TopFooter";
import Footer from "./Footer/Footer";
import Features from "./Main/Features";
import MainCarousel from "./Main/MainCarosusel";
import HireCandidate from "./Header/HireCandidate";

export default function Landing() {
  return (
    <div>
      <Banner heading="Enabling jobs for millions of talented workers">
        <HireCandidate />
      </Banner>
      <Features />
      <Counter countIncrease="5000" />
      <MainCarousel />
      <TopFooter />
      <Footer title="Zaajira" />
    </div>
  );
}
