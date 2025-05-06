/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ContactForm from "../ContactForm";
import GamesSection from "../GamesSection";
import HeroSlider from "../HeroSlider";
import PopularGamesSection from "../PopularGamesSection";
// import LogoSlider from "../LogoSlider";
import AboutBastaPlay from "../AboutBastaPlay";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B13] overflow-x-hidden">
      {/* Hero Section */}
      <HeroSlider />

      {/* Popular Games Slider Section */}
      <PopularGamesSection />

      {/* About BastaPlay Section */}
      <AboutBastaPlay />

      {/* All Games Section */}
      <GamesSection hideFilterBar={true} />

      {/* Contact Form Section */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Partners Logo Slider */}
      {/* <LogoSlider /> */}
    </div>
  );
};

export default Home;
