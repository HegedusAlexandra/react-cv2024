import React from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // Adjust the path as necessary
import { Language } from '../utils/enum';

const LanguageDropdown = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  // Assuming Language enum is imported or defined somewhere in this file
  return (
    <select
      className={`absolute z-30 md:static md:right-2 right-[6%] md:top-6 top-[4vh] md:w-[4vw] md:text-[12px] text-[6vw] p-2 flex justify-end items-end border-none uppercase`}
      value={selectedLanguage}
      onChange={handleChange}
    >
      {Object.entries(Language).map(([key, value]) => (
        <option key={key} value={value}>{key}</option>
      ))}
    </select>
  );
};

export default LanguageDropdown;
