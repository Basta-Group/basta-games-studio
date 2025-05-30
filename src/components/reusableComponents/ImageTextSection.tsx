import React from "react";
import bgImage from "../../assets/game-studio/grey-bg-png.png";

interface ImageTextSectionProps {
  imageSrc: string;
  heading: string;
  subheading?: string;
  paragraphLines: string[];
  imageLeft?: boolean;
  className?: string;
  imgClassName?: string; // 👈 New prop for custom img class
}
const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  heading,
  subheading,
  paragraphLines,
  imageLeft = false,
  className = "",
  imgClassName = "", // 👈 Default empty string
}) => {
  return (
    <section
      className={`text-white bg-black  py-20 md:pt-40   width-[100%]  px-6 bg-cover bg-no-repeat bg-top ${className} `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {" "}
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
          imageLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-10`}
      >
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={imageSrc}
            alt="Section Visual"
            className={`w-full max-w-md object-contain ${imgClassName}`} // 👈 Applied here
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          {subheading && (
            <h3 className="text-xl font-semibold mb-4">{subheading}</h3>
          )}
          <div className="space-y-1 text-sm md:text-base text-gray-300 leading-relaxed">
            {paragraphLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
