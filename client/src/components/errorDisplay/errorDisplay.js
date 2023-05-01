import React from "react";

function ErrorBox({ message, onClose }) {
    return (
      <div className="error-box">
        <i className="fas fa-exclamation-triangle"></i>
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>
    );
}

export default ErrorBox;
