/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import GamesSection from "../GamesSection";
// import LogoSlider from "../LogoSlider";
import Portfolio from "../PopularGamesSection/portfolio";
import TeamMemberSection from "../teamMemberSection";
import ImageTextSection from "../reusableComponents/ImageTextSection";
import ImageTextSectionImg from "../../assets/game-studio/girl-game.png";
import ImageTextSectionImg2 from "../../assets/game-studio/global-reach-img.png";
import ImageTextSectionImg3 from "../../assets/game-studio/built-with-girl-bg.png";
import ImageTextSectionImg4 from "../../assets/game-studio/find-out.png";
import GameCreationSection from "../reusableComponents/GameCreationSection";
import AdvantagesSection from "../reusableComponents/AdvantagesSection";
import LogoSlider from "../LogoSlider";
import HeroSection from "../HeroSlider";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* hero-section */}
      <>
        <HeroSection />

        {/* Background image section at the bottom */}
      </>
      <ImageTextSection
        imageSrc={ImageTextSectionImg4} // Replace with the appropriate image source for the Viking illustration
        heading="FIND OUT MORE ABOUT OUR COMPANY"
        subheading="Welcome to Basta Games Studio - Where Imagination Meets Innovation!"
        paragraphLines={[
          "At Basta Games Studio, We Are Passionate About Creating Captivating Gaming Experiences That Engage, Entertain, and Inspire Players Worldwide.",
          "A Leading Creative Studio, We Specialize in The Design of High-Quality Slot Games, Character Concepts, Immersive Backgrounds, Interactive Gaming Elements, and Cutting-Edge Gaming Interfaces.",
          "Our Team of Seasoned Designers, Artists, and Developers is Dedicated to Pushing The Boundaries of Creativity and Technology. We Bring Your Ideas to Life With Stunning Visuals, Engaging Gameplay Mechanics, and User-Friendly Interfaces That Enhance Player Experiences and Drive Business Success.",
          "At Basta Games Studio, We Don’t Just Design Games; We Create Experiences. Let us Help You Bring Your Vision to Life With Our Comprehensive Range of Design Services, Tailored to Meet The Unique Needs of Your Project.",
        ]}
        imageLeft={true}
        className=""
        imgClassName="pb-2 xl:scale-[1.5] "
      />
      {/* Popular Games Slider Section */}
      {/* <PopularGamesSection /> */}
      <Portfolio />
      <AdvantagesSection />
      {/* About BastaPlay Section */}
      {/* <AboutBastaPlay /> */}
      {/* All Games Section */}
      <GamesSection hideFilterBar={true} />
      <ImageTextSection
        imageSrc={ImageTextSectionImg}
        heading="WHO WE ARE"
        paragraphLines={[
          "Basta Games Studio is a global game development company specializing in the iGaming industry. Our mission is to craft premium gaming experiences with original math models, immersive UI/UX, and powerful backend integration. Based in Malta with teams in Europe and Asia, we develop games that combine creativity, performance, and compliance.",
        ]}
        imageLeft={false}
        className=""
        imgClassName="md:scale-[1.35]"
      />
      {/* TeamMemberSection */}
      <TeamMemberSection />
      {/* ImageTextSection */}
      <ImageTextSection
        imageSrc={ImageTextSectionImg2}
        heading="GLOBAL REACH, REGULATORY READY"
        subheading="We Develop Games In Full Compliance With:"
        paragraphLines={[
          "Anjouan,",
          "Vanuatu",
          "Certified By: NglCert",
          "Coming soon: Ontario, Romania, Philippines, UKGC (UK), MGA (Malta)",
        ]}
        imageLeft={true}
        className=""
        imgClassName="scale-[1.2] lg:scale-[1.6]"
      />
      <GameCreationSection />
      <ImageTextSection
        imageSrc={ImageTextSectionImg3}
        heading="BUILT WITH THE BEST TOOLS"
        subheading=""
        paragraphLines={[
          "HTML5, Unity, PixiJS, JavaScript",
          "RGS-Ready Games",
          "Fully Mobile & Desktop Compatible",
          "Integrated With Payment Gateways",
          "Secure, Scalable, And Lightning-Fast",
        ]}
        imageLeft={false} // Ensures image appears on the right
        className="text-white py-20"
        imgClassName="scale-[1.2] lg:scale-[1.6]"
      />
      {/* AdvantagesSection */}
      {/* Contact Form Section */}
      {/* <section id="contact">
        <ContactForm />
      </section> */}
      {/* Partners Logo Slider */}
      <LogoSlider />
    </div>
  );
};

export default Home;
