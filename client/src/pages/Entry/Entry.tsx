import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
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
          }, 70);
        }, 9000); // 10-second delay
      }
    }, 70);

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
  const entryLinks = [
    { to: '/about', label: 'About' },
    { to: '/signup', label: 'Sign Up' },
    { to: '/login', label: 'Log In' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar links={entryLinks} />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<ScrollingText />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default EntryPage;