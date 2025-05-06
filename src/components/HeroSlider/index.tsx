import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import bannerImg1 from "../../assets/banner-img-1.png";
import bannerImg2 from "../../assets/banner-img-2.png";
import bannerImg3 from "../../assets/banner-img-3.png";
import bannerImg4 from "../../assets/banner-img-4.png";
import bannerImg5 from "../../assets/banner-img-5.png";
import bannerImg6 from "../../assets/banner-img-6.png";
import bannerImg7 from "../../assets/banner-img-7.png";

// Custom arrow components
const NextArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:!content-['']`}
      style={{
        ...style,
        display: "block",
        right: "5%",
        zIndex: 1,
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:!content-['']`}
      style={{
        ...style,
        display: "block",
        left: "5%",
        zIndex: 1,
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

// Slick Slider settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: "13%",
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "0%",
      },
    },
  ],
};

// Add this for mobile settings
const mobileSliderSettings = {
  ...sliderSettings,
  arrows: false,
  dots: false,
  swipe: false,
  draggable: false,
  infinite: false,
};

const slides = [
  {
    id: 1,
    title: (
      <>
        Take Your&nbsp;
        <br className="responsive-br" />
        Gaming Business To&nbsp;
        <br className="responsive-br" />
        The Next Level
      </>
    ),
    description:
      "We Provide Unique Gamified Products Using Cutting-Edge Technologies. Your Platform With Our Games Will Be The Best",
    buttons: [
      {
        text: "SEE ALL GAMES",
        href: "/games",
        className:
          "bg-[#4A90FF] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-[#4A90FF]/90 transition-colors text-sm md:text-base",
      },
      {
        text: "CONTACT US",
        href: "/contact",
        className:
          "bg-white/20 backdrop-blur-[2px] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-white/30 transition-colors text-sm md:text-base",
      },
    ],
    mobileImages: [
      {
        src: bannerImg3,
        alt: "Viking character in mobile view",
        className:
          "h-[300px] w-auto object-contain relative top-[-80px] left-[50px] scale-[1.3]",
      },
      {
        src: bannerImg1,
        alt: "Warrior character in mobile view",
        className:
          "h-[300px] w-auto  object-contain relative left-[-50px] z-50  scale-[1.65]",
      },
      {
        src: bannerImg2,
        alt: "Girl character in desktop view",
        className:
          "h-[200px] w-auto object-contain relative right-[100px] top-[-130px]  scale-[1.4]",
      },
    ],
    desktopImages: [
      {
        src: bannerImg3,
        alt: "Warrior character in desktop view",
        className:
          "absolute right-[90px] sm:right-[120px] md:right-[166px] top-10 z-40 h-[240px] sm:h-[320px] md:h-[600px] w-auto",
      },
      {
        src: bannerImg1,
        alt: "Viking character in desktop view",
        className:
          "absolute right-[180px] sm:right-[240px] md:right-[170px] top-10 z-30 h-[240px] sm:h-[320px] md:h-[600px] w-auto",
      },
      {
        src: bannerImg2,
        alt: "Girl character in desktop view",
        className:
          "absolute right-[-100px] top-10 z-20 h-[240px] sm:h-[320px] md:h-[500px] w-auto hidden xl:block",
      },
    ],
    background:
      "bg-[#FB6F4D] lg:bg-gradient-to-r lg:from-[#FF7B54] lg:to-[#FFB347]",
  },
  {
    id: 2,
    title: (
      <>
        Discover &nbsp;
        <br className="responsive-br" />
        Epic Adventures
        <br className="responsive-br" />
        &nbsp;Await You
      </>
    ),
    description:
      "Embark on thrilling quests with our immersive games designed to captivate and entertain. Join the adventure today!",
    buttons: [
      {
        text: "EXPLORE QUESTS",
        href: "/games",
        className:
          "bg-[#4A90FF] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-[#4A90FF]/90 transition-colors text-sm md:text-base",
      },
      {
        text: "GET STARTED",
        href: "/contact",
        className:
          "bg-white/20 backdrop-blur-[2px] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-white/30 transition-colors text-sm md:text-base",
      },
    ],
    mobileImages: [
      {
        src: bannerImg4,
        alt: "Mage character in mobile view",
        className: " w-auto",
      },
    ],
    desktopImages: [
      {
        src: bannerImg6,
        alt: "Knight character in desktop view",
        className:
          "absolute right-[90px] sm:right-[120px] md:right-[166px] top-10 z-40 h-[240px] sm:h-[320px] md:h-[370px] w-auto",
      },
      {
        src: bannerImg4,
        alt: "Mage character in desktop view",
        className:
          "absolute right-[180px] sm:right-[240px] md:right-[170px] top-10 z-30 h-[240px] sm:h-[320px] md:h-[370px] w-auto",
      },
      {
        src: bannerImg5,
        alt: "Archer character in desktop view",
        className:
          "absolute right-[-100px] top-10 z-20 h-[240px] sm:h-[320px] md:h-[370px] w-auto hidden xl:block",
      },
    ],
    background: "bg-gradient-to-r from-[#2b39a0] to-[#232c72]",
  },
  {
    id: 3,
    title: (
      <>
        Build Your&nbsp;
        <br className="responsive-br" />
        Gaming Empire &nbsp;
        <br className="responsive-br" />
        Today
      </>
    ),
    description:
      "Create and manage your own gaming platform with our state-of-the-art tools and support. Start building now!",
    buttons: [
      {
        text: "START BUILDING",
        href: "/games",
        className:
          "bg-[#4A90FF] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-[#4A90FF]/90 transition-colors text-sm md:text-base",
      },
      {
        text: "LEARN MORE",
        href: "/contact",
        className:
          "bg-white/20 backdrop-blur-[2px] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-white/30 transition-colors text-sm md:text-base",
      },
    ],
    mobileImages: [
      {
        src: bannerImg7,
        alt: "Builder character in mobile view",
        className: "h-auto w-auto",
      },
    ],
    desktopImages: [
      {
        src: bannerImg7,
        alt: "Builder character in desktop view",
        className:
          "absolute right-[0px] top-10 z-20 h-[240px] sm:h-[320px] md:h-[350px] w-auto hidden xl:block",
      },
    ],
    background: "bg-gradient-to-r from-[#6a0a91] to-[#a411c4]",
  },
];

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slidesToShow = isMobile
    ? slides.filter((slide) => slide.id === 1)
    : slides;

  return (
    <div className="relative ">
      <Slider
        {...(isMobile ? mobileSliderSettings : sliderSettings)}
        className=" hero-slider relative overflow-visible mt-8 "
      >
        {slidesToShow.map((slide) => (
          <div
            key={slide.id}
            className="px-2 py-0 lg:px-0 lg:py-18 transition-all duration-300"
          >
            <div
              className={`relative mt-12 lg:mt-0 rounded-[16px] lg:rounded-[32px] lg:overflow-hidden transition-all duration-300 h-full`}
            >
              <div
                className={`absolute inset-0 ${slide.background} rounded-[16px] lg:rounded-[32px] h-[100%] lg:h-full`}
              ></div>
              <div className="max-w-7xl mx-auto lg:px-8  lg:py-0 relative z-10 mt-2  relative top-[-70px] lg:top-0">
                <div className="flex flex-col lg:flex-row items-center justify-between ">
                  {/* Characters */}
                  <div className="lg:w-1/2 relative top-[20px]  lg:mb-0 lg:order-2 overflow-hidden lg:overflow-visible ">
                    <div className="relative top-[100px] lg:top-[0px] w-full h-[300px] lg:h-[400px]">
                      {/* Mobile view */}
                      <div
                        className="lg:hidden relative flex justify-center items-end gap-2"
                        style={{ minHeight: "320px" }}
                      >
                        {slide.mobileImages.map((image, index) => (
                          <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={image.className}
                          />
                        ))}
                      </div>
                      {/* Desktop view */}
                      <div className="hidden lg:block relative h-full">
                        {slide.desktopImages.map((image, index) => (
                          <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={image.className}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative lg:w-1/2 z-100 ">
                    <div className="absolute top-[-50px] left-0 right-0 h-24 bg-gradient-to-t from-[rgba(251,111,77,0.95)] to-transparent pointer-events-none z-50 lg:hidden"></div>
                    <div className="  text-white text-center lg:text-left lg:order-1 z-52 relative  ">
                      <h1
                        className="px-2 md:px-0 text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold mb-4 leading-tight "
                        style={{ fontFamily: "Baloo, sans-serif" }}
                      >
                        {slide.title}
                      </h1>
                      <p className="px-2 md:px-0 text-sm sm:text-base lg:text-base xl:text-lg mb-6 lg:mb-2 opacity-90 max-w-xl mx-auto lg:mx-0">
                        {slide.description}
                      </p>
                      <div className=" px-2 md:px-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center justify-center lg:justify-start">
                        {slide.buttons.map((button, index) => (
                          <a
                            key={index}
                            href={button.href}
                            className={`w-full sm:w-auto ${button.className}`}
                            onClick={(e) => {
                              if (button.href.startsWith("#")) {
                                e.preventDefault();
                                const section = document.getElementById(
                                  button.href.substring(1)
                                );
                                if (section) {
                                  section.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }
                              }
                            }}
                          >
                            {button.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom styles for the slider */}
      <style>{`
       .hero-slider  {
         left: 200px;
        }
        .hero-slider .slick-slide {
          transition: all 0.3s ease;
          transform: scale(1);
          opacity: 0.7;
          filter: blur(4px);
          z-index: 0;
        }

        .hero-slider .slick-center {
          transform: scale(1.1);
          opacity: 1;
          filter: blur(0);
          z-index: 10;
        }

        .hero-slider .slick-list {
          overflow: visible;
          padding: 20px 0 !important;
        }

        .hero-slider .slick-track {
          display: flex;
          align-items: center;
        }

        .hero-slider .slick-arrow {
          width: 40px;
          height: 40px;
        }

        .hero-slider .slick-prev {
          left: 25px;
        }

        .hero-slider .slick-next {
          right: 25px;
        }
        @media (max-width: 1400px) {
          .hero-slider  {
         left: 180px;
        }
      }
        @media (max-width: 1100px) {
          .hero-slider  {
         left: 150px;
      }
         }
        @media (max-width: 1023px) {
          .hero-slider .slick-slide {
            transform: scale(1);
            opacity: 1;
            filter: blur(0);
        
          }
                  .hero-slider  {
         left: unset;
        }
        }
        @media (max-width: 1280px) {
          .responsive-br {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
