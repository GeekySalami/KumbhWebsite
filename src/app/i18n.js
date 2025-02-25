"use client";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    debug: true,
    lng: "hi",
    fallbackLng: "hi",
    resources: {
      en: {
        translation: {
          paths: "src/app/QNA2/en", // This should be the actual string you want
          navtitle:"Mahakumbh",
          desc:"Kumbh Mela which translates to 'festival of the Sacred Pitcher', is an important Hindu pilgrimage, celebrated approximately every 6, 12 and 144 years, correlated with the partial or full revolution of Jupiter and representing the largest human gathering in the world. Traditionally, the riverside fairs at four major pilgrimage sites are recognised as the Kumbh Melas: Prayagraj (Ganges-Yamuna-Sarasvati rivers confluence), Haridwar (Ganges), Nashik-Trimbak (Godavari), and Ujjain (Shipra). It was asserted that, in 2022, after a 700-year break, Bansberia (Hooghly), hosted the pilgrimage again.",
          moreinfo: "For more information, visit our website",
          iitb: "An Initiative From <br/> Indian Institute Of Technology Bombay, <br/>CSE Department",
          inf:"en"
        },
      },
      hi: {
        translation: {
          paths: "src/app/QNA2/hi",
          navtitle:"महाकुंभ",
          desc:"कुंभ मेला, जिसका अर्थ है 'पवित्र कलश का उत्सव', एक महत्वपूर्ण हिंदू तीर्थयात्रा है, जिसे लगभग हर ६, १२ और १४४ वर्षों में मनाया जाता है। यह बृहस्पति के आंशिक या पूर्ण परिक्रमण से जुड़ा होता है और इसे विश्व का सबसे बड़ा जनसमूह माना जाता है। पारंपरिक रूप से, चार प्रमुख तीर्थस्थलों पर आयोजित नदी तट के मेले कुंभ मेलों के रूप में पहचाने जाते हैं: प्रयागराज (गंगा-यमुना-सरस्वती संगम), हरिद्वार (गंगा), नासिक-त्र्यंबक (गोदावरी) और उज्जैन (शिप्रा)। यह दावा किया गया था कि 2022 में, 700 वर्षों के अंतराल के बाद, बांसबेड़िया (हुगली) ने फिर से इस तीर्थयात्रा की मेजबानी की।",
          moreinfo: "अधिक जानकारी के लिए, हमारी वेबसाइट पर जाएं",
          iitb: "इंडियन इंस्टिट्यूट ऑफ टेक्नोलॉजी बॉम्बे, <br/> कं.वि.अ. विभाग की ओर से <br/>एक पहल से एक पहल  ",
          inf:"hi"
        },
      },
    },
  });

  export default i18n;