import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import { useTranslation } from "react-i18next"; 

const LanguagePicker = ({ selectedCountryCode, setSelectedCountryCode } : {selectedCountryCode: any, setSelectedCountryCode: any}) => {

    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
  
    const changeLanguage = (lng: string, countryCode: string) => {
      i18n.changeLanguage(lng);
      setSelectedCountryCode(countryCode);
      localStorage.setItem("selectedCountryCode", countryCode);
      localStorage.setItem("selectedLanguage", lng);
    };
  
    return (
      <div className="relative">
        <button
          className="navlink flex items-center bg-primary/10 rounded-md hover:bg-primary/25 duration-300 p-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <ReactCountryFlag
            countryCode={selectedCountryCode}
            svg
            className="mr-2"
          />
          <svg
            id="down-arrow"
            className="w-4 h-4 opacity-70 hover:opacity-100 transition duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showDropdown && (
          <div className="absolute flex flex-col gap-2 right-0 mt-2 bg-white shadow-lg rounded-md">
            <button
              id="fr"
              className="flex items-center p-2 bg-primary/10 rounded-md hover:bg-primary/25 duration-300"
              onClick={() => {
                changeLanguage("fr", "FR");
                setShowDropdown(false);
              }}
            >
              <ReactCountryFlag countryCode="FR" svg />
            </button>
            <button
              id="us"
              className="flex items-center p-2  bg-primary/10 rounded-md hover:bg-primary/25 duration-300"
              onClick={() => {
                changeLanguage("en", "US");
                setShowDropdown(false);
              }}
            >
              <ReactCountryFlag countryCode="US" svg />
            </button>
            {/*<button
              id="spanish"
              className="flex items-center p-2 hover:bg-gray-200"
              onClick={() => {
                changeLanguage("es", "ES");
                setShowDropdown(false);
              }}
            >
              <ReactCountryFlag countryCode="ES" svg />
            </button>*/}
          </div>
        )}
      </div>
    );

  
}

export default LanguagePicker