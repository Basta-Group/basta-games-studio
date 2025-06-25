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
import gamebg1 from "../../assets/game-images/games-bg/fruit-jewels.png";
import gamebg2 from "../../assets/game-images/games-bg/game-eternity.png";
import gamebg3 from "../../assets/game-images/games-bg/anibus.png";
import gamebg4 from "../../assets/game-images/games-bg/lucky-quest.png";
import gamebg5 from "../../assets/game-images/games-bg/barking-bonaza.png";
import gamebg6 from "../../assets/game-images/games-bg/princess-atlnis.png";
import gamebg7 from "../../assets/game-images/games-bg/amigos.png";
import gamebg8 from "../../assets/game-images/games-bg/wrath-vikings.png";
import gamebg9 from "../../assets/game-images/games-bg/Captain-Phills.png";
import gamebg10 from "../../assets/game-images/games-bg/savage-savannah.png";
import gamebg11 from "../../assets/game-images/games-bg/horns-of-gold.png";
import gamebg12 from "../../assets/game-images/games-bg/dragon-spirit.png";
import gamebg14 from "../../assets/game-images/games-bg/wild-blossom.png";
import gamebg16 from "../../assets/game-images/games-bg/shadow.png";
import gamebg20 from "../../assets/game-images/games-bg/sand-quest.png";
import { AiOutlineFilePdf, AiOutlineFileZip } from "react-icons/ai";

const gameDetails = {
  "Fruity Jewels": {
    image: game1,
    bgImage: gamebg1,
    description:
      "Dive into a sparkling world where every spin can burst into a cascade of colorful gems and juicy wins. With dazzling visuals and rewarding free spins, Fruity Jewels brings classic slot mechanics to life in a playful, modern way. This game is perfect for players who love a little risk with their fruit. Line up matching jewels, activate free spins, and enjoy the excitement of multipliers — all optimized for mobile and desktop. Whether you're chasing small wins or big bursts, Fruity Jewels keeps the fun flowing.",
    url: "https://dev-games.progaindia.com/games/slots/fruityjewels/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=fruityjewels&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "Up to €50,000",
    paylines: "25 fixed",
    minBet: "€1.00",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Match Anywhere Payouts:</strong> Wins don't require paylines, just match clusters.</p><p><strong>Free Spins Bonus:</strong> 10–50 spins triggered via Scatters.</p><p><strong>Multipliers:</strong> Special gems boost wins during bonus rounds.</p><p><strong>Buy Bonus Feature:</strong> Jump straight into Free Spins mode.</p><p><strong>Designed for Fast Play:</strong> Smooth gameplay, intuitive controls, instant fun.</p>",
    maxBet: "€500",
  },
  "Gate of Eternity": {
    image: game2,
    bgImage: gamebg2,
    description:
      "Step beyond the veil of time into a world where myth meets magic. Gate of Eternity is an epic slot game journey through enchanted realms, powerful runes, and timeless treasures. Packed with mystery, fantasy, and high-volatility rewards — this game is made for thrill-seekers and treasure hunters alike.",
    url: "https://dev-games.progaindia.com/games/slots/gates_of_eternity/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=gates_of_eternity&env=stg",
    category: "Video Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "5000x Total Bet",
    paylines: "25 fixed",
    minBet: "€0.20",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Tumble Feature:</strong> Winning symbols vanish, new ones drop in; continues until no wins remain.</p><p><strong>Multiplier Symbols:</strong> Random 2x–500x multipliers on all reels; total multiplies final win after tumbling ends.</p><p><strong>Free Spins:</strong> 4+ Scatters award 15 spins; 3+ Scatters add 5 more. Special reels enhance gameplay.</p><p><strong>Ante Bet:</strong> 25x doubles Scatter chances (Free Spins Purchase disabled); 20x enables Buy Free Spins (100x bet).</p><p><strong>Buy Free Spins:</strong> Instantly triggers Free Spins for 100x current bet (disabled with 25x Ante Bet).</p><p><strong>Optimized Controls:</strong> Quick Spin, Game Logs, customizable settings.</p>",
    maxBet: "€500",
  },
  "Anubis Riches": {
    image: game3,
    bgImage: gamebg3,
    description:
      "Follow the god of the afterlife, Anubis, as he unlocks the secrets of the pyramids. In this richly designed slot, golden treasures, sacred symbols, and powerful features combine to deliver an unforgettable gaming experience. Anubis Riches blends timeless Egyptian mythology with modern slot mechanics giving players a chance to uncover both mystery and massive multipliers",
    url: "https://dev-games.progaindia.com/games/slots/anubisriches/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=anubisriches&env=stg",
    category: "Video Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "10,000× Total Bet",
    paylines: "10",
    minBet: "€1.00",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Scatter Symbol:</strong> Landing 3+ Scatter Symbols triggers Free Game with 10, 15, or 20 free spins (3=10, 4=15, 5=20).</p><p><strong>Wild Symbol:</strong> Substitutes for all symbols except Scatter; in main game, located on middle three reels.</p><p><strong>Free Game Features:</strong> Star collector (0–20 stars); every 4 stars unlocks features: Level 1: Sticky Wild Reel +1 spin, Level 2: Multiplier x2 +1 spin, Level 3: Second Sticky Wild Reel +2 spins, Level 4: Win Both Ways +2 spins, Level 5: Third Sticky Wild Reel +2 spins. Scatter on Sticky Wild Reel counts toward progress first.</p><p><strong>Paytable:</strong> Queen x5=1000, Scarab x5=450, Eye x5=300, A/K/Q/J x5=150; payouts scale with bet.</p><p><strong>Controls:</strong> Quick Spin, Game Logs, customizable settings via SETTINGS menu.</p>",
    maxBet: "€500",
  },
  "Lucky Quest": {
    image: game4,
    bgImage: gamebg4,
    description:
      "Step into the world of Lucky Quest, a vibrant slot adventure where every spin brings a chance for fortune. Travel through enchanted lands, unlock ancient charms, and collect magical multipliers along the way. Packed with thrilling free spins, cascading wins, and explosive bonus potential this is one quest players will never forget.",
    url: "https://dev-games.progaindia.com/games/slots/lucky_quest/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=lucky_quest&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "500x Total Bet",
    minBet: "10 fixed coins",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Game Rules:</strong> Symbols pay anywhere; total number of same symbol at spin end determines win value. All symbols except Scatter pay left to right from the leftmost column; only highest win per line is paid. Payouts multiply by coin value.</p><p><strong>Scatter Symbol:</strong> Landing 3+ triggers free spins: 3 Scatter=2x total bet + 10 spins, 4 Scatter=10x total bet + 15 spins, 5 Scatter=100x total bet + 20 spins.</p><p><strong>Wild Symbol:</strong> Substitutes for all symbols except Scatter; in base game, appears on reels 2, 3, 4, and 5 only.</p><p><strong>Game Features:</strong> During base game, 1-4 reels (Reel 2 to Reel 5) may turn Wild randomly. Free game triggers with 3+ Scatters; players choose: 30 spins (1 Wild reel), 10 spins (2 Wild reels), 3 spins (3 Wild reels), or 1 spin (4 Wild reels).</p>",
    maxBet: "€500",
  },
  "Barking Bonanza": {
    image: game5,
    bgImage: gamebg5,
    description:
      "Join the canine carnival in this fun-filled slot game! Watch the dogs play and win exciting prizes. This charming game, perfect for animal lovers, offers delightful animations and rewarding bonuses. Adorable pups lead you through a joyful world of spinning wins and barking bonuses. With cheerful animations, charming visuals, and exciting features like tumbling reels and mega multipliers, every spin is a walk in the park. Whether you're a casual player or a jackpot chaser, this dog-friendly adventure is your chance to fetch fantastic reward.",
    url: "https://dev-games.progaindia.com/games/slots/barkingbonanza/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=barkingbonanza&env=stg",
    category: "Video Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "15000x Total Bet",
    minBet: "$1",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Scatter Symbol:</strong> Appears on reels 1, 3, and 5. 3+ Bonus symbols pay 5x total bet and trigger Free Spins Round (10 spins). 4 Scatters=$1.50, 5 Scatters=$7.50, 6+ Scatters=$50.00.</p><p><strong>Game Rules:</strong> Symbols pay anywhere; total number of same symbol at spin end determines win value. All wins multiplied by base bet, expressed as actual wins in coins. When winning with multiple symbols, all wins add to total win.</p><p><strong>Wild Symbol:</strong> Substitutes for all symbols except Scatter, present only on reels 2, 3, and 4. All Wilds on same reel have random 2x or 3x multiplier; if multiple Wilds on a payline, multipliers add to each other.</p><p><strong>Free Spins Rules:</strong> Awarded with 4+ Scatters anywhere on screen, starting with 10 free spins. During Free Spins, Multiplier value adds to total Multiplier on winning spins, multiplying the win. 3+ Scatters during Free Spins award 5 additional spins. Special reels in play.</p>",
    maxBet: "€500",
  },
  "Princess of Atlantis": {
    image: game6,
    bgImage: gamebg6,
    description:
      "Embark on a magical underwater journey in Princess of Atlantis. Set in the mythical lost city, this beautifully animated slot brings oceanic charm, glittering treasures, and powerful features. With tumbling wins, multiplier magic, and free spins with endless surprises, players are invited to uncover royal rewards beneath the sea.",
    url: "https://dev-games.progaindia.com/games/slots/princessofatlantis/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=princessofatlantis&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "10000x Total Bet",
    minBet: "€1",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Multiplier Symbols:</strong> Present on all reels, hit randomly during spins and tumbles in both base game and Free Spins. Values range from 2x to 500x (2x, 3x, 4x, 5x, 6x, 8x, 10x, 12x, 15x, 20x, 25x, 50x, 100x, 250x, 500x). Total win multiplies by the sum of all Multiplier values at sequence end.</p><p><strong>Free Spins Rules:</strong> Awarded with 4+ Scatter symbols, starting with 10 free spins. Each Multiplier hit during a winning spin adds to the total multiplier; 3+ Scatters add 5 more spins. Special reels apply. Ante Bet options: 25x doubles Scatter chances (Free Spins Purchase disabled), 20x enables Buy Free Spins (100x bet).</p><p><strong>Paytable:</strong> Pearl x12+=€50.00, Trident x12+=€25.00, Jellyfish x12+=€12.00, Treasure x12+=€12.00, A x12+=€10.00, K x12+=€8.00, Q x12+=€5.00, J x12+=€4.00, 10 x12+=€2.00; 4 Scatters=€3.00, 5 Scatters=€5.00, 6+ Scatters=€100.00.</p>",
    maxBet: "€500",
  },
  "Bailamos Amigos": {
    image: game7,
    bgImage: gamebg7,
    description:
      "Dance to the rhythm of this festive slot game. Celebrate with amigos and win big in this Latin-themed adventure! This game is a fiesta of colors and sounds, guaranteeing a lively and rewarding experience. Free Spins Rules: Awarded with 4+ Scatters, starting with 10 free spins. Multiplier value adds to total Multiplier on winning spins, multiplying the win. 3+ Scatters during Free Spins award 5 additional spins. Special reels in pla      ",
    url: "https://dev-games.progaindia.com/games/slots/bastabailamosamigos/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastabailamosamigos&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "500x Total Bet",
    minBet: "10 fixed coins",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails: `<p><strong>Game Rules:</strong> Symbols pay anywhere; total number of same symbol at spin end determines win value. All symbols except Scatter pay left to right from the leftmost column; only highest win per line is paid. Payouts multiply by coin value.</p><p><strong>Scatter Symbol:</strong> Landing 3+ triggers free spins: 3 Scatter=2x total bet + 10 spins, 4 Scatter=10x total bet + 15 spins, 5 Scatter=100x total bet + 20 spins.</p><p><strong>Wild Symbol:</strong> Substitutes for all symbols except Scatter; in base game, appears on reels 2, 3, 4, and 5 only.</p><p><strong>Game Features:</strong> During base game, 1-4 reels (Reel 2 to Reel 5) may turn Wild randomly. Free game triggers with 3+ Scatters; play continues with special features.</p>`,
    maxBet: "€500",
  },
  "Wrath Of Vikings": {
    image: game8,
    bgImage: gamebg8,
    description:
      "Prepare for battle in Wrath of Vikings, an epic slot game filled with warships, wild reels, and the untamed spirit of the north. Enter a world of Viking warriors and unleash powerful features as you raid for fortune. With its bold design and thunderous gameplay, this game promises high-volatility excitement for adventurers ready to embrace their destiny.",
    url: "https://dev-games.progaindia.com/games/slots/wrathofthevikings/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wrathofthevikings&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "5000x Total Bet",
    minBet: "€0.20 - €125",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails: "",
    maxBet: "€500",
  },
  "Captain Phills Fortune": {
    image: game9,
    bgImage: gamebg9,
    description:
      "Embark on a legendary voyage with Captain Phill! Sail the high seas, face thrilling adventures, and uncover bountiful treasures hidden beyond the horizon. With wild multipliers, powerful bonus features, and an epic pirate theme, this slot offers every spin as a step toward unimaginable fortune",
    url: "https://dev-games.progaindia.com/games/slots/bastacaptainphillsfortune/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastacaptainphillsfortune&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "Up to 250x base",
    minBet: "10 fixed coins",
    currencySupport: "Multi-currency",
    languageSupport: "Multilingual",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Wild Symbol with Multipliers:</strong> Appears only on reels 2, 3, and 4. Every wild carries a random multiplier of 2x or 3x. If more than one wild is part of a win, their multipliers combine for massive payouts.</p><p><strong>Bonus Symbol / Free Spins Trigger:</strong> Bonus ship symbols appear on reels 1, 3, and 5. Hitting 3 Bonus Symbols awards 5x total bet and activates Free Spins round.</p><p><strong>Free Spins Feature:</strong> Triggered with 4 or more Scatter symbols, starts with 10 Free Spins. Every multiplier symbol that lands during a winning spin adds to the total multiplier. New multiplier hits during free spins continue to stack. 3 or more Scatters during the round award +5 extra spins.</p><p><strong>High Volatility Mode:</strong> Designed for adventurous players—payouts are less frequent but have a higher chance of big wins in short bursts.</p>",
    maxBet: "€500",
  },
  "Savage Savannah": {
    image: game10,
    bgImage: gamebg10,
    description:
      "Step into the wild African savannah and discover a land full of majestic creatures and powerful rewards. With beautifully designed animations and thrilling gameplay mechanics, Savage Savannah is a visually captivating slot adventure that promises excitement at every spin",
    url: "https://dev-games.progaindia.com/games/slots/bastasavagesavannah/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastasavagesavannah&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "1000x",
    minBet: "€0.10",
    currencySupport: "Multi-currency",
    languageSupport: "Multilingual",
    freeSpinsStart: "10 Spins",
    viewMode: "Landscape",
    additionalDetails:
      "<p><strong>Free Spins Feature:</strong> Landing 3 or more Scatter symbols triggers Free Game Mode.</p><p><strong>Sticky Wilds & Progression System:</strong> Collect stars (0–20) during Free Games to unlock upgrades.</p><p><strong>Wild Symbol:</strong> Appears on middle 3 reels, substitutes all symbols except Scatter.</p><p><strong>Paylines:</strong> 10 Fixed Paylines.</p><p><strong>Highest Symbol Payout:</strong> Up to x1000.</p>",
    maxBet: "€500",
  },
  "Horns Of Gold": {
    image: game11,
    bgImage: gamebg11,
    description:
      "Discover the legendary horns of gold in this mythical slot game. Spin the reels and claim your golden fortune! This enchanting game blends fantasy with exciting gameplay, promising magical wins.",
    url: "https://dev-games.progaindia.com/games/slots/bastahornsofgold/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastahornsofgold&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.04%",
    resolution: "HD",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "500x Total Bet",
    minBet: "$1",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Wilds and Scatters:</strong> Buffalo symbols on reels 2–5 act as Wilds with x2–x4 multipliers on reels 2 or 3, multiplying if two appear.</p><p><strong>Mystery Symbol:</strong> Transforms into a random paying symbol (except Wilds/Scatters) after each spin on all reels.</p><p><strong>Free Spins:</strong> Purchase Kunoichi (80x bet, 3 Scatters) or Shinobi (200x bet, 4 Scatters) for instant triggers.</p><p><strong>Max Win:</strong> Capped at 10,000x bet, ending free spins round if reached.</p><p><strong>Ways to Win:</strong> 2,304 ways with 3 symbols on reels 1 and 6, and 4 on reels 2–5.</p>",
    maxBet: "€500",
  },
  "Secret of the Dragon Spirit": {
    image: game12,
    bgImage: gamebg12,
    description:
      "Unlock the secrets of the ancient dragon spirit. Harness its power and win legendary rewards! This captivating slot takes you on a journey through mystical lands with powerful dragons and untold riches.",
    url: "https://dev-games.progaindia.com/games/slots/bastasecretofthedragonspirit/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastasecretofthedragonspirit&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "500x Total Bet",
    minBet: "$0.05",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Wild Symbol:</strong> The Dragon Spirit acts as a Wild, substituting for all symbols and expanding to cover entire reels for bigger wins.</p><p><strong>Scatter Symbol:</strong> Landing 3+ Dragon Egg Scatters triggers free spins with increasing multipliers.</p><p><strong>Free Spins:</strong> Awarded with 3+ Scatters, starting with 10 spins and a x1 multiplier that grows with each win.</p><p><strong>Mystery Respins:</strong> Randomly triggered, locking high-value symbols for respins with guaranteed wins.</p><p><strong>Max Win:</strong> Capped at 1,000x the bet, offering massive reward potential.</p>",
    maxBet: "€500",
  },
  "The Lost Tiki Empire": {
    image: game13,
    bgImage: gamebg4,
    description:
      "Explore the mysterious Tiki Empire and its hidden treasures. Uncover ancient secrets and win big prizes! This tropical adventure is filled with vibrant visuals and exciting bonus features.",
    url: "https://dev-games.progaindia.com/games/slots/thelosttikiempire/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=thelosttikiempire&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "256x",
    minBet: "€1",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Tumble Feature:</strong> Winning combinations disappear; new symbols drop in to fill gaps. Tumbling continues until no more wins are formed.</p><p><strong>Random Multiplier Feature:</strong> Symbols in winning clusters may carry 2x or 4x multipliers. Multipliers multiply together—up to a maximum of 256x!</p><p><strong>Free Spins Feature:</strong> Triggered by landing 3+ SCATTER symbols anywhere. Starts with 10 free spins, retriggerable with increasing free spins per additional scatter.</p><p><strong>Buy Free Spins:</strong> Players can purchase the Free Spins round directly for 100x current total bet.</p><p><strong>Scatter Symbol:</strong> Pays from any position, not just paylines.</p>",
    maxBet: "€500",
  },
  "Wild Blossom": {
    image: game14,
    bgImage: gamebg14,
    description:
      "Wild Blossom is a captivating slot game where flowers bloom with every spin, offering players a chance to experience nature's charm and blossoming wins.",
    url: "https://dev-games.progaindia.com/games/slots/wildblossom/index.php?amount_type=4&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wildblossom&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "HD",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "256x",
    minBet: "$1",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait",
    additionalDetails:
      "<p><strong>Tumble Feature:</strong> Winning combinations disappear, and new symbols fall, continuing until no more wins appear.</p><p><strong>Random Multiplier Feature:</strong> Symbols in winning clusters may carry 2x or 4x multipliers, with a maximum of 256x during free spins.</p><p><strong>Free Spins Rules:</strong> Triggered by 3+ Scatter symbols, starting with 10 free spins, with additional spins on re-triggers.</p><p><strong>Buy Free Spins:</strong> Instantly trigger free spins by purchasing for 100x the current total bet.</p>",
    maxBet: "€500",
  },
  "Veil of Magic": {
    image: game15,
    bgImage: gamebg4,
    description:
      "Unravel the mysteries behind the veil of magic. This enchanting slot game is filled with spells, potions, and bewitching wins.",
    url: "https://dev-games.progaindia.com/games/slots/bastaveilofmagic/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastaveilofmagic&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "500x Total Bet",
    minBet: "10 fixed coins",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails: "",
    maxBet: "€500",
  },
  "Shadow Syndicate": {
    image: game16,
    bgImage: gamebg16,
    description:
      "Welcome to the underground where the shadows hide secrets… and big wins. Step into the thrilling world of crime, mystery, and fortune in Shadow Syndicate a high-stakes slot game where every spin could unlock your biggest heist yet. With slick visuals, gripping characters, and explosive multipliers, this game brings cinematic flair to casino gameplay. Whether you're playing on mobile or desktop, Shadow Syndicate delivers non-stop action, dynamic bonus rounds, and a bold design players love.",
    url: "https://dev-games.progaindia.com/games/slots/bastashadowsyndicate/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=bastashadowsyndicate&env=stg",
    category: " Video Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "10000x Total Bet",
    minBet: "€1.00",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Multi-character Wild/Scatter Symbols:</strong> Each gangster acts as a wild with a random multiplier (x2, x3, x4).</p><p><strong>Mystery Symbols:</strong> Random symbols drop and transform into one matching symbol.</p><p><strong>Buy Free Spins Option:</strong> Instantly enter bonus rounds with 80x or 200x total bet.</p><p><strong>Optimized Controls:</strong> Autoplay, Quick Spin, Bet Menu, Game Logs.</p><p><strong>Two Free Spins Modes:</strong><br>1. <strong>Kunoichi Mode</strong> (3 scatters): Sticky wild multipliers<br>2. <strong>Shinobi Mode</strong> (4 scatters): Expanded 6x4 grid and increased win ways (4096).</p>",
    maxBet: "€500",
  },
  "Princess of Atlantis 1000": {
    image: game17,
    bgImage: gamebg4,
    description:
      "Dive into the depths of Atlantis with the beautiful princess. Discover underwater treasures and magical bonuses. This visually stunning game transports you to an aquatic wonderland filled with mythical riches.",
    url: "https://dev-games.progaindia.com/games/slots/princessofatlantis1000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=princessofatlantis1000&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "500x Total Bet",
    minBet: "10 fixed coins",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails: "",
    maxBet: "€500",
  },
  "Gate of Eternity 1000": {
    image: game18,
    bgImage: gamebg4,
    description:
      "Step beyond the veil of time into a world where myth meets magic. Gate of Eternity is an epic slot game journey through enchanted realms, powerful runes, and timeless treasures. Packed with mystery, fantasy, and high-volatility rewards — this game is made for thrill-seekers and treasure hunters alike.",
    url: "https://dev-games.progaindia.com/games/slots/gatesofeternity1000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=gatesofeternity1000&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "500x Total Bet",
    minBet: "10 fixed coins",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails: "",
    maxBet: "€500",
  },
  "Wrath of the Vikings 5000": {
    image: game19,
    bgImage: gamebg4,
    description:
      "Face the fury of the Vikings in this action-packed slot game. Battle for glory and legendary treasures! Prepare for an epic saga filled with fearsome warriors, powerful weapons, and immense riches.",
    url: "https://dev-games.progaindia.com/games/slots/wrathofthevikings5000/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=wrathofthevikings5000&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "500x Total Bet",
    minBet: "10 fixed coins",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails: "",
    maxBet: "€500",
  },
  "The Sands Quest": {
    image: game20,
    bgImage: gamebg20,
    description:
      "Embark on a legendary journey through golden sands and forgotten tombs in The Sands Quest. With every spin, you inch closer to lost treasures and mystical rewards. Featuring cascading wins, powerful multipliers, and thrilling free spins, this slot transforms the heat of the desert into pure gold. Whether you're chasing ancient artifacts or modern payouts, the adventure starts here.",
    url: "https://dev-games.progaindia.com/games/slots/thesandsquest/index.php?amount_type=1&session_id=&channel=&reality_check=60&full_site_code=pgstgvg&username=pg3&category=slotgames&language=en&game_name=thesandsquest&env=stg",
    category: "Slot",
    volatility: "Medium to High",
    rtp: "96.5%",
    resolution: "Full HD / 16:9",
    platforms: ["Apple", "Android", "Desktop"],
    technology: "HTML5",
    wins: "Multiplied",
    maxWin: "15000x Total Bet",
    minBet: "€1",
    currencySupport: "Multi-currency + Crypto",
    languageSupport: "Multi-language",
    freeSpinsStart: "10 Spins",
    viewMode: "Portrait/Landscape",
    additionalDetails:
      "<p><strong>Game Rules:</strong> Symbols pay anywhere; total number of same symbol at spin end determines win value. All wins multiplied by base bet, expressed as actual wins in coins. When winning with multiple symbols, all wins add to total win.</p><p><strong>Scatter Symbol:</strong> Present on all reels, pays on any position. 4 Scatters=€1,500.00, 5 Scatters=€2,500.00, 6+ Scatters=€50,000.00.</p><p><strong>Multiplier Symbols:</strong> Appear on all reels during spins and tumbles in base game and Free Spins. Random values from 2x to 500x; total win multiplied by the sum of all Multiplier values at sequence end.</p><p><strong>Free Spins Rules:</strong> Awarded with 4+ Scatters, starting with 10 free spins. Multiplier value adds to total Multiplier on winning spins, multiplying the win. 3+ Scatters during Free Spins award 5 additional spins. Special reels in play.</p>",
    maxBet: "€500",
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
    <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center pt-20">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={game.image}
              alt={decodedGameName}
              className="w-full md:w-1/2 h-[200px] md:h-[400px] object-contain rounded-lg "
            />

            <div>
              <h1 className="text-4xl font-bold text-[#FFC107] tracking-tight pb-4">
                {decodedGameName}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                {game.description}
              </p>
              <div className="flex gap-4 pt-6">
                <button
                  onClick={() => handleGameClick(game.url)}
                  className="bg-[#FFC107] text-black px-6 py-3 rounded-md hover:bg-[#FFD54F] transition-colors duration-300 select-none font-semibold shadow-md"
                >
                  Play Demo
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="bg-[#28292C] text-white px-6 py-3 rounded-md hover:bg-[#23263a] transition-colors duration-300 select-none font-semibold shadow-md"
                >
                  Back to Games
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 space-y-6 pt-8">
            <div>
              <h2 className="text-3xl font-bold text-[#FFC107] mt-8 tracking-tight">
                Game Snapshot
              </h2>
              {/** Array for Game Snapshot */}
              {(() => {
                const snapshotData = [
                  { label: "Category", value: game.category },
                  { label: "Resolution", value: game.resolution },
                  { label: "RTP", value: game.rtp },
                  { label: "Free Spins Start", value: game.freeSpinsStart },
                  { label: "View Mode", value: game.viewMode },
                  { label: "Platforms", value: game.platforms.join(", ") },
                  { label: "Technology", value: game.technology },
                  { label: "Wins", value: game.wins },
                ];
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-6 p-6 bg-[#28292C] rounded-xl w-full shadow-lg border border-[#3A3B3E] transition-all duration-300 hover:shadow-xl">
                    {snapshotData.map((item) => (
                      <div
                        key={item.label}
                        className="p-4 rounded-lg hover:bg-[#2F3033] transition-colors duration-200 captalize"
                      >
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-xl font-bold text-white mt-2 uppercase">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })()}
              <h2 className="text-3xl font-bold text-[#FFC107] mt-8 tracking-tight">
                Information
              </h2>
              {/** Array for Information */}
              {(() => {
                const infoData = [
                  { label: "Max Win", value: game.maxWin },
                  { label: "Max Bet", value: game.maxBet },
                  { label: "Min Bet", value: game.minBet },
                  { label: "Currency Support", value: game.currencySupport },
                  { label: "Language Support", value: game.languageSupport },
                  { label: "Volatility", value: game.volatility },
                ];
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-6 p-6 bg-[#28292C] rounded-xl w-full shadow-lg border border-[#3A3B3E] transition-all duration-300 hover:shadow-xl captalize">
                    {infoData.map((item) => (
                      <div
                        key={item.label}
                        className="p-4 rounded-lg hover:bg-[#2F3033] transition-colors duration-200 "
                      >
                        <p className="text-sm text-gray-400 uppercase tracking-wide ">
                          {item.label}
                        </p>
                        <p className="text-xl font-bold text-white mt-2 uppercase">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
          <div className="flex flex-wrap pt-5 md:py-20  justify-between items-center w-full gap-4">
            <img
              src={game.bgImage}
              alt={decodedGameName}
              className="w-full md:w-1/2 h-auto object-cover rounded-xl mb-6 md:mb-0 md:mr-8"
            />
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full md:w-auto">
              {/* Product Sheet PDF */}
              <a
                href="/path/to/product-sheet.pdf"
                download
                className="flex flex-col items-center bg-[#28292C] rounded-2xl px-8 py-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all cursor-pointer border-2 border-[#FFC107] min-w-[200px] max-w-[240px] mx-2 group"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFC107] to-[#FFB347] mb-4 group-hover:scale-110 transition-transform">
                  <AiOutlineFilePdf className="text-4xl text-[#23263a]" />
                </span>
                <div className="text-center">
                  <div className="text-white font-bold text-xl leading-tight mb-1">
                    Product Sheet
                  </div>
                  <div className="text-[#FFC107] text-sm font-medium">
                    PDF Download
                  </div>
                </div>
              </a>
              {/* Promotion Pack ZIP */}
              <a
                href="/path/to/promotion-pack.zip"
                download
                className="flex flex-col items-center bg-[#28292C] rounded-2xl px-8 py-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all cursor-pointer border-2 border-[#FFC107] min-w-[200px] max-w-[240px] mx-2 group"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFC107] to-[#FFB347] mb-4 group-hover:scale-110 transition-transform">
                  <AiOutlineFileZip className="text-4xl text-[#23263a]" />
                </span>
                <div className="text-center">
                  <div className="text-white font-bold text-xl leading-tight mb-1">
                    Promotion Pack
                  </div>
                  <div className="text-[#FFC107] text-sm font-medium">
                    ZIP Download
                  </div>
                </div>
              </a>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#FFC107] mt-8 tracking-tight">
            Key Highlights
          </h2>
          {game.additionalDetails && (
            <div
              className="mt-8 p-6 bg-[#28292C] rounded-xl shadow-lg border border-[#3A3B3E]"
              dangerouslySetInnerHTML={{ __html: game.additionalDetails }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
