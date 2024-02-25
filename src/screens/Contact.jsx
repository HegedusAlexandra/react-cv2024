import React,{useState} from "react";
import Form from "../components/Form";
/* import { generateClient } from "aws-amplify/api"; 
import { createContactMe } from "../graphql/mutations";*/

export default function Contact() {
  const [isSent, setSent] = useState(false);
/*     const client = generateClient(); */

/*     const handleData = useCallback(
      async (submittedData) => {
        
        await client.graphql({
          query: createContactMe,
          variables: {
            input: submittedData
          }
        });
      },
      [client]
    );  */

  const handleData = (data) => {
      console.log(data)
  }

  return (
    <div className="flex flex-col items-center justify-center w-[100%]">
      <h2 className={`md:w-[40%] w-[90%] mx-[5%] md:mx-0 text-red-600 md:text-[6vh] text-[6.5vw] font-semibold font-roboto uppercase tracking-wide text-left ${isSent && "h-[40vh]"}`}>
        {isSent ? "Thank you for the interest soon I will get in touch with you!" : "Let's speak!"}
      </h2>
      {!isSent && <Form handleData={handleData} setSent={setSent}/>}
    </div>
  );
}
