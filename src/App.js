import React, { useState, useEffect } from "react";
import "./styles.css";
import Decipher from "./Decipher";

export default function App() {
  const [challenge, setChallenge] = useState(
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/73686f"
  );

  //

  {
    /* Script used to retrieve challengeUrl
      let keyURL = document.querySelectorAll('body ul li div span');

      function assemble(nList) {
          var compString = '';
          for (const a in nList) {
              var result = nList[a].attributes[1].nodeValue;
              compString += result;
              console.log(compString);
          }
      }

      assemble(keyURL);
  */
  }

  const [flag, setFlag] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      setFlag(xhr.responseText);
      setIsLoaded(true);
    });
    xhr.open(
      "GET",
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/73686f"
    );
    xhr.send();
  });

  return (
    <div className="App">
      <h1>
        <Decipher
          placeholder={"Loading..."}
          isLoaded={isLoaded}
          text={flag}
          delay={500}
        />
      </h1>
    </div>
  );
}
