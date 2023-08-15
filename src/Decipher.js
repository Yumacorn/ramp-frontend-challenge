import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./styles.css";

const Decipher = ({ text, delay, placeholder, loaded }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(loaded);
  let flagArray = [];

  for (let i = 0; i < currentText.length; i++) {
    flagArray.push(<li key={i}>{currentText[i]}</li>);
  }

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div>
      <Loading placeholder={placeholder} visible={isLoaded} />
      {flagArray}
    </div>
  );
};

export default Decipher;
