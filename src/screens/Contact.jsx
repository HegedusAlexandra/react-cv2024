import React, { useState, useCallback } from "react";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";
import { generateClient } from "aws-amplify/api";
import { createContactMe } from "../graphql/mutations";
import Footer from "../components/Footer";
import ScreenHeader from "../components/ScreenHeader";

export default function Contact({ id }) {
  const [isSent, setSent] = useState(false);
  const { t } = useTranslation();

  const client = generateClient();

  const handleData = useCallback(
    async (submittedData) => {
      await client.graphql({
        query: createContactMe,
        variables: {
          input: submittedData
        }
      });
    },
    [client]
  );

  return (
    <div
      id={id}
      className="flex flex-col items-center justify-between w-[100%] md:h-[84vh] h-[100vh] bg-white md:pt-0 pt-[14vh] snap-child"
    >
      <div className="w-[100%] px-[20%] md:pb-[2vh]">
        <ScreenHeader title={"menu.contact"} />
      </div>
      <h2
        className={`md:w-[60%] w-[90%] mx-[5%] md:mx-0 my-[2vh] text-red-600 md:text-[6vh] text-[6.5vw] font-semibold font-roboto uppercase tracking-wide text-left ${
          isSent && "h-[40vh]"
        }`}
      >
        {isSent ? `${t("contact.thank")}` : `${t("contact.lets")}`}
      </h2>
      {!isSent && <Form handleData={handleData} setSent={setSent} />}
      <Footer id={"footer"} />
    </div>
  );
}
