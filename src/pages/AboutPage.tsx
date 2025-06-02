import React from "react";
import aboutImage from "../assets/about-image.png";
// import OperatorPartners from "../components/reusableComponents/OperatorPartners";
// import AffiliatePartners from "../components/reusableComponents/AffiliatePartners";
import strikeBanner from "../assets/game-images/basta-strike-banner.png";
import FeatureSection from "../components/FeatureSection";
import respGambImg from "../assets/responsible-gambling.png";
import reelsRoomPhone from "../assets/nikola-img.jpg";
import auditImg from "../assets/laptop-tab-phone.png";
import gameImg1 from "../assets/pragmatic-img-1.png";
import gameImg2 from "../assets/pragmatic-img-2.png";
import gameImg3 from "../assets/pragmatic-img-4.png";
import gameImg4 from "../assets/pragmatic-img-4.png";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#151929] pt-16">
      <img
        src={strikeBanner}
        alt="Strike Legends Banner"
        title="Strike Legends Banner"
        className="w-full max-w-7xl h-auto object-cover mb-8 mx-auto rounded-xl shadow-lg"
      />
      {/* About Basta */}
      <FeatureSection
        title="Nikola Stanković"
        subtitle="Founder & CEO of BastaPlay Malta"
        description="Nikola Stanković is a Serbian-born entrepreneur, strategist, and innovator in the global fintech and iGaming industries. At just 21 years old, he is the Founder and CEO of BastaPlay Malta, a fully licensed B2B iGaming company recognized for its original slot and crash games, proprietary RGS platform, and in-house certification lab, NGLCert. Under his leadership, the company launched with 80 certified titles and aims to expand its portfolio to 200 games by the end of 2025."
        phoneImg={reelsRoomPhone}
        bgClassName="bg-[#181B29]"
        phoneImgClassName="md:scale-[1] mb-4"
        textOnRight
      />

      {/* <OperatorPartners /> */}
      {/* WE ARE BastaPlay SECTION */}
      <section className="relative pt-20 pb-8 bg-gradient-to-r from-[#1E255A] to-[#324ED7]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-row items-start mb-6 w-full justify-center lg:justify-start">
              <div
                className="w-1 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-[#FFB347] to-[#FF7B54] rounded-full mr-4"
                role="presentation"
              ></div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-left"
                role="heading"
                aria-level={2}
              >
                WE ARE BASTAPLAY
              </h2>
            </div>
            <p
              className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-lg"
              role="text"
            >
              Led by CEO Nikola Stanković from our headquarters in Malta,
              BastaPlay is a next-generation gaming platform and game supplier,
              serving high-growth operators and markets worldwide.
              <br />
              Delivering seamless access through a unified API, our
              multi-product ecosystem includes: online slots, live casino, crash
              games, virtual sports, bingo, and tailor-made white-label
              platforms. With full compliance in regulated jurisdictions and
              support for multiple languages and currencies, BastaPlay empowers
              partners to launch and scale quickly.
              <br />
              Driven by innovation, quality, and a commitment to responsible
              gaming, we create unforgettable experiences for players — and
              scalable success for operators.
            </p>
          </div>
          {/* Right: Feature Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-gradient-to-tr from-[#14266A] to-[#2B46B2] rounded-xl p-6 flex flex-col items-center text-center text-white">
              <img
                src={gameImg1}
                alt="Slots, Live Casino, Bingo, Virtual Sports, Sportsbook"
                title="Slots, Live Casino, Bingo, Virtual Sports, Sportsbook"
                className="h-16 w-16 mb-4"
              />
              <div className="font-semibold text-[15px]">
                Slots, Live Casino, Bingo, Virtual Sports, Sportsbook And More
                Via A Single AP
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-tr from-[#14266A] to-[#2B46B2] rounded-xl p-6 flex flex-col items-center text-center text-white">
              <img
                src={gameImg2}
                alt="Certified And Licensed In Over 40 Jurisdictions"
                title="Certified And Licensed In Over 40 Jurisdictions"
                className="h-16 w-16 mb-4"
              />
              <div className="font-semibold text-[15px]">
                Certified And Licensed In Over 40 Jurisdictions
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-tr from-[#14266A] to-[#2B46B2] rounded-xl p-6 flex flex-col items-center text-center text-white">
              <img
                src={gameImg3}
                alt="Multi-Award-Winning Content"
                title="Multi-Award-Winning Content"
                className="h-16 w-16 mb-4"
              />
              <div className="font-semibold text-[15px]">
                Multi-Award-Winning Content
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-gradient-to-tr from-[#14266A] to-[#2B46B2] rounded-xl p-6 flex flex-col items-center text-center text-white">
              <img
                src={gameImg4}
                alt="Mobile, Desktop, 33 Languages And All Currencies"
                title="Mobile, Desktop, 33 Languages And All Currencies"
                className="h-16 w-16 mb-4"
              />
              <div className="font-semibold text-[15px]">
                Mobile, Desktop, 33 Languages And All Currencies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <AffiliatePartners /> */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Centered Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 text-center">
          ABOUT <span className="text-[#FF6B6B]">Basta Games Studio</span>
        </h2>
        <div className="">
          <img
            src={aboutImage}
            alt="About BastaPlay statistics"
            title="About BastaPlay statistics"
            className=" w-full md:h-[800px] object-contain z-0"
          />
        </div>
        {/* Right: Description */}
        <div className="md:absolute md:right-0 md:top-[120px] text-right md:flex md:justify-end">
          <div className="flex-end flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">
              BASTAPLAY <br />
              INNOVATING THE FUTURE OF GAMBLING ENTERTAINMENT
            </h3>
            <ul className="text-white/80 space-y-2 text-base">
              <li>
                Welcome to BastaPlay – where exciting gambling games meet
                endless entertainment! With a cast of colorful characters, our
                games are so lively, you'll feel like you've stepped into a
                cartoon adventure. Dive in, and watch the hours fly by as you
                enjoy the ride!
              </li>
            </ul>
          </div>
        </div>

        {/* Vision and What We Offer Section */}
        <div className="relative mt-16 hidden">
          <div className="bg-[#23263a] rounded-2xl p-8 relative z-10 mb-8">
            <h4 className="text-xl font-bold text-white mb-2">OUR VISION</h4>
            <p className="text-white/80">
              At BastaPlay, We Envision A World Where Gambling Is Not Just About
              Winning But About The Journey. Our Mission Is To Redefine The
              Online Gambling Landscape By Creating Games That Are Not Only Fair
              And Secure But Also Immersive And Engaging.
            </p>
          </div>
          <div className="bg-[#181A29] flex flex-col md:flex-row items-stretch py-8 px-2 md:px-8 rounded-2xl shadow-lg gap-8 md:gap-0">
            {/* Left: Stacked Heading */}
            <div className="text-center md:flex flex-col justify-center items-center md:items-start min-w-[120px] md:min-w-[160px] mb-4 md:mb-0">
              <span className="text-white font-extrabold text-2xl md:text-3xl leading-none mb-1 text-center md:text-left">
                WHAT &nbsp;
              </span>
              <span className="text-white font-extrabold text-2xl md:text-3xl leading-none mb-1 text-center md:text-left">
                WE&nbsp;
              </span>
              <span className="text-white font-extrabold text-2xl md:text-3xl leading-none text-center md:text-left">
                OFFER
              </span>
            </div>
            {/* Vertical Bar */}
            <div className=" hidden md:flex flex-col justify-center items-center mb-4 md:mb-0 md:mr-6">
              <div className="w-1 h-12 md:h-24 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full" />
            </div>
            {/* Middle: Offer List */}
            <div className="flex flex-col justify-center flex-1 min-w-[200px] mb-4 md:mb-0 md:mr-8 items-center md:items-start">
              <ul className="text-white text-base md:text-lg space-y-1 text-center md:text-left">
                <li>Innovative Game Design</li>
                <li>Cutting-Edge Technology</li>
                <li>User-Centric Approach</li>
                <li>Our Support At Every Stage</li>
              </ul>
            </div>
            {/* Right: Description */}
            <div className="flex flex-col justify-center flex-1 items-center md:items-start">
              <p className="text-white text-base md:text-lg text-center md:text-left px-2 md:px-0">
                Our Portfolio Features A Wide Array Of Games, From Classic Slots
                To Modern, Interactive Experiences. Each Game Is Crafted With
                Meticulous Attention To Detail, Ensuring A Seamless And
                Enjoyable Gaming Experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeatureSection
        title="RESPONSIBLE GAMBLING"
        subtitle=""
        description=""
        phoneImg={respGambImg}
        bgClassName="bg-gradient-to-r from-[#324ED7] to-[#1E255A]"
        textOnRight
      >
        <div className="text-white/90 text-base space-y-6">
          <div>
            <p>
              BastaPlay works closely with regulatory authorities and licensed
              partners to ensure a world-class gaming experience at all times.
            </p>
          </div>
          <div>
            <p>
              As part of our commitment to innovation and excellence, we
              actively monitor and adapt to changes in regulations and licensing
              to unlock new market opportunities and operate at the highest
              industry standards.
            </p>
          </div>
        </div>
      </FeatureSection>

      <FeatureSection
        title=""
        phoneImg={auditImg}
        phoneImgClassName="md:scale-[1] md:h-full sm:h-full h-full"
        bgClassName="bg-[#181B29]"
        reverse={false}
        hideLine
      >
        <div className="text-white/90 text-base space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-1">Audit And Control</h3>
            <p>
              BastaPlay's games are regularly reviewed by independent bodies
              that are formally accredited to ensure both randomness and
              fairness. As such, our games are random number generator tested
              and certified by Gaming Laboratories International, Quinel and
              Gaming Associates. This is also a prerequisite for all markets in
              which we operate.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Compliance</h3>
            <p>
              BastaPlay is licensed and regulated by several industry governing
              bodies, and games are only released upon receiving their seal of
              approval. We also follow strict protocol to comply with
              responsible gaming law for all jurisdictions in which we operate
              or where our games are provided.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">User Protection</h3>
            <p>
              All BastaPlay games are integrated with player protection software
              as part of our license conditions. Our games undergo periodic
              internal testing for quality assurance, and subsequently verified
              by an independent third-party. Furthermore, we fully support the
              GambleAware program as part of our commitment to social
              responsibility. Our procedures are consistently reviewed to ensure
              that our technology and systems meet the required standards of the
              industry, our clients and regulated jurisdictions.
            </p>
          </div>
        </div>
      </FeatureSection>
    </div>
  );
};

export default AboutPage;
