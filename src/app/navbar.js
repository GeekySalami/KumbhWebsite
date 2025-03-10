import React from "react";
import { GiVineFlower } from "react-icons/gi";
import LanguageToggle from "./language_slider";
import { useTranslation } from "react-i18next";

function Navbar() {
  const {t} = useTranslation();

  return (
    <div className="w-full overflow-hidden">
      <nav className="fixed flex items-center justify-between p-3 shadow-xl dark:shadow-[#181818] top-0 w-full max-h-24 bg-white">
        
        {/* Left Section - Logo & Title */}
        <div className="flex items-center min-w-0"> 
          <GiVineFlower className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-red-900" />
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red-900 jaini-regular whitespace-nowrap">
            <span>
              <a href="/">&nbsp;{t('navtitle')}</a>
            </span>
          </div>
        </div>

        {/* Center Section - IITB Initiative */}
        <div className="flex items-center space-x-2 max-w-md pl-3">
          <img 
            src="iitb.png" 
            alt="IITB Logo" 
            className="h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
          />
          <p className="text-[#004f9f] lg:text-xs  text-[1vw]" dangerouslySetInnerHTML={{__html: t('iitb')}}>
            {/* An Initiative From<br/>Indian Institute Of Technology Bombay,<br/>CSE Department */}
            
          </p>
        </div>

        {/*Right Section - Language Toggle */}
        <div className="flex-shrink-0">
          <LanguageToggle />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
