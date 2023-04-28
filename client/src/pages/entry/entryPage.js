import React, { useState, useEffect } from 'react';
import '../../styles/entryPage/entryPage.css';

function EntryPage() {
  const [header, setHeader] = useState('');
  const headerText = '{ Boost Tech Interview Skills with Spaced Repetition 📈 }';
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
      <img src="https://media.giphy.com/media/eljCVpMrhepUSgZaVP/giphy.gif" alt="Moving Brain Gif" className="entry-page-gif" />
    </div>
  );
}

export default EntryPage;
