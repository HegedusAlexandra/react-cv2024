import React,{useState,useCallback} from "react";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';
import { generateClient } from "aws-amplify/api"; 
import { createContactMe } from "../graphql/mutations";
Amplify.configure(config);


export default function Contact() {
  const [isSent, setSent] = useState(false);
  const {t} = useTranslation()

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
    <div className="flex flex-col items-center justify-center w-[100%]">
      <h2 className={`md:w-[40%] w-[90%] mx-[5%] md:mx-0 my-[2vh] text-red-600 md:text-[6vh] text-[6.5vw] font-semibold font-roboto uppercase tracking-wide text-left ${isSent && "h-[40vh]"}`}>
        {isSent ? `${t('contact.thank')}` : `${t('contact.lets')}`}
      </h2>
      {!isSent && <Form handleData={handleData} setSent={setSent}/>}
    </div>
  );
}
