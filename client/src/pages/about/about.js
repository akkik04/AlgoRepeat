import React from 'react';
import '../../styles/about/about.css';

const About = () => {
  return (
    <div className="about">
      <div className="main-description">
        <h1>For Coders, By a Coder</h1>
        <div className="description-content">
          <p>RepetiPro is a powerful web app designed to help you master the data structures and algorithms skills needed to ace technical interviews. With our innovative spaced repetition approach, you can improve your skills faster and more efficiently than ever before.</p>
          <p>Our platform offers a range of features to help you succeed, including easy login and progress tracking, and the ability to schedule daily problem sets from popular platforms. Whether you're preparing for your first interview or looking to improve your skills for your next role, RepetiPro has everything you need to succeed.</p>
          <p>So why wait? Sign up for RepetiPro today and start improving your skills like a pro!</p>
        </div>
      </div>
      <div className="features">
        <div className="feature-box">
          <h3>Spaced Repetition</h3>
          <p>Our innovative approach helps you learn faster and retain information longer.</p>
        </div>
        <div className="feature-box">
          <h3>Progress Tracking</h3>
          <p>Easily keep track of your progress and see how far you've come.</p>
        </div>
        <div className="feature-box">
          <h3>Daily Problem Sets</h3>
          <p>Schedule daily problem sets from popular platforms like LeetCode and HackerRank.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
