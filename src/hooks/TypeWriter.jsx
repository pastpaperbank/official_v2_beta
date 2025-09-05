import { useState, useEffect } from "react";

function useTypewriter(text, speed = 100) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i)); // Using functional setState to avoid closure issues
      i++;
      if (i >= text.length) {
        clearInterval(interval); // stop when finished
      }
    }, speed);

    return () => clearInterval(interval); // cleanup
  }, [text, speed]);

  return displayedText;
}

export default useTypewriter;
