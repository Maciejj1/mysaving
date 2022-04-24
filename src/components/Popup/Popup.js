import React, { useState } from "react";
import "./Popup.scss";
const Popup = ({ open, children, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-base">
        <button onClick={onClose}>X</button>
        <h1>WITAJ</h1>
      </div>
    </div>
  );
};

export default Popup;
