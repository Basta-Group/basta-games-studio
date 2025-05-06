import React from "react";
import aboutImg1 from "../assets/about-basta-img-1.png";
import aboutImg2 from "../assets/about-basta-img-2.png";
import aboutImg3 from "../assets/about-basta-img-3.png";
import aboutImg4 from "../assets/about-basta-img-4.png";
import aboutGirl from "../assets/about-basta-girl.png";

const AboutBastaPlay: React.FC = () => {
  return (
    <section
      className="relative pt-20 bg-gradient-to-r from-[#1E255A] to-[#324ED7]"
      role="region"
      aria-label="About BastaPlay"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-row items-start mb-6 w-full justify-center lg:justify-start">
            <div
              className="w-1 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-[#FFB347] to-[#FF7B54] rounded-full mr-4"
              role="presentation"
            ></div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-left"
              role="heading"
              aria-level={2}
            >
              ABOUT BASTAPLAY
            </h2>
          </div>
          <p
            className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-lg"
            role="text"
          >
            Experience The Thrill Of Ultimate Gaming With Exa Gaming. Immerse
            Yourself In A World Of Captivating Slots, Featuring Innovative
            Themes, Stunning Graphics, And Massive Payouts. Enjoy Fair Gameplay,
            Top-Notch Security, And Exceptional Customer Support. Join Our
            Community Of Satisfied Players Today And Unlock A World Of Endless
            Entertainment!
          </p>
          <button
            className="bg-[#FF6248] hover:bg-[#ff8b6b] text-white px-7 py-3 mb-3 rounded-full font-semibold shadow-lg transition-colors flex items-center gap-2 mx-auto lg:mx-0 text-base sm:text-lg"
            role="button"
            aria-label="Contact us"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            CONTACT US{" "}
            <span className="ml-2" aria-hidden="true">
              ➔
            </span>
          </button>
        </div>

        <div
          className="w-full lg:w-1/2 mb-8 lg:mb-0 mt-auto"
          role="region"
          aria-label="About section images"
        >
          <div className="grid grid-cols-2 gap-4 items-stretch overflow-x-auto">
            {/* 2x2 grid of 4 images on the left */}
            <div
              className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 h-full min-w-[180px] sm:min-w-[260px] md:min-w-[320px]"
              role="list"
              aria-label="Statistics images"
            >
              <img
                src={aboutImg1}
                alt="1200 Games In Plan statistics"
                className="rounded-xl w-full min-w-[120px] sm:min-w-[160px] md:min-w-[180px] h-auto"
                role="img"
              />
              <img
                src={aboutImg2}
                alt="1M Game Launch statistics"
                className="rounded-xl w-full min-w-[120px] sm:min-w-[160px] md:min-w-[180px] h-auto"
                role="img"
              />
              <img
                src={aboutImg3}
                alt="20K+ Daily Users statistics"
                className="rounded-xl w-full min-w-[120px] sm:min-w-[160px] md:min-w-[180px] h-auto"
                role="img"
              />
              <img
                src={aboutImg4}
                alt="80 Games statistics"
                className="rounded-xl w-full min-w-[120px] sm:min-w-[160px] md:min-w-[180px] h-auto"
                role="img"
              />
            </div>
            {/* Girl image on the right, full height */}
            <div className="flex items-center justify-center h-full min-h-[180px] sm:min-h-[260px] md:min-h-[320px]">
              <img
                src={aboutGirl}
                alt="About BastaPlay mascot character"
                className="h-full"
                role="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBastaPlay;

<style>{`
  @media (max-width: 1024px) {
    .about-basta-play-container {
      flex-direction: column-reverse;
    }
  }
`}</style>;
