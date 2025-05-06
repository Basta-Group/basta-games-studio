import React, { useState } from "react";
import { countries } from "../../data/countries";

// Dummy language names from the image, repeat or trim as needed
const languageNames = [
  "Sesotho",
  "Norsk",
  "Ўзбек",
  "Tiếng Việt",
  "漢語",
  "Dansk",
  "IsiZulu",
  "Africans",
  "العربية",
  "Polski",
  "Shqip",
  "Português",
  "Română",
  "Svenska",
  "Slovenčin",
  "Soomaaliga",
  "Svenska",
  "Badînî",
  "Ελληνικά",
  "Español",
  "Wikang Tagalog",
  "Indonesia",
  "Italiano",
  "Қазақ",
  "한국어",
  "Dutch",
  "Русский",
  "Српски Језик",
  "ไทย",
  "Kurdî",
  "Беларуская Мова",
  "Български",
  "Lietuvių Kalba",
  "Latviešu Valoda",
  "Македонски Јазик",
  "Монгол Хэл",
  "Bahasa Melayu",
  "తెలుగు",
  "Türkçe",
  "Тоҷикӣ",
  "Suomi",
  "Français",
  "Українська Мова",
  "עברית",
  "Hrvatski Jezik",
  "Eesti Keel",
  "فارسی",
  "Magyar Nyelv",
];

const CountryDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen((o) => !o);
  const closeDropdown = () => setOpen(false);

  return (
    <div className="relative inline-block text-left ml-4">
      <button
        onClick={toggleDropdown}
        className="flex items-center p-1 rounded-full border border-[#4D93FB] bg-[#181A29] hover:bg-[#23263a] focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/gb.svg"
          alt="Current language"
          className="w-6 h-6 rounded-full object-cover"
        />
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 w-[700px] max-h-[400px] overflow-y-auto rounded-xl shadow-lg bg-[#181A29] border border-gray-700 z-50 p-6"
          onMouseLeave={closeDropdown}
        >
          <div className="grid grid-cols-4 gap-4">
            {countries.slice(0, languageNames.length).map((country, idx) => (
              <div
                key={country.code}
                className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-[#23263a] rounded px-2 truncate"
              >
                <img
                  src={country.image}
                  alt={languageNames[idx]}
                  className="w-6 h-4 object-cover rounded shadow"
                />
                <span className="text-white text-sm">{languageNames[idx]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
