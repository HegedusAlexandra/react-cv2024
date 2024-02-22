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
    <div className="flex items-center justify-center w-[100%] h-[100vh] bg-gradient-to-b from-gray-200 to-gray-400 ">
      <Form handleData={handleData} />
    </div>
  );
}
