"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const LanguageToggle = () => {
  // Initialize state based on the current language
  const [isHindi, setIsHindi] = useState(i18n.language === "hi");

  const toggleLanguage = () => {
    const newLanguage = isHindi ? "en" : "hi";
    setIsHindi(!isHindi);
    i18n.changeLanguage(newLanguage);
    console.log(`Language changed to ${newLanguage}`);
  };

  // Sync state if language is changed elsewhere
  useEffect(() => {
    setIsHindi(i18n.language === "hi");
  }, [i18n.language]);

  return (
    <div className="flex items-center space-x-[1.15vw] ">
      <span
        className={isHindi ? "text-gray-500 text-[2vw] sm:text-[0.85vw] transition-all ease-out" : "text-red-900 font-bold text-[2vw] sm:text-[0.85vw] transition-all ease-out"}
      >
        English
      </span>
      <div
        className="relative bg-gray-300 rounded-full cursor-pointer p-[0.29vw]"
        style={{ width: "4.71vw", height: "2.6vw" }}
        onClick={toggleLanguage}
      >
        <div
          className={`absolute bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
            isHindi ? "translate-x-[2.3vw]" : ""
          }`}
          style={{ width: "1.83vw", height: "1.83vw", top: "0.39vw", left: "0.39vw" }}
        ></div>
      </div>
      <span
        className={isHindi ? "text-red-900 font-bold text-[2vw] sm:text-[0.85vw] transition-all ease-out" : "text-gray-500 text-[2vw] sm:text-[0.85vw] transition-all ease-out"}

      >
        हिन्दी
      </span>
    </div>
  );
};

export default LanguageToggle;
