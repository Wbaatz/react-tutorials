import React, { useState, useEffect } from 'react';
import './Tut2.css'; // Assuming you have a CSS file for styling

const Slogans = ['Discipline', 'Hard Work', 'Strong Determination'];

export default function App() {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Trigger fade-out animation
      setTimeout(() => {
        setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % Slogans.length);
        setFadeIn(true); // Trigger fade-in animation after slogan change
      }, 500); // Wait for fade-out animation to complete (assuming it takes 0.5s)
    }, 3000); // Change slogan every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      <h4>It's All About <span className={`slogan-container ${fadeIn ? 'fade-in' : 'fade-out'}`}>{Slogans[currentSloganIndex]}</span></h4>
    </div>
  );
}
