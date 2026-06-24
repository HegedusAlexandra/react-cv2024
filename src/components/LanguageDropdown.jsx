import React from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // Adjust the path as necessary
import { Language } from '../utils/enum';

const LanguageDropdown = ({screen}) => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  // Assuming Language enum is imported or defined somewhere in this file
  return (
    <select
      className={`text-black md:absolute static z-30 text-right text-[2vh] flex-1 p-4 flex justify-end items-end border-none uppercase`}
      value={selectedLanguage}
      onChange={handleChange}
    >
      
      {Object.entries(Language).map(([key, value]) => (
        <option key={value} value={key} className=' bg-gray-200'>{key}</option>
      ))}
    </select>
  );
};

export default LanguageDropdown;
