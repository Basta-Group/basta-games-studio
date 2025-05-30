import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bastaLogo from "../../assets/game-studio/studio-logo.png";

type NavItem = {
  to: string;
  label: string;
  isDropdown?: boolean;
  dropdownItems?: { to: string; label: string }[];
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "unset";
      if (!newState) setIsServicesDropdownOpen(false);
      return newState;
    });
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesDropdownOpen((prev) => !prev);
  };

  const openServicesDropdown = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200); // 200ms delay
    setDropdownTimeout(timeout);
  };

  const navItems: NavItem[] = [
    { to: "/", label: "Home" },
    { to: "/", label: "About Us" },
    {
      to: "/",
      label: "Our Services",
      isDropdown: true,
      dropdownItems: [
        { to: "/", label: "Game Art" },
        { to: "/", label: "Game Math" },
        { to: "/", label: "Game Development" },
      ],
    },
    { to: "/", label: "How We Work" },
    { to: "/", label: "Join Our Team" },
    { to: "/", label: "Our Portfolio" },
    { to: "/", label: "FAQ" },
    { to: "/", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <nav
      className={`fixed w-full z-50 p-2 transition-all duration-300
      ${
        isScrolled || isMenuOpen
          ? "bg-[#000]/40 backdrop-blur-md"
          : " bg-[#000]/40 backdrop-blur-md md:bg-transparent "
      }
    `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to="/"
              aria-label="Basta Games Studio Home"
              onClick={handleNavClick}
            >
              <img
                className="h-8"
                src={bastaLogo}
                title="Home"
                alt="Basta Games Studio Logo"
              />
            </Link>
          </div>

          <div
            className="hidden md:flex flex-1 items-center justify-center"
            role="navigation"
          >
            <div className="flex lg:space-x-8">
              {navItems.map((item) =>
                item.isDropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={openServicesDropdown}
                    onMouseLeave={closeServicesDropdown}
                  >
                    <button
                      onClick={toggleServicesDropdown}
                      className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium focus:outline-none"
                      aria-expanded={isServicesDropdownOpen}
                    >
                      {item.label}
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="absolute z-10 mt-0 w-48 rounded-md bg-[#0B0B13] shadow-lg ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.to}
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                              role="menuitem"
                              onClick={handleNavClick}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium"
                    aria-label={`${item.label} page`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-black z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        id="mobile-menu"
        style={{
          boxShadow: isMenuOpen ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) =>
            item.isDropdown ? (
              <div key={item.label}>
                <button
                  onClick={toggleServicesDropdown}
                  className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left focus:outline-none"
                  aria-expanded={isServicesDropdownOpen}
                >
                  {item.label}
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.to}
                        className="block px-3 py-2 text-sm text-white hover:bg-gray-700"
                        onClick={handleNavClick}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
