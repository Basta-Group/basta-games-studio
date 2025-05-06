import React from "react";
import { Link } from "react-router-dom";
import { games } from "../../data/games";

interface GameCardProps {
  title: string;
  image: string;
  subtitle: string;
  stats: {
    category: string;
    maxWin: string;
    volatility: string;
    rtp: string;
  };
  color?: "blue" | "purple" | "green" | "orange";
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  image,
  subtitle,
  stats,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "bg-gradient-to-br from-[#1D2A8B] to-[#1554B1]",
    purple: "bg-gradient-to-br from-[#6C128A] to-[#AD0087]",
    green: "bg-gradient-to-br from-[#1C3D13] to-[#1C7622]",
    orange: "bg-gradient-to-br from-[#C43232] to-[#E98D41]",
  };

  const game = games.find((g) => g.title === title);
  const slug = game ? game.slug : "";

  return (
    <Link
      to={`/games/${slug}`}
      className="block h-full"
      aria-label={`View details for ${title}`}
    >
      <div
        className={`relative rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${colorClasses[color]} group`}
        role="article"
        aria-label={`Game card for ${title}`}
      >
        {/* Front content */}
        <div className="relative aspect-[5/4]">
          <img
            src={image}
            alt={`${title} game preview`}
            className="w-full h-full object-cover"
            role="img"
          />
        </div>

        <div className="py-2 px-2 sm:px-4 text-white">
          <h3
            className="text-lg font-bold mb-1 truncate"
            role="heading"
            aria-level={3}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-300 mb-4" role="text">
            {subtitle}
          </p>

          <div
            className="grid grid-cols-4 gap-4 text-center text-sm"
            role="list"
            aria-label="Game statistics"
          >
            <div role="listitem">
              <p className="text-gray-400 text-xs mb-1">Category</p>
              <p className="font-medium">{stats.category}</p>
            </div>
            <div role="listitem">
              <p className="text-gray-400 text-xs mb-1 truncate">Max Win</p>
              <p className="font-medium">{stats.maxWin}</p>
            </div>
            <div role="listitem">
              <p className="text-gray-400 text-xs mb-1">Volatility</p>
              <p className="font-medium">{stats.volatility}</p>
            </div>
            <div role="listitem">
              <p className="text-gray-400 text-xs mb-1">RTP</p>
              <p className="font-medium">{stats.rtp}</p>
            </div>
          </div>
        </div>

        {/* Hover Blur Overlay with Flip Animation */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center perspective">
          <div className="transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
            {/* Front of Overlay */}
            <div className="backface-hidden flex flex-col items-center">
              {/* Play Button */}
              <button className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Demo Text */}
              <p className="text-orange-400 text-2xl font-bold">Demo</p>
            </div>

            {/* Back of Overlay */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-center items-center">
              {/* Play Button */}
              <button className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-2 border-3 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Play Text */}
              <p className="text-orange-400 text-2xl font-bold">Demo</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
