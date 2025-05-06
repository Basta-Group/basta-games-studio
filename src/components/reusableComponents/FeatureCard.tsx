import React from "react";

interface FeatureCardProps {
  img: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  img,
  title,
  description,
}) => (
  <div
    className="rounded-lg shadow-lg p-6 flex flex-col items-start text-left text-white"
    style={{ background: "linear-gradient(180deg, #1D2A8B 0%, #1554B1 100%)" }}
  >
    <div className="w-full flex justify-center">
      <img src={img} alt={title} className="h-20 w-20 mb-4 object-contain" />
    </div>
    <div className="font-extrabold text-left text-base md:text-lg mb-2 uppercase tracking-wide">
      {title}
    </div>
    <div className="text-white/90 text-left text-xs md:text-sm font-medium">
      {description}
    </div>
  </div>
);

export default FeatureCard;
