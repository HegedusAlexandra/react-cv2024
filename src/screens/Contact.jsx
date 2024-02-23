import React,{useCallback} from "react";
import Form from "../components/Form";
/* import { generateClient } from "aws-amplify/api"; 
import { createContactMe } from "../graphql/mutations";*/

export default function Contact() {
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
    ); */

    const handleData = (data) => {
        console.log(data)
    }

  return (
    <div className="flex flex-col items-center justify-center w-[100%] ">
      <Form handleData={handleData} />
    </div>
  );
}
