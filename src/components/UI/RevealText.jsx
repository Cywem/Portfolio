import { useEffect, useState, useRef } from 'react';

export default function RevealText({
  shortText,
  fullText,
  speed = 50,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ...props
}) {
  const [displayText, setDisplayText] = useState(shortText);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovering) {
      let iteration = 0;
      const maxIterations = 8;

      intervalRef.current = setInterval(() => {
        setDisplayText(prev => {
          return fullText
            .split('')
            .map((char, index) => {
              if (index < shortText.length && shortText[index] === fullText[index]) {
                return fullText[index];
              }
              
              if (iteration > maxIterations) {
                return fullText[index];
              }

              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
        });

        iteration++;

        if (iteration > maxIterations) {
          clearInterval(intervalRef.current);
          setDisplayText(fullText);
        }
      }, speed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setDisplayText(shortText);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, shortText, fullText, speed, characters]);

  return (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ display: 'inline-block', whiteSpace: 'pre' }}
      {...props}
    >
      {displayText}
    </span>
  );
}
