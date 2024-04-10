import React from 'react';
import './Popup.css'; // Import the CSS file here

function Popup({ isOpen, closePopup, message }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="backdrop" onClick={closePopup} />
      <div className="popup">
        <p>{message}</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </>
  );
}

export default Popup;
