// About.js
import React from 'react';

const About = () => {
  // Define the color variables based on the provided entry-navbar colors
  const primaryColor = '#000'; // Change this to the actual primary color

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-8 text-center flex flex-col gap-10">
        <h2 className="text-3xl font-bold mb-4" style={{ color: primaryColor }}>
          About AlgoRepeat
        </h2>
        <div className="info-box bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
            The Mission
          </h3>
          <p className="text-gray-700">
            Empowering individuals to excel in technical interviews by providing an innovative platform for mastering
            data structures and algorithms.
          </p>
        </div>
        <div className="info-box bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
            How It Works
          </h3>
          <p className="text-gray-700">
            AlgoRepeat utilizes spaced repetition to enhance learning. Track your progress, schedule daily problem sets,
            and improve your skills efficiently.
          </p>
        </div>
        <div className="info-box bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
            Get Started
          </h3>
          <p className="text-gray-700">
            Sign-up today to start scheduling your daily problem sets and improving your skills for your next technical interview!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
