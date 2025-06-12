import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import game17 from "../../assets/game-images/princess-of-atlanis.png";
import game18 from "../../assets/game-images/gate-eternity.png";
import game19 from "../../assets/game-images/wrath-of-vikings.png";
import game20 from "../../assets/game-images/sand-quest.png";

const gameDetails = {
  "Fruity Jewels": {
    image: game1,
    description:
      "A vibrant slot game featuring colorful jewels and exciting bonus features. Match the sparkling gems to win big prizes! This game offers a classic slot experience with a modern twist, captivating players with its engaging gameplay and potential for big payouts.",
    url: "https://dev-games.progaindia.com/games/slots/fruityjewels/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=fruityjewels&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Gate of Eternity": {
    image: game2,
    description:
      "Enter the mystical realm of eternal gates where ancient treasures await. Spin the reels and unlock the secrets of eternity. This epic adventure is packed with mythical creatures and powerful bonuses that promise an unforgettable gaming experience.",
    url: "https://dev-games.progaindia.com/games/slots/gates_of_eternity/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=gates_of_eternity&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Anubis Riches": {
    image: game3,
    description:
      "Journey through ancient Egypt with Anubis as your guide. Discover hidden treasures in the land of pharaohs. This immersive slot game brings the mysteries of the Nile to life with stunning visuals and thrilling bonus rounds.",
    url: "https://dev-games.progaindia.com/games/slots/anubisriches/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=anubisriches&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Lucky Quest": {
    image: game4,
    description:
      "Embark on an adventurous quest filled with luck and fortune. Every spin could lead to legendary rewards! This vibrant and engaging game combines exciting features with charming graphics for an unforgettable journey.",
    url: "https://dev-games.progaindia.com/games/slots/lucky_quest/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=lucky_quest&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Barking Bonanza": {
    image: game5,
    description:
      "Join the canine carnival in this fun-filled slot game. Watch the dogs play and win exciting prizes! This charming game is perfect for animal lovers, offering delightful animations and rewarding bonuses.",
    url: "https://dev-games.progaindia.com/games/slots/barkingbonanza/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=barkingbonanza&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Princess of Atlantis": {
    image: game6,
    description:
      "Dive into the depths of Atlantis with the beautiful princess. Discover underwater treasures and magical bonuses. This visually stunning game transports you to an aquatic wonderland filled with mythical riches.",
    url: "https://dev-games.progaindia.com/games/slots/princessofatlantis/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=princessofatlantis&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Bailamos Amigos": {
    image: game7,
    description:
      "Dance to the rhythm of this festive slot game. Celebrate with amigos and win big in this Latin-themed adventure! This game is a fiesta of colors and sounds, guaranteeing a lively and rewarding experience.",
    url: "https://dev-games.progaindia.com/games/slots/bastabailamosamigos/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastabailamosamigos&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Wrath Of Vikings": {
    image: game8,
    description:
      "Face the fury of the Vikings in this action-packed slot game. Battle for glory and legendary treasures! Prepare for an epic saga filled with fearsome warriors, powerful weapons, and immense riches.",
    url: "https://dev-games.progaindia.com/games/slots/wrathofthevikings/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wrathofthevikings&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Captain Phills Fortune": {
    image: game9,
    description:
      "Sail the high seas with Captain Phill in search of hidden treasures. Navigate through storms and find your fortune! This swashbuckling adventure offers thrilling gameplay and bountiful rewards for brave pirates.",
    url: "https://dev-games.progaindia.com/games/slots/bastacaptainphillsfortune/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastacaptainphillsfortune&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Savage Savannah": {
    image: game10,
    description:
      "Experience the wild African savannah in this thrilling slot game. Encounter majestic animals and win big prizes! Immerse yourself in the heart of the wilderness with stunning graphics and exciting features.",
    url: "https://dev-games.progaindia.com/games/slots/bastasavagesavannah/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastasavagesavannah&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Horns Of Gold": {
    image: game11,
    description:
      "Discover the legendary horns of gold in this mythical slot game. Spin the reels and claim your golden fortune! This enchanting game blends fantasy with exciting gameplay, promising magical wins.",
    url: "https://dev-games.progaindia.com/games/slots/bastahornsofgold/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastahornsofgold&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Secret of the Dragon Spirit": {
    image: game12,
    description:
      "Unlock the secrets of the ancient dragon spirit. Harness its power and win legendary rewards! This captivating slot takes you on a journey through mystical lands with powerful dragons and untold riches.",
    url: "https://dev-games.progaindia.com/games/slots/bastasecretofthedragonspirit/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastasecretofthedragonspirit&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "The Lost Tiki Empire": {
    image: game13,
    description:
      "Explore the mysterious Tiki Empire and its hidden treasures. Uncover ancient secrets and win big prizes! This tropical adventure is filled with vibrant visuals and exciting bonus features.",
    url: "https://dev-games.progaindia.com/games/slots/thelosttikiempire/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=thelosttikiempire&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Wild Blossom": {
    image: game14,
    description:
      "A beautiful game where flowers bloom with every spin, leading to amazing rewards. Experience the charm of nature and blossoming wins.",
    url: "https://dev-games.progaindia.com/games/slots/wildblossom/index.php?amount_type=4&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wildblossom&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Veil of Magic": {
    image: game15,
    description:
      "Unravel the mysteries behind the veil of magic. This enchanting slot game is filled with spells, potions, and bewitching wins.",
    url: "https://dev-games.progaindia.com/games/slots/bastaveilofmagic/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastaveilofmagic&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Shadow Syndicate": {
    image: game16,
    description:
      "Join the clandestine world of the Shadow Syndicate. A thrilling game of intrigue and high stakes, where big wins lurk in the shadows.",
    url: "https://dev-games.progaindia.com/games/slots/bastashadowsyndicate/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastashadowsyndicate&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Princess of Atlantis 1000": {
    image: game17,
    description:
      "Dive into the depths of Atlantis with the beautiful princess. Discover underwater treasures and magical bonuses. This visually stunning game transports you to an aquatic wonderland filled with mythical riches.",
    url: "https://dev-games.progaindia.com/games/slots/princessofatlantis1000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=princessofatlantis1000&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Gate of Eternity 1000": {
    image: game18,
    description:
      "Enter the mystical realm of eternal gates where ancient treasures await. Spin the reels and unlock the secrets of eternity. This epic adventure is packed with mythical creatures and powerful bonuses that promise an unforgettable gaming experience.",
    url: "https://dev-games.progaindia.com/games/slots/gatesofeternity1000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=gatesofeternity1000&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "Wrath of the Vikings 5000": {
    image: game19,
    description:
      "Face the fury of the Vikings in this action-packed slot game. Battle for glory and legendary treasures! Prepare for an epic saga filled with fearsome warriors, powerful weapons, and immense riches.",
    url: "https://dev-games.progaindia.com/games/slots/wrathofthevikings5000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wrathofthevikings5000&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
  "The Sands Quest": {
    image: game20,
    description:
      "Journey through the scorching sands on an epic quest for hidden riches. Discover ancient artifacts and untold wealth.",
    url: "https://dev-games.progaindia.com/games/slots/thesandsquest/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=thesandsquest&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
  },
};

const GameDetails: React.FC = () => {
  const { gameName } = useParams();
  const navigate = useNavigate();
  const decodedGameName = decodeURIComponent(gameName || "");
  const game = gameDetails[decodedGameName as keyof typeof gameDetails];

  const handleGameClick = (gameUrl: string) => {
    const encodedUrl = encodeURIComponent(gameUrl);
    navigate(`/gamescreen/${encodedUrl}`);
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Game not found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-[#FFC107] text-black px-6 py-2 rounded-md hover:bg-[#FFD54F] transition-colors duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src={game.image}
              alt={decodedGameName}
              className="w-full h-[400px] object-contain rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#FFC107]">
              {decodedGameName}
            </h1>
            <p className="text-lg text-gray-300">{game.description}</p>
            <div className="grid grid-cols-3 gap-4 text-center mt-6 p-4 bg-[#28292C] rounded-lg w-full">
              <div>
                <p className="text-sm text-gray-400">Category</p>
                <p className="text-xl font-bold text-white">{game.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Volatility</p>
                <p className="text-xl font-bold text-white">
                  {game.volatility}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">RTP</p>
                <p className="text-xl font-bold text-white">{game.rtp}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleGameClick(game.url)}
                className="bg-[#FFC107] text-black px-6 py-3 rounded-md hover:bg-[#FFD54F] transition-colors duration-300 select-none"
              >
                Play Demo
              </button>
              <button
                onClick={() => navigate(-1)}
                className="bg-[#28292C] text-white px-6 py-3 rounded-md hover:bg-[#23263a] transition-colors duration-300 select-none"
              >
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
