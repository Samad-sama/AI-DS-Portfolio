import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <div className="loading-text">portfolio</div>
      </div>
    </div>
  );
}

export default Loading; 