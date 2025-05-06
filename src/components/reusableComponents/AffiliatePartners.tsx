import React from "react";
import bet6 from "../../assets/logo-slider/bet--6.png";
import bet7 from "../../assets/logo-slider/bet--7.png";
import bet8 from "../../assets/logo-slider/bet--8.png";
import bet9 from "../../assets/logo-slider/bet--9.png";
import bet10 from "../../assets/logo-slider/bet--10.png";
import bet11 from "../../assets/logo-slider/bet--11.png";
import bet12 from "../../assets/logo-slider/bet--12.png";
import bet13 from "../../assets/logo-slider/bet--13.png";

const partnerLogos = [
  { src: bet6, alt: "SoftGamings" },
  { src: bet7, alt: "888 Casino" },
  { src: bet8, alt: "Kindred" },
  { src: bet9, alt: "Betsson Group" },
  { src: bet10, alt: "Gamesys" },
  { src: bet11, alt: "SkillOnNet" },
  { src: bet12, alt: "1XBET" },
  { src: bet13, alt: "SoftBet" },
];

const AffiliatePartners: React.FC = () => (
  <section className="bg-[#181A29] md:py-16 px-2">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2 uppercase tracking-wide">
        AFFILIATE PARTNERS
      </h2>
      <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto text-sm md:text-base">
        We Work With The Industry's Leading Affiliates To Ensure Players Can
        Learn More About Our Premium Products.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-6 gap-y-2 md:gap-y-6">
        {partnerLogos.map((logo, idx) => (
          <div key={idx} className=" rounded-lg">
            <img
              src={logo.src}
              alt={logo.alt + " logo"}
              className="w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              role="img"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AffiliatePartners;
