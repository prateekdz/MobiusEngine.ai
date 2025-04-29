import React from "react";
import { FaLinkedin, FaReddit, FaWhatsapp } from "react-icons/fa";
import last from "./Component/images/Last.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10 px-6 text-gray-800 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4">
       
            <div className="w-screen h-screen flex items-center justify-center bg-white relative">
              <img
                src={last}
                alt="footer"
                className="max-w-full max-h-full object-contain"
              />
        
              </div>



        {/* Bottom Bar */}
        <div className="border-t w-full mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2023 Mobiusservices LLC</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
