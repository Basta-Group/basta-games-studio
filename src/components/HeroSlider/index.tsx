import { useState, useEffect } from "react";
import Slider from "react-slick";
import sliderBg from "../../assets/game-studio/slider-main-bg.png";
import bannerImg1 from "../../assets/game-studio/girl-blue.png";
import bannerImg2 from "../../assets/game-studio/pirate.png";
import bannerImg3 from "../../assets/banner-img-3.png";
import bannerImg4 from "../../assets/banner-img-4.png";

import bgImageblue from "../../assets/game-studio/blue-border-bg.png";
import mobileBanner from "../../assets/game-studio/mobile-banner.png";

// Slick Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  pauseOnHover: false,
  swipe: true,
  draggable: true,
  centerMode: false,
  centerPadding: "0%",
  dotsClass: "slick-dots",
};

// Mobile settings
const mobileSliderSettings = {
  ...sliderSettings,
  swipe: false,
  draggable: false,
  infinite: false,
  dots: true,
};

const slides = [
  {
    id: 1,
    title: (
      <>
        WE BUILD GAMES THAT
        <br className="responsive-br" />
        PLAYERS REMEMBER
      </>
    ),
    description:
      "Custom Slot Games, Crash Games, And Live Experiences – Fully Certified And Ready To Launch.",
    buttons: [
      {
        text: "VIEW OUR GAMES",
        href: "/games",
        className:
          "bg-[#FFD700] text-black px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-[#FFD700]/90 transition-colors text-sm md:text-base",
      },
      {
        text: "CONTACT US",
        href: "/contact",
        className:
          "bg-[#28292C] backdrop-blur-[2px] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-white/30 transition-colors text-sm md:text-base",
      },
    ],
    mobileImages: [
      {
        src: mobileBanner,
        alt: "Pirate character in mobile view",
        className: "w-full h-auto pb-40",
      },
    ],
    desktopImages: [
      {
        src: bannerImg2,
        alt: "Pirate character in desktop view",
        className: "absolute left-0 top-10 w-[50%] max-w-[600px] h-auto",
      },
      {
        src: bannerImg1,
        alt: "Girl character in desktop view",
        className: "absolute right-0 top-40 w-[50%] max-w-[400px] h-auto",
      },
    ],
  },
  {
    id: 2,
    title: (
      <>
        WE BUILD GAMES THAT
        <br className="responsive-br" />
        PLAYERS REMEMBER
      </>
    ),
    description:
      "Custom Slot Games, Crash Games, And Live Experiences – Fully Certified And Ready To Launch.",
    buttons: [
      {
        text: "VIEW OUR GAMES",
        href: "/games",
        className:
          "bg-[#FFD700] text-black px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-[#FFD700]/90 transition-colors text-sm md:text-base",
      },
      {
        text: "CONTACT US",
        href: "/contact",
        className:
          "bg-[#28292C] backdrop-blur-[2px] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-white/30 transition-colors text-sm md:text-base",
      },
    ],
    mobileImages: [
      {
        src: mobileBanner,
        alt: "Pirate character in mobile view",
        className: "w-full h-auto pb-40",
      },
    ],
    desktopImages: [
      {
        src: bannerImg3,
        alt: "Pirate character in desktop view",
        className: "absolute left-0 top-10 w-[50%] max-w-[600px] h-auto",
      },
      {
        src: bannerImg4,
        alt: "Girl character in desktop view",
        className: "absolute right-0 top-55 w-[50%] max-w-[400px] h-auto",
      },
    ],
  },
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative">
      <Slider
        {...(isMobile ? mobileSliderSettings : sliderSettings)}
        className="relative overflow-visible hero-slider"
      >
        {slides.map((slide) => (
          <>
            <div className="relative">
              <div
                key={slide.id}
                className="px-0 py-0 transition-all duration-300"
              >
                <div
                  className="relative  mt-12 lg:mt-0 lg:overflow-hidden transition-all duration-300 h-full slide-bg-wrapper opacity-[0.5] hidden lg:block"
                  style={{
                    backgroundImage: `url(${sliderBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                {/* Text content centered */}
                <div className="absolute top-5 lg:top-10 left-1/2 transform -translate-x-1/2 z-2 flex flex-col items-center justify-center h-full w-full max-w-[700px] text-center py-16 px-4 z-[51]">
                  <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-white text-sm md:text-lg mb-6 max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    {slide.buttons.map((button, index) => (
                      <a
                        key={index}
                        href={button.href}
                        className={button.className}
                      >
                        {button.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                {/* Images */}
                {isMobile
                  ? slide.mobileImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={image.className}
                      />
                    ))
                  : slide.desktopImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={image.className}
                      />
                    ))}
              </div>
            </div>
          </>
        ))}
      </Slider>

      {/* Styles */}
      <style>{`
        .slide-bg-wrapper {
          position: relative;
          min-height: 600px;
        }

        .hero-slider .slick-dots {
          bottom: 70px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 32px;
          z-index: 2;
        }
        .hero-slider .slick-dots li {
          margin: 0;
        }
        .hero-slider .slick-dots li button {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .hero-slider .slick-dots li button:before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #bcbec4;
          opacity: 1;
          transition: all 0.2s;
        }
        .hero-slider .slick-dots li.slick-active button:before {
          background: #fff;
          border: 2px solid #fff;
          box-sizing: border-box;
          width: 8px;
          height: 8px;
        }
        .hero-slider .slick-dots li.slick-active button:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #bcbec4;
        }
        .hero-slider .slick-dots {
          gap: 32px;
        }

        @media (max-width: 640px) {
          .logo-img {
            max-height: 8rem;
            padding: 0.5rem;
          }

          .hero-slider .slick-dots {
            gap: 6px;
          }
          .slide-bg-wrapper {
            min-height: 400px;
          }
        }

        @media (max-width: 1280px) {
          .responsive-br {
            display: none;
          }
        }
      `}</style>
      <section
        className="w-full h-[40px] sm:h-[120px] bg-cover bg-no-repeat bg-top absolute bottom-[0px] z-[2]"
        style={{ backgroundImage: `url(${bgImageblue})` }}
      ></section>
    </div>
  );
};

export default HeroSection;
