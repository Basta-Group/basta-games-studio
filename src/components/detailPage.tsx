import React from "react";

import gameImg3 from "../assets/phone-lady.png";
import gameImg5 from "../assets/features-section-phone-girl.png";
import gameImg6 from "../assets/product-innovation.png";
import miniGamesImg from "../assets/laptop-tab-phone.png";
import keyFeaturesImg from "../assets/laptop-tab-phone.png";
import FeatureSection from "./FeatureSection";
import reelsRoomPhone from "../assets/features-section-robot-phone.png";
import PopularGamesSection from "./PopularGamesSection";
import ContactForm from "./ContactForm";
import ResponsibleGamblingCerts from "./reusableComponents/ResponsibleGamblingCerts";
import FeatureCard from "./reusableComponents/FeatureCard";
import cardImg1 from "../assets/card-images/card-img1.png";
import cardImg2 from "../assets/card-images/card-img2.png";
import cardImg3 from "../assets/card-images/card-img3.png";
import cardImg4 from "../assets/card-images/card-img4.png";
import cardImg5 from "../assets/card-images/card-img5.png";
import cardImg6 from "../assets/card-images/card-img6.png";
import cardImg7 from "../assets/card-images/card-img7.png";
import cardImg8 from "../assets/card-images/card-img8.png";

const DetailPage: React.FC = () => (
  <div className="pt-16 md:mt-0">
    <FeatureSection
      title="BASTA SPACE HUNTER"
      phoneImg={gameImg5}
      description={
        <>
          Experience the thrill of next-level gaming with Basta Space Hunter.
          Dive into a universe of thrilling slot games, featuring innovative
          themes, stunning visuals, and massive payouts. Enjoy fair gameplay,
          top-tier security, and outstanding customer support.
          <br />
          Join our community of satisfied players today and unlock a world of
          endless entertainment!
        </>
      }
      bgClassName="bg-gradient-to-r from-[#1E255A] to-[#324ED7]"
      phoneImgClassName=""
    />
    {/* PopularGamesSection */}
    <PopularGamesSection title="OUR GAMES VARIENTS" />
    <FeatureSection
      title="REELS ROOM"
      description={
        <>
          Reels Room is a brand-new feature inside the Basta Bingo platform —
          designed to enhance player engagement and boost cross-sell between
          bingo and slots. Instead of playing for cash, players compete to win
          free spins on top-performing slot games, transforming traditional
          bingo fans into hybrid players.
          <br />
          Available across all best-in-class BastaPlay slots, this feature can
          be added to any operator's exclusive bingo rooms. Reels Room enables
          the creation of bingo games that reward free spins either during game
          sessions or in a dedicated spins room.
          <br />
          Very few platforms offer slot spin prizes within bingo rooms.
          <br />
          Be the next one to stand out with Basta Bingo.
        </>
      }
      phoneImg={reelsRoomPhone}
      bgClassName="bg-gradient-to-r from-[#1E255A] to-[#324ED7]"
      textOnRight
      phoneImgClassName=""
    />
    <div className="bg-[#181B29]">
      <FeatureSection
        title="KEY FEATURES"
        description="As well as a customizable UI, we have developed a well-versed competitive product that offers all the key features expected in bingo and ensures operators have the variants and tools to target players' needs across different markets. Our back-office tool is intuitive for both scheduling and analytics. It promotes user interaction through an in-game lobby on both mobile and desktop, alongside a fresh, easy to navigate user interface to keep players coming back."
        phoneImg={keyFeaturesImg}
        phoneImgClassName="md:scale-[1] md:h-full sm:h-full h-full"
        bgClassName="bg-[#181B29]"
        textOnRight
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-12 px-2">
        <FeatureCard
          img={cardImg1}
          title="Simple Integration"
          description="One API is all that is needed to integrate not only our bingo product, but the entire BastaPlay portfolio."
        />
        <FeatureCard
          img={cardImg2}
          title="Global Liquidity"
          description="With partners and licenses on a global scale, we have one of the best liquidity pools in the bingo network and allow entry into key territories."
        />
        <FeatureCard
          img={cardImg3}
          title="Commercials"
          description="We like to think we cannot be beaten on commercials and offer competitive rates on all solutions and services."
        />
        <FeatureCard
          img={cardImg4}
          title="Innovation"
          description="As already proven by our casino games, our brand is fully focused on delivering product features and environments at industry leading timelines."
        />
        <FeatureCard
          img={cardImg5}
          title="Valuable Experience"
          description="The BastaPlay bingo team have decades of bingo experience among them, having previously worked on market leading bingo brands and some of the biggest online gaming platforms."
        />
        <FeatureCard
          img={cardImg6}
          title="Full Solution"
          description="We have the expertise to internally support on the network scheduling, pricing and analysis. We also offer a chat host feature in multiple languages to support a great bingo experience."
        />
        <FeatureCard
          img={cardImg7}
          title="Flexibility"
          description="A partnership with BastaPlay bingo is a two-way street, allowing operators significant input to shape and steer the product roadmap and define unique bingo clients to follow."
        />
        <FeatureCard
          img={cardImg8}
          title="Marketing Features"
          description="We currently have the best marketing features in the industry from progressive & fixed jackpots to your very own mobile first exclusive variant, Bingo Blast."
        />
      </div>
    </div>
    <FeatureSection
      title="PRODUCT INNOVATION! BASTA BINGO BLAST"
      description=""
      phoneImg={gameImg6}
      bgClassName="bg-gradient-to-r from-[#1E255A] to-[#324ED7]"
      phoneImgClassName=""
    >
      {" "}
      <div className="text-white/90 text-base space-y-6">
        <div>
          <p>
            Basta Bingo Blast is an exclusive game developed by BastaPlay –
            created to bring a fresh and modern twist to the classic bingo
            experience. Designed fully in-house, this next-generation bingo game
            goes beyond visuals, introducing a dynamic and fast-paced format
            built for today's players.
          </p>
        </div>
        <div>
          <p>
            With real-time gameplay optimized for mobile, and powered by our
            advanced backend technology, Basta Bingo Blast delivers high-speed
            excitement anytime, anywhere.
          </p>
        </div>
        <div>
          <p className="italic">Bingo, reimagined. The Basta way.</p>
        </div>
      </div>
    </FeatureSection>
    <FeatureSection
      title="REELS ROOM"
      description={
        <>
          Reels Room is our latest innovation — a dedicated slot feature room
          within the Basta Bingo platform, designed to enhance user experience
          and drive cross-sell engagement. Instead of playing for cash, players
          win free slot spins, offering them the chance to become hybrid players
          who enjoy both bingo and slots.
          <br />
          This feature is available across all top-performing BastaPlay slot
          games and can be seamlessly added to any operator's exclusive bingo
          rooms. Reels Room enables the creation of bingo sessions that reward
          free spins, either during regular gameplay or in a dedicated spins
          room.
          <br />
          Only a select few providers offer slot spin rewards within bingo
          rooms.
          <br />
          Be one of the first - with Basta Bingo.
        </>
      }
      phoneImg={reelsRoomPhone}
      bgClassName="bg-[#181B29]"
      textOnRight
      phoneImgClassName=""
    />

    <FeatureSection
      title="CUSTOM-TAILORED SOLUTIONS"
      description={
        <>
          At BastaPlay, we know that every iGaming brand is unique — with its
          own identity, audience, and vision for success. That's why we offer
          fully customized solutions, designed to match the exact needs of each
          partner.
          <br />
          From themes, colors, and fonts to gameplay dynamics and UX design,
          everything is built to reflect your brand values and engage your
          players.
          <br />
          Our team works closely with you from the first concept to the final
          user experience, ensuring a seamless, branded product that stands out
          in today's competitive iGaming market.
        </>
      }
      phoneImg={gameImg3}
      bgClassName="bg-gradient-to-r from-[#1E255A] to-[#324ED7]"
      phoneImgClassName=""
    />

    <FeatureSection
      title="MINI GAMES"
      description="Let your bingo players discover the exciting world of casino with the mini games section. A completely customisable mini games area that players can access whilst in a bingo room allows you to cross-sell and increase the player experience by placing them in the driver seat. A multi-view feature lets them choose the play mode."
      phoneImg={miniGamesImg}
      bgClassName="bg-[#181B29]"
      phoneImgClassName="md:scale-[1] md:h-full sm:h-full h-full"
      textOnRight
    />

    <ContactForm />
    <ResponsibleGamblingCerts />
  </div>
);

export default DetailPage;
