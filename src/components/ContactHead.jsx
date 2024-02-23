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
      style={shadow}
    >
      <h2 className="w-[100%] text-red-600 md:text-[7vh] text-[6.5vw] font-semibold font-roboto uppercase tracking-wide pt-[2vh] md:p-[1vh]">
        {t("Let's speak!")}
      </h2>
      {visible && (
        <h1 className="w-[100%] text-gray-800 md:text-[0.9vw] text-[3vw] font-montserrat tracking-wide text-center py-[2vh]">
          {t(
            "We believe that great ideas and solutions emerge from open conversations. Whether you're interested in working with us or just want to say hello, We'd love to hear from you!"
          )}
        </h1>
      )}
    </div>
  );
}

export default memo(ContactHead);
