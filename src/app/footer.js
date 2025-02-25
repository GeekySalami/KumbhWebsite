"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const Footer = () => {

  const {t} = useTranslation();
  
  return (
    <footer className="bg-red-900 flex justify-center align-middle text-white text-xs lg:text-lg text-center pt-[8px] pb-[8px]    shadow-lg sticky bottom-0">
      <p>
  {t("inf") === "en" ? (
    <>
      For more information, visit our website{" "}
      <span className="lg:hover:text-2xl hover:text-base transition-all ease-in-out">
        <a href="https://dharmawiki.org/index.php/Main_Page" className="text-blue-400">
          Dharma Wiki
        </a>
      </span>.
    </>
  ) : (
    <>
      अधिक जानकारी के लिए, हमारी वेबसाइट{" "}
      <span className="lg:hover:text-2xl hover:text-base transition-all ease-in-out">
        <a href="https://dharmawiki.org/index.php/Main_Page" className="text-blue-400">
          Dharma Wiki
        </a>
      </span>{" "}
      पर जाएं।
    </>
  )}
</p>

    </footer>
  );
};

export default Footer;
