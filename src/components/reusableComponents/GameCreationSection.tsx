import React from "react";
import slotIcon from "../../assets/game-studio/slot-games.png";
import rocketIcon from "../../assets/game-studio/crash-games.png";
import bingoIcon from "../../assets/game-studio/bingo.png";
import chipIcon from "../../assets/game-studio/live-casino.png";
import diceIcon from "../../assets/game-studio/dice.png";
import bgImage from "../../assets/game-studio/black-bg.png";

const GameCreationSection: React.FC = () => {
  const gameCategories = [
    {
      icon: slotIcon,
      title: "SLOT GAMES",
      description: [
        "Classic (3x3, 5x3, 5x5)",
        "Megaways",
        "Jackpots",
        "Free Spins & Bonus Rounds",
        "Custom Branded Slots",
      ],
    },
    {
      icon: rocketIcon,
      title: "CRASH GAMES",
      description: ["Multiplayer", "Live Betting", "Provably Fair Logic"],
    },
    {
      icon: bingoIcon,
      title: "BINGO & INSTANT WIN",
      description: ["Scratch Cards", "Lotto & Keno", "Live Bingo Studio"],
    },
    {
      icon: chipIcon,
      title: "LIVE CASINO",
      description: [
        "Roulette, Blackjack, Poker",
        "Real-Time Interactions",
        "Fully Branded Tables",
      ],
    },
    {
      icon: diceIcon,
      title: "MINI-GAMES & GAMIFIED PROMOTIONS",
      description: [
        "Social Media Ready",
        "Spin-To-Win, Quiz Games, Daily Rewards",
      ],
    },
  ];

  return (
    <section
      className={`text-white bg-[#1A1A1A]  py-17 md:pt-30   width-[100%]  px-6 bg-cover bg-no-repeat bg-top  `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            WHAT WE CREATE
          </h2>
        </div>

        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {gameCategories.map((game, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-6 pt-10 flex flex-col  h-full"
            >
              <img
                src={game.icon}
                alt={game.title}
                className="w-20 h-20 object-contain mb-4 mx-auto scale-[1.4]"
              />
              <h3 className="text-white text-[14px] font-bold uppercase mb-2">
                {game.title}
              </h3>
              <ul className="text-white text-[12px]">
                {game.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full text-sm hover:bg-yellow-300 transition">
            EXPLORE FULL GAME LIST
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameCreationSection;
