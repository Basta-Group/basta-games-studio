import React from "react";
import bastaLogo from "../../assets/basta-play-logo-new.svg";
import { Link } from "react-router-dom";
// import footerImg1 from "../../assets/footer-img-1.png";
import telegramImg from "../../assets/telegram.png";
import linkedinImg from "../../assets/linkdin.png";
import footerLogos from "../../assets/footer-logo-1.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b2034] py-12 pb-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Left side - Logo, badge, and copyright */}
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center md:justify-start items-center gap-3">
              <img
                src={bastaLogo}
                alt="BastaPlay Logo"
                title="Home"
                className="h-8"
              />
            </div>
            <div className=" flex gap-2  items-center text-gray-400 text-sm font-bold">
              {/* <img
                src={footerImg1}
                alt="Critical Supplier Badge"
                className="h-8 w-auto"
              /> */}
              {/* <div>
                <p className="mt-3 text-xs text-gray-400 leading-relaxed mx-auto">
                  BastaPlay is owned and operated by Basta
                  Play Ltd.
                  Registration no: C 110421
                  <br />
                  Registered address: OFFICE 1 PIAZZETTA BUSINESS PLAZA, TRIQ
                  GHAR IL-LEMBI, SLIEMA, SLM 1560, Malta.
                  <br />
                  BastaPlay is licensed and regulated by the Government of the
                  Autonomous Island of Anjouan, Union of Comoros and operates
                  under License No. ALSI-202501035-FI2.
                  <br />
                  BastaPlay has passed all regulatory compliance and is legally
                  authorized to conduct gaming operations for any and all games
                  of chance and wagering.
                </p>
              </div> */}
            </div>
            <div className="flex  mt-2">
              <img
                src={footerLogos}
                alt="Licenses and Certifications"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="flex  flex-wrap space-y-4 space-x-3">
            <Link
              to="/about"
              className="text-white hover:text-blue-400 transition-colors font-bold flex-basis-1/2"
            >
              About Us
            </Link>
            <Link
              to="/games"
              className="text-white hover:text-blue-400 transition-colors font-bold flex-basis-1/2"
            >
              Our Games
            </Link>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors font-bold flex-basis-1/2 whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <Link
              to="/contact"
              className="text-white hover:text-blue-400 transition-colors font-bold flex-basis-1/2"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right side - Social and Email */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors bg-[#1b2034] p-2 rounded-full"
                title="Follow us on Telegram"
                aria-label="Telegram"
              >
                <img src={telegramImg} alt="Telegram" className="h-10 w-10" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors bg-[#1b2034] p-2 rounded-full"
                title="Connect with us on LinkedIn"
                aria-label="LinkedIn"
              >
                <img src={linkedinImg} alt="LinkedIn" className="h-10 w-10" />
              </a>
            </div>
            <a
              href="mailto:info@bastaplay.com"
              className="text-white hover:text-blue-400 transition-colors font-bold"
            >
              info@bastaplay.com
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-3 text-xs text-gray-400 leading-relaxed mx-auto max-w-7xl text-center ">
          BastaPlay is owned and operated by BastaPlay Ltd. Registration no: C
          110421
          <br />
          Registered address: OFFICE 1 PIAZZETTA BUSINESS PLAZA, TRIQ GHAR
          IL-LEMBI, SLIEMA, SLM 1560, Malta.
          <br />
          BastaPlay is licensed and regulated by the Government of the
          Autonomous Island of Anjouan, Union of Comoros and operates under
          License No. ALSI-202501035-FI2.
          <br />
          BastaPlay has passed all regulatory compliance and is legally
          authorized to conduct gaming operations for any and all games of
          chance and wagering.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
