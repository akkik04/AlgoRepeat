import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { EntryNavbar } from '../../components/EntryNavbar/EntryNavbar';
import About from '../../pages/About/About';
import SignUp from '../../pages/SignUp/SignUp';
import Login from '../../pages/LogIn/LogIn';
import { Footer } from '../../components/Footer/Footer';

const ScrollingText = () => {
  const textToScroll = 'Strategic Repetition + Personalized Schedules to Master DSA';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText(textToScroll.substring(0, index));
      index = (index + 1) % (textToScroll.length + 1);

      if (index === 0) {
        clearInterval(intervalId);
        setTimeout(() => {
          const newIntervalId = setInterval(() => {
            setDisplayedText(textToScroll.substring(0, index));
            index = (index + 1) % (textToScroll.length + 1);

            if (index === 0) {
              clearInterval(newIntervalId);
            }
          }, 110);
        }, 10000); // 10-second delay
      }
    }, 110);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [textToScroll]);

  return (
    <div className="flex justify-center items-center h-screen text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      {displayedText}
    </div>
  );
};

const EntryPage = () => {
  return (
    <div className="min-h-screen">
      <EntryNavbar />
      <Routes>
        <Route path="/" element={<ScrollingText />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default EntryPage;