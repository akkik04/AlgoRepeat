import React, { useState, useEffect } from 'react';
import '../../styles/entryPage/entryPage.css';

function EntryPage() {
  const [header, setHeader] = useState('');
  const headerText = '{ Boost Tech Interview Skills with Spaced Repetition! }';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= headerText.length) {
        setHeader(headerText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [headerText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prevShowCursor) => !prevShowCursor), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="entry-page-container">
      <h1 className="entry-page-header">
        {header}
        <span className="cursor" style={{ display: showCursor ? 'inline-block' : 'none' }}></span>
      </h1>
      <p className="entry-page-subheader">Work with your brain! Schedule tech-skill questions on a personal calendar for maximum learning and retention, and ace your next interview! </p>
      <a href="/signup">
      <button className="entry-page-button">Join Today!</button>
      </a>
      <img src="https://media2.giphy.com/media/KVVgWtScb37USleUB3/giphy.gif?cid=ecf05e4713uvok4uhxg03rhn3w85facnpkzhxp3en4atxkr&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Moving Brain Gif" className="entry-page-gif" />
    </div>
  );
}

export default EntryPage;
