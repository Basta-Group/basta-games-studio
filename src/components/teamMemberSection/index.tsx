import React from "react";
import teamMember1 from "../../assets/game-studio/ripul-1.png";
import teamMember2 from "../../assets/game-studio/ripul-2.png";
import teamMember3 from "../../assets/game-studio/ripul-3.png";
import teamMember4 from "../../assets/game-studio/ripul-4.png";
import bgImage from "../../assets/game-studio/black-bg.png";

const TeamMemberSection: React.FC = () => {
  const teamMembers = [
    {
      image: teamMember1,
      title: "CHIEF EXECUTIVE OFFICER",
      name: "Ripul Mantrao",
    },
    {
      image: teamMember2,
      title: "CHIEF EXECUTIVE OFFICER",
      name: "Ripul Mantrao",
    },
    {
      image: teamMember3,
      title: "HEAD OF BUSINESS DEVELOPMENT",
      name: "Ripul Mantrao",
    },
    {
      image: teamMember4,
      title: "CHIEF EXECUTIVE OFFICER",
      name: "Ripul Mantrao",
    },
  ];

  return (
    <section
      className={`text-white bg-[#1A1A1A]  py-17 md:pt-40   width-[100%]  px-6 bg-cover bg-no-repeat bg-top  `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            OUR TEAM MEMBER
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1e212d] rounded-xl overflow-hidden text-center flex flex-col items-center pb-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[300px] object-cover object-top mb-4"
              />
              <p className="text-white text-[12px] uppercase font-medium tracking-wide">
                {member.title}
              </p>
              <p className="text-white text-[14px] font-bold mt-1">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
