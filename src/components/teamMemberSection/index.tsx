import React from "react";
import bgImage from "../../assets/game-studio/black-bg.png";

const TeamMemberSection: React.FC = () => {
  

  return (
    <section
      className={`text-white bg-[#1A1A1A]  py-17 md:pt-40   width-[100%]  px-6 bg-cover bg-no-repeat bg-top  `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    </section>
  );
};

export default TeamMemberSection;
