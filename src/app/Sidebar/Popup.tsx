// pages/index.js


import React, { useState } from 'react';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <button onClick={togglePopup}>Show Popup</button>
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <button className="closeButton" onClick={togglePopup}>
              &times;
            </button>
            <div className="content">
              <h2>Popup Content</h2>
              <p>This is a simple popup component in Next.js.</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .popup {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 500px;
          width: 100%;
          position: relative;
        }

        .closeButton {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        .content {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
