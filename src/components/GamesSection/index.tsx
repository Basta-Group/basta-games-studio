import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterBar from "../FilterBar";
import game1 from "../../assets/game-images/Fruit-jewels.png";
import game2 from "../../assets/game-images/gate-of-eternity.png";
import game3 from "../../assets/game-images/anibus.png";
import game4 from "../../assets/game-images/basta-lucky-quest.png";
import game5 from "../../assets/game-images/barking-bonaza.png";
import game6 from "../../assets/game-images/princess-of-atlanis.png";
import game7 from "../../assets/game-images/amigo.png";
import game8 from "../../assets/game-images/wrath-of-vikings.png";
import game9 from "../../assets/game-images/basta-fortune.png";
import game10 from "../../assets/game-images/savage-savannah.png";
import game11 from "../../assets/game-images/horns-of-gold.png";
import game12 from "../../assets/game-images/dragon-spirit.png";
import game13 from "../../assets/game-images/tiki-empire.png";
import game14 from "../../assets/game-images/wild-blossom.png";
import game15 from "../../assets/game-images/weil-magic.png";
import game16 from "../../assets/game-images/shadow-syndicate.png";
import game17 from "../../assets/game-images/basta-princess.png";
import game18 from "../../assets/game-images/gate-eternity.png";
import game19 from "../../assets/game-images/basta-wrath.png";
import game20 from "../../assets/game-images/sand-quest.png";
import bgImage from "../../assets/game-studio/black-bg.png";

// Tab type definition
type TabType = "Game Art" | "Game Math" | "Game Development" | "Game Animation";

interface GameData {
  image: string;
  url: string;
  name: string;
}

interface GamesSectionProps {
  hideFilterBar?: boolean;
}

const GamesSection: React.FC<GamesSectionProps> = ({ hideFilterBar }) => {
  const [activeTab, setActiveTab] = useState<TabType>("Game Art");
  const navigate = useNavigate();

  const tabs: TabType[] = [
    "Game Art",
    "Game Math",
    "Game Development",
    "Game Animation",
  ];

  const games: GameData[] = [
    {
      image: game1,
      url: "https://dev-games.progaindia.com/games/slots/fruityjewels/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=fruityjewels&env=stg",
      name: "Fruity Jewels",
    },
    {
      image: game2,
      url: "https://dev-games.progaindia.com/games/slots/gates_of_eternity/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=gates_of_eternity&env=stg",
      name: "Gate of Eternity",
    },
    {
      image: game3,
      url: "https://dev-games.progaindia.com/games/slots/anubisriches/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=anubisriches&env=stg",
      name: "Anubis Riches",
    },
    {
      image: game4,
      url: "https://dev-games.progaindia.com/games/slots/lucky_quest/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=lucky_quest&env=stg",
      name: "Lucky Quest",
    },
    {
      image: game5,
      url: "https://dev-games.progaindia.com/games/slots/barkingbonanza/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=barkingbonanza&env=stg",
      name: "Barking Bonanza",
    },
    {
      image: game6,
      url: "https://dev-games.progaindia.com/games/slots/princessofatlantis/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=princessofatlantis&env=stg",
      name: "Princess of Atlantis",
    },
    {
      image: game7,
      url: "https://dev-games.progaindia.com/games/slots/bastabailamosamigos/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastabailamosamigos&env=stg",
      name: "Bailamos Amigos",
    },
    {
      image: game8,
      url: "https://dev-games.progaindia.com/games/slots/wrathofthevikings/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wrathofthevikings&env=stg",
      name: "Wrath Of Vikings",
    },
    {
      image: game9,
      url: "https://dev-games.progaindia.com/games/slots/bastacaptainphillsfortune/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastacaptainphillsfortune&env=stg",
      name: "Captain Phills Fortune",
    },
    {
      image: game10,
      url: "https://dev-games.progaindia.com/games/slots/bastasavagesavannah/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastasavagesavannah&env=stg",
      name: "Savage Savannah",
    },
    {
      image: game11,
      url: "https://dev-games.progaindia.com/games/slots/bastahornsofgold/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastahornsofgold&env=stg",
      name: "Horns Of Gold",
    },
    {
      image: game12,
      url: "https://dev-games.progaindia.com/games/slots/bastasecretofthedragonspirit/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastasecretofthedragonspirit&env=stg",
      name: "Secret of the Dragon Spirit",
    },
    {
      image: game13,
      url: "https://dev-games.progaindia.com/games/slots/thelosttikiempire/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=thelosttikiempire&env=stg",
      name: "The Lost Tiki Empire",
    },
    {
      image: game14,
      url: "https://dev-games.progaindia.com/games/slots/wildblossom/index.php?amount_type=4&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wildblossom&env=stg",
      name: "Wild Blossom",
    },
    {
      image: game15,
      url: "https://dev-games.progaindia.com/games/slots/bastaveilofmagic/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastaveilofmagic&env=stg",
      name: "Veil of Magic",
    },
    {
      image: game16,
      url: "https://dev-games.progaindia.com/games/slots/bastashadowsyndicate/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastashadowsyndicate&env=stg",
      name: "Shadow Syndicate",
    },
    {
      image: game17,
      url: "https://dev-games.progaindia.com/games/slots/princessofatlantis1000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=princessofatlantis1000&env=stg",
      name: "Princess of Atlantis 1000",
    },
    {
      image: game18,
      url: "https://dev-games.progaindia.com/games/slots/gatesofeternity1000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=gatesofeternity1000&env=stg",
      name: "Gate of Eternity 1000",
    },
    {
      image: game19,
      url: "https://dev-games.progaindia.com/games/slots/wrathofthevikings5000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wrathofthevikings5000&env=stg",
      name: "Wrath of the Vikings 5000",
    },
    {
      image: game20,
      url: "https://dev-games.progaindia.com/games/slots/thesandsquest/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=thesandsquest&env=stg",
      name: "The Sands Quest",
    },
  ];

  const handleGameClick = (gameUrl: string) => {
    const encodedUrl = encodeURIComponent(gameUrl);
    navigate(`/gamescreen/${encodedUrl}`);
  };

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
          {games.map((game, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85%] sm:w-auto group cursor-pointer"
              onClick={() =>
                navigate(`/game-details/${encodeURIComponent(game.name)}`)
              }
            >
              <div className="relative inline-flex">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-[300px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGameClick(game.url);
                    }}
                    className="bg-[#FFC107] text-black px-4 py-2 rounded-md hover:bg-[#FFD54F] transition-colors duration-300 select-none relative z-10"
                  >
                    Demo
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(
                        `/game-details/${encodeURIComponent(game.name)}`
                      );
                    }}
                    className="bg-[#28292C] text-white px-4 py-2 rounded-md hover:bg-[#23263a] transition-colors duration-300 select-none relative z-10"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
