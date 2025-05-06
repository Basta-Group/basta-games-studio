import React from "react";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  phoneImg: string;
  reverse?: boolean;
  bgClassName?: string;
  textOnRight?: boolean;
  children?: React.ReactNode;
  phoneImgClassName?: string;
  hideLine?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  description,
  phoneImg,
  reverse = false,
  bgClassName = "bg-gradient-to-r from-[#1E255A] to-[#324ED7]",
  textOnRight = false,
  children,
  phoneImgClassName = "",
  hideLine = false,
}) => {
  // Determine flex direction
  const flexDirection = reverse ? "lg:flex-row-reverse" : "lg:flex-row";
  // For sections where text is on the right (like the last image)
  const textOrder = textOnRight ? "order-2 lg:order-2" : "order-1 lg:order-1";
  const imageOrder = textOnRight ? "order-1 lg:order-1" : "order-2 lg:order-2";

  return (
    <section
      className={`relative pt-5 md:pt-20 overflow-hidden ${bgClassName}`}
      role="region"
      aria-label={title}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col ${flexDirection} items-center justify-between px-4 sm:px-8`}
      >
        {/* Text Content */}
        <div
          className={`w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left ${textOrder}`}
        >
          <div className="flex flex-row items-start mb-6 w-full justify-center lg:justify-start">
            {/* Vertical Gradient Line next to text content only */}
            {!hideLine && (
              <div
                className="w-1 h-32 sm:h-40 md:h-52 bg-gradient-to-b from-[#FFB347] to-[#FF7B54] rounded-full mr-4 relative"
                role="presentation"
              >
                <div className="absolute rounded-full left-1/2 top-full w-1 h-28 bg-[#1E255A] opacity-80 -translate-x-1/2 "></div>
              </div>
            )}
            <div className={`z-20 `}>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center md:text-left"
                role="heading"
                aria-level={2}
              >
                {title}
              </h2>
              {subtitle && (
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">
                  {subtitle}
                </div>
              )}
              <p
                className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-lg mt-4"
                role="text"
              >
                {description}
              </p>
              {children}
            </div>
          </div>
        </div>
        {/* Phone Image Only */}
        <div
          className={`w-full lg:w-1/2 flex items-end justify-center relative ${imageOrder}`}
        >
          <img
            src={phoneImg}
            alt="Feature preview"
            className={`h-[240px] sm:h-[400px] md:h-[480px] w-auto drop-shadow-2xl rounded-2xl bg-transparent p-2 md:scale-[1.3] ${phoneImgClassName}`}
            role="img"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
