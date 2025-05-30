import React, { useState } from "react";
import FilterBar from "../FilterBar";
import game1 from "../../assets/game-images/basta-game-1.jpg";
import game2 from "../../assets/game-images/basta-game-2.jpg";
import game3 from "../../assets/game-images/basta-game-10.jpg";
import game4 from "../../assets/game-images/basta-game-4.jpg";
import game5 from "../../assets/game-images/basta-game-5.jpg";
import game6 from "../../assets/game-images/basta-game-7.jpg";
import game7 from "../../assets/game-images/basta-game-8.jpg";
import game8 from "../../assets/game-images/basta-game-9.jpg";
import bgImage from "../../assets/game-studio/black-bg.png";

// Tab type definition
type TabType = "Game Art" | "Game Math" | "Game Development" | "Game Animation";

interface GamesSectionProps {
  hideFilterBar?: boolean;
}

const GamesSection: React.FC<GamesSectionProps> = ({ hideFilterBar }) => {
  const [activeTab, setActiveTab] = useState<TabType>("Game Art");

  const tabs: TabType[] = [
    "Game Art",
    "Game Math",
    "Game Development",
    "Game Animation",
  ];

  const gameImages = [
    game1, // BASTA MAGIC CASTLE
    game2, // CANDY SPLASH
    game3, // WILD GUARDIANS
    game4, // VIKINGS SPIRIT
    game5, // BASTA VIKINGS BATTLE
    game6, // BASTA TACTICAL RUSH
    game7, // NEON HUNT
    game8, // TROPICAL BONANZA
    game1, // Repeated: BASTA MAGIC CASTLE
    game2, // Repeated: CANDY SPLASH
  ];

  return (
    <section
      className={`text-white bg-[#1A1A1A]  py-20 md:pt-40   width-[100%]  px-6 bg-cover bg-no-repeat bg-top  `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-4 md:mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            OUR SERVICES
          </h2>
        </div>
        {!hideFilterBar && <FilterBar />}

        <div className="overflow-x-auto mb-12">
          <div className="flex gap-4 min-w-max justify-start sm:justify-center px-4 sm:px-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none ${
                  activeTab === tab
                    ? "bg-[#FFC107] text-black"
                    : "bg-[#28292C] text-white hover:bg-[#23263a]/80"
                }`}
                style={{
                  clipPath:
                    "polygon(10% 0, 90% 0, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0 75%, 0 25%)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid - 5 Images per Row */}
        <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-6 overflow-x-auto sm:overflow-hidden">
          {gameImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-[85%] sm:w-auto">
              <img
                src={image}
                alt={`Game ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
