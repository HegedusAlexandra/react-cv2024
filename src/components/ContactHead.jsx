import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import ParallaxTops from "./ParallaxTops";

function ContactHead({ visible }) {
  const { t } = useTranslation();
  const shadow = {
    boxShadow:
      " rgba(30, 50, 50, 0.38) 6px 4px 6px 0px, rgba(25, 55, 55, 0.3) -6px -2px 10px 0px"
  };

  return (
    <div
      className="md:w-[40%] w-[90%] rounded-t-xl p-6 pt-2 overflow-hidden"
 
    >
      <h2 className="w-[100%] text-red-600 md:text-[7vh] text-[6.5vw] font-semibold font-roboto uppercase tracking-wide pt-[2vh] md:p-[1vh]">
        {t("Let's speak!")}
      </h2>       
    </div>
  );
}

export default memo(ContactHead);
