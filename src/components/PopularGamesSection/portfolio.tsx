import React from "react";
import Slider from "react-slick";
import game1 from "../../assets/game-studio/studio-portfolio.png";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImage from "../../assets/game-studio/black-bg.png";

interface PortfolioProps {
  title?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ title = "PORTFOLIO" }) => {
  // Example popular games data
  const popularGames = [
    {
      image: game1,
    },

    {
      image: game1,
    },
    {
      image: game1,
    },
    {
      image: game1,
    },
    {
      image: game1,
    },
    {
      image: game1,
    },
    {
      image: game1,
    },
    {
      image: game1,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Split the title into two parts for styling
  const titleParts = title.split(" ");
  const firstPart = titleParts.slice(0, -1).join(" ");
  const lastPart = titleParts[titleParts.length - 1];

  return (
    <section
      className={`text-white bg-[#1A1A1A]  py-17 md:pt-40   width-[100%]  px-6 bg-cover bg-no-repeat bg-top  `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-2 ">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            <span className="text-white">{firstPart}</span>{" "}
            <span className="text-white">{lastPart}</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="game-slider-container">
          <Slider {...settings}>
            {popularGames.map(() => (
              <div className="px-3">
                <img src={game1} alt="game1" />{" "}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style>{`
        .game-slider-container .slick-dots {
          bottom: -40px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        .game-slider-container .slick-dots li {
          margin: 0;
        }
        .game-slider-container .slick-dots li button {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .game-slider-container .slick-dots li button:before {
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
        .game-slider-container .slick-dots li.slick-active button:before {
          background: #fff;
          border: 2px solid #fff;
          box-sizing: border-box;
          width: 8px;
          height: 8px;
        }
        .game-slider-container .slick-dots li.slick-active button:after {
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
        .game-slider-container .slick-track {
          padding: 20px 0;
        }
        .game-slider-container .slick-prev,
        .game-slider-container .slick-next {
          width: 40px;
          height: 40px;
          z-index: 1;
        }
        .game-slider-container .slick-prev:before,
        .game-slider-container .slick-next:before {
          color: #FF6B6B;
          font-size: 40px;
        }
        .game-slider-container .slick-prev {
          left: -50px;
        }
        .game-slider-container .slick-next {
          right: -50px;
        }
        @media (max-width: 1024px) {
          .game-slider-container .slick-prev {
            left: -30px;
          }
          .game-slider-container .slick-next {
            right: -30px;
          }
        }
          @media (max-width: 768px) {
    .game-slider-container .slick-dots {
      gap: 6px; /* smaller gap for small screens */
    }
      `}</style>
    </section>
  );
};

export default Portfolio;
