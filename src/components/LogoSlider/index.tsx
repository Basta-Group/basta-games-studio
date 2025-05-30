import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bet2 from "../../assets/game-studio/bet-basta.png";
import bet3 from "../../assets/game-studio/bet-basta-play.png";
import bgImage from "../../assets/game-studio/black-bg.png";

const LogoSlider: React.FC = () => {
  const logos = [
    {
      name: "Bet Partner 2",
      image: bet2,
    },
    {
      name: "Bet Partner 3",
      image: bet3,
    },
    {
      name: "Bet Partner 2",
      image: bet2,
    },
    {
      name: "Bet Partner 3",
      image: bet3,
    },
    {
      name: "Bet Partner 2",
      image: bet2,
    },
    {
      name: "Bet Partner 3",
      image: bet3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2, // Updated to show 2 slides on smaller screens
        },
      },
    ],
  };

  return (
    <section
      className={`text-white bg-[#1A1A1A]  py-17 md:pt-30   width-[100%]  px-6 bg-cover bg-no-repeat bg-top  `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {" "}
      <div className="max-w-7xl mx-auto">
        <div
          className="logo-slider pb-10"
          role="region"
          aria-label="Logo carousel"
        >
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="pb-6" role="listitem">
                <div className="flex items-center justify-center h-32 bg-[#28292C] rounded-lg">
                  <img
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    className="max-h-[80%] w-auto max-w-[80%] opacity-70 hover:opacity-100 transition-opacity duration-300 logo-img"
                    role="img"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style>{`
        .logo-slider .slick-track {
          display: flex;
          align-items: center;
        }
        .logo-slider .slick-slide {
          transition: all 0.3s ease;
        }
        .logo-slider .slick-slide > div {
          margin: 0 0.5rem;
        }
        .logo-slider .slick-dots {
          bottom: -30px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        .logo-slider .slick-dots li {
          margin: 0;
        }
        .logo-slider .slick-dots li button {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .logo-slider .slick-dots li button:before {
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
        .logo-slider .slick-dots li.slick-active button:before {
          background: #fff;
          border: 2px solid #fff;
          box-sizing: border-box;
          width: 8px;
          height: 8px;
        }
        .logo-slider .slick-dots li.slick-active button:after {
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
        .logo-slider .slick-dots {
          gap: 32px;
        }

        /* Media query for small screens to adjust image size and padding */
        @media (max-width: 640px) {
          .logo-img {
            max-height: 8rem; /* Smaller image size */
            padding: 0.5rem; /* Reduce padding */
          }
              .logo-slider .slick-dots {
          gap: 6px;
        }

        }
      `}</style>
    </section>
  );
};

export default LogoSlider;
