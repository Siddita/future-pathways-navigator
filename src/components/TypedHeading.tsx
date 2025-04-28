
import { useEffect, useState } from 'react';

type TypedHeadingProps = {
  text: string;
  className?: string;
};

export const TypedHeading = ({ text, className = '' }: TypedHeadingProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust speed here
      
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [currentIndex, text]);
  
  return (
    <h1 className={`inline-block ${className}`}>
      <span>{displayText}</span>
      {!typingComplete && (
        <span className="border-r-4 border-primary ml-1 animate-cursor-blink">&nbsp;</span>
      )}
    </h1>
  );
};

export default TypedHeading;
