import React from "react";
import qualityIcon from "../../assets/game-studio/adv-1.png";
import trustIcon from "../../assets/game-studio/adv-2.png";
import passionIcon from "../../assets/game-studio/adv-3.png";
import communicationIcon from "../../assets/game-studio/adv-4.png";
import bgImage from "../../assets/game-studio/grey-bg-png.png";

const AdvantagesSection: React.FC = () => {
  const advantages = [
    { icon: qualityIcon, title: "QUALITY" },
    { icon: trustIcon, title: "TRUST" },
    { icon: passionIcon, title: "PASSION" },
    { icon: communicationIcon, title: "COMMUNICATION" },
  ];

  return (
    <section
      className={`text-white bg-black  py-17 md:pt-40   width-[100%] px:2 md:px-6 bg-cover bg-no-repeat bg-top  `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:grid md:grid-cols-2 gap-10 items-start">
        {/* Cards Section - On top for smaller screens */}
        <div className="order-1 md:order-2">
          {/* Grid for smaller screens (below md) */}
          <div className="grid grid-cols-2 gap-2 md:gap-6 md:hidden">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-[#28292C] p-3 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 object-contain mb-6"
                />
                <h3 className="text-white font-bold text-base uppercase tracking-wider">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Custom layout for md and above */}
          <div className="hidden md:block relative h-[450px]">
            {/* First Card (Quality) - Wider, Top Right */}
            <div className="absolute top-0 left-[20%] w-[44%] bg-[#28292C] p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
              <img
                src={advantages[0].icon}
                alt={advantages[0].title}
                className="w-24 h-24 scale-[1.2] object-contain mb-5"
              />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                {advantages[0].title}
              </h3>
            </div>

            {/* Second Card (Trust) - Less Wide, Slightly Down */}
            <div className="absolute top-[5%] right-0 w-[34%] bg-[#28292C] p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
              <img
                src={advantages[1].icon}
                alt={advantages[1].title}
                className="w-24 h-24 scale-[1.2] object-contain mb-5"
              />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                {advantages[1].title}
              </h3>
            </div>

            {/* Third Card (Passion) - Left, Below Text */}
            <div className="absolute bottom-[5%] left-[14%] w-[42%] bg-[#28292C] p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
              <img
                src={advantages[2].icon}
                alt={advantages[2].title}
                className="w-24 h-24 scale-[1.2] object-contain mb-4"
              />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                {advantages[2].title}
              </h3>
            </div>

            {/* Fourth Card (Communication) - Right, Slightly Lower */}
            <div className="absolute bottom-0 right-0 w-[42%] bg-[#28292C] p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
              <img
                src={advantages[3].icon}
                alt={advantages[3].title}
                className="w-24 h-24 scale-[1.2] object-contain mb-4"
              />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                {advantages[3].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Text Content - Below cards for smaller screens */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            ADVANTAGES <br /> OF WORKING WITH US
          </h2>
          <ul className="text-sm md:text-base space-y-4 text-gray-300 max-w-md">
            <li>
              With 8 Years Of Experience In The Gaming Industry, Our Team Knows
              What It Takes To Create Successful Games.
            </li>
            <li>
              We Are Committed To Innovation, Constantly Pushing The Limits Of
              What’s Possible In Game Design.
            </li>
            <li>
              Our Attention To Detail And Dedication To Excellence Ensure That
              Every Project We Undertake Meets The Highest Standards.
            </li>
            <li>
              We Work Closely With Our Clients To Understand Their Goals And
              Deliver Results That Exceed Expectations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
