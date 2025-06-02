import React from "react";
import bastaLogo from "../../assets/game-studio/studio-logo.png";
import { Link } from "react-router-dom";
import telegramImg from "../../assets/game-studio/twitter.svg";
import linkedinImg from "../../assets/game-studio/linkdin.svg";
import emailImg from "../../assets/game-studio/email-footer.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] py-12 border-t border-transparent">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Left Section - Logo and Company Info */}
          <div className="flex flex-col space-y-4 ">
            <img
              src={bastaLogo}
              alt="Basta Games Studio Logo"
              title="Home"
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm font-bold">
              REVOLUTIONIZING IGAMING
            </p>
            <div className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-400 text-sm">Malta</span>
            </div>
            <div className="flex flex-col space-y-1">
              <a
                href="mailto:contact@bastagames.com"
                className="text-gray-400 text-sm flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@bastagames.com</span>
              </a>
              
            </div>
          </div>

          {/* Quick Link Section */}
          <div className="flex flex-col space-y-2 md:ms-8">
            <h3 className="text-white text-lg font-bold uppercase">
              Quick Link
            </h3>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              How We Work
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Join Our Team
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Our Portfolio
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Services Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-white text-lg font-bold uppercase">Services</h3>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Game Art
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Game Math
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Game Development
            </Link>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Game Animation
            </Link>
          </div>

          {/* Privacy Policy and Terms of Use Sections */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-white text-lg font-bold uppercase">
              Privacy Policy
            </h3>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-white text-lg font-bold uppercase">
              Terms of Use
            </h3>
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              Terms of Use
            </Link>
          </div>

          {/* Social Media Link Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-lg font-bold uppercase">
              Social Media Link
            </h3>
            <div className="flex space-x-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400  p-2 rounded-full"
                title="Follow us on Twitter"
                aria-label="Telegram"
              >
                <img src={telegramImg} alt="Twitter" className="h-10 w-10" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400  p-2 rounded-full"
                title="Connect with us on LinkedIn"
                aria-label="LinkedIn"
              >
                <img src={linkedinImg} alt="LinkedIn" className="h-10 w-10" />
              </a>
              <a
                href="mailto:contact@bastagames.com"
                className="text-white hover:text-blue-400  p-2 rounded-full"
                title="Email us"
                aria-label="Email"
              >
                <img src={emailImg} alt="Email" className="h-10 w-10" />
              </a>
            </div>
            {/* <div className="flex flex-col space-y-1">
              <a
                href="tel:+919104439172"
                className="text-gray-400 text-sm flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>99104439172</span>
              </a>
              <a
                href="tel:+95824550099"
                className="text-gray-400 text-sm flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>95824550099</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 text-center border-t border-white ">
        <p className="text-gray-400 text-sm">© 2025 BASTA GAMES STUDIO</p>
      </div>
    </footer>
  );
};

export default Footer;
