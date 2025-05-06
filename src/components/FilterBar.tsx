import React from "react";

const FilterBar: React.FC = () => (
  <div className="w-full bg-[#1B2034] flex flex-row items-center gap-4 md:gap-2 px-6 pt-4 md:py-6 mb-0 md:mb-8 flex-nowrap overflow-x-auto scrollbar-hide">
    <span className="text-white text-lg font-medium mr-2 min-w-max">
      Show Games In
    </span>
    <select
      className="bg-[#21273F] text-white text-sm px-4 py-2 border-none appearance-none pr-10 transition-colors hover:bg-[#26305a] focus:bg-[#26305a] min-w-[120px]"
      style={{
        clipPath:
          "polygon(10% 0, 90% 0, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0 75%, 0 25%)",
      }}
    >
      <option>English</option>
      <option>Spanish</option>
      <option>French</option>
    </select>
    <select
      className="bg-[#21273F] text-white text-sm px-4 py-2 border-none appearance-none pr-10 transition-colors hover:bg-[#26305a] focus:bg-[#26305a] min-w-[100px]"
      style={{
        clipPath:
          "polygon(10% 0, 90% 0, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0 75%, 0 25%)",
      }}
    >
      <option>USD</option>
      <option>EUR</option>
      <option>INR</option>
    </select>
    <select
      className="bg-[#21273F] text-white text-sm px-4 py-2 border-none appearance-none pr-10 transition-colors hover:bg-[#26305a] focus:bg-[#26305a] min-w-[110px]"
      style={{
        clipPath:
          "polygon(10% 0, 90% 0, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0 75%, 0 25%)",
      }}
    >
      <option>Studio</option>
      <option>Studio 1</option>
      <option>Studio 2</option>
    </select>
    <input
      type="text"
      placeholder="Search Games"
      className="flex-1 min-w-[160px] bg-[#21273F] text-white px-6 py-2 border-none focus:outline-none placeholder-white/70 min-w-[160px]"
      style={{
        clipPath:
          "polygon(10% 0, 90% 0, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0 75%, 0 25%)",
      }}
    />
    <button className="bg-[#5da5fa] hover:bg-[#3b82f6] text-white font-bold px-8 py-2 rounded-full transition-colors text-base min-w-[120px]">
      SEARCH
    </button>
  </div>
);

export default FilterBar;
