import React, { useState } from "react";
import GameCard from "../GameCard";
import FilterBar from "../FilterBar";
import game1 from "../../assets/game-images/basta-game-1.jpg";
import game2 from "../../assets/game-images/basta-game-2.jpg";
import game3 from "../../assets/game-images/basta-game-10.jpg";
import game4 from "../../assets/game-images/basta-game-4.jpg";
import game5 from "../../assets/game-images/basta-game-5.jpg";
import game6 from "../../assets/game-images/basta-game-7.jpg";
import game7 from "../../assets/game-images/basta-game-8.jpg";
import game8 from "../../assets/game-images/basta-game-9.jpg";

// Tab type definition
type TabType =
  | "All Games"
  | "Slots"
  | "Original Games"
  | "Table Games"
  | "Virtual Games";

interface GamesSectionProps {
  hideFilterBar?: boolean;
}

const GamesSection: React.FC<GamesSectionProps> = ({ hideFilterBar }) => {
  const [activeTab, setActiveTab] = useState<TabType>("All Games");

  const tabs: TabType[] = [
    "All Games",
    "Slots",
    "Original Games",
    "Table Games",
    "Virtual Games",
  ];

  const games = [
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

  return (
    <section className="py-16 bg-[#151929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-4 md:mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            <span className="text-white">ALL</span>{" "}
            <span className="text-[#FF6B6B]">GAMES</span>
          </h2>
        </div>
        {!hideFilterBar && <FilterBar />}

        <div className="overflow-x-auto mb-12">
          <div className="flex gap-4 min-w-max justify-start sm:justify-center px-4 sm:px-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300 bg-[#23263a] text-white focus:outline-none ${
                  activeTab === tab
                    ? "bg-[#FF6B6B] text-white"
                    : "bg-[#1a1f2e] text-white/70 hover:bg-[#FF6B6B]/10"
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

        {/* Games Grid */}
        <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 overflow-x-auto sm:overflow-hidden">
          {games.map((game, index) => (
            <div className="flex-shrink-0 w-[85%] sm:w-auto">
              <GameCard key={index} {...game} />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12 text-center">
          <button
            className="px-8 py-2 bg-[#1a1f2e] text-white font-bold rounded-full transition-colors uppercase shadow-none border-none outline-none"
            style={{ minWidth: 120, fontSize: 18 }}
          >
            SHOW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
