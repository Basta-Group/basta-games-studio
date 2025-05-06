import React from "react";
import Slider from "react-slick";
import GameCard from "../GameCard";
import game1 from "../../assets/game-images/basta-game-1.jpg";
import game2 from "../../assets/game-images/basta-game-2.jpg";
import game3 from "../../assets/game-images/basta-game-10.jpg";
import game4 from "../../assets/game-images/basta-game-4.jpg";
import game5 from "../../assets/game-images/basta-game-5.jpg";
import game6 from "../../assets/game-images/basta-game-7.jpg";
import game7 from "../../assets/game-images/basta-game-8.jpg";
import game8 from "../../assets/game-images/basta-game-9.jpg";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PopularGamesSectionProps {
  title?: string;
}

const PopularGamesSection: React.FC<PopularGamesSectionProps> = ({
  title = "OUR POPULAR GAMES",
}) => {
  // Example popular games data
  const popularGames = [
    {
      title: "WILD WEST",
      image: game1,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "blue" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "VIKINGS THRONE OF POWER",
      image: game2,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "green" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "ROME EMPIRE",
      image: game3,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "orange" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "VIKINGS SPIRIT",
      image: game4,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "purple" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA VIKINGS BATTLE",
      image: game5,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "blue" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA TACTICAL RUSH",
      image: game6,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "green" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA SPACE HUNTER",
      image: game7,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "purple" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA SEA OF RICHES",
      image: game8,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "orange" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <section className="pt-6 pb-16 md:py-16 bg-[#181a29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-2 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            <span className="text-white">{firstPart}</span>{" "}
            <span className="text-[#FF6B6B]">{lastPart}</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="game-slider-container">
          <Slider {...settings}>
            {popularGames.map((game, index) => (
              <div key={index} className="px-3">
                <GameCard {...game} />
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

export default PopularGamesSection;
