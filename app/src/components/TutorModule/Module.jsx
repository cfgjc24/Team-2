import React from 'react';
import './Module.css'; 

function Module({ name, url }) {
  return (
    <div className="module-card">
      <h1 id="Class">Class {name}</h1>
      <ul>
        
        <h3><a href={url} target="_blank" rel="noopener noreferrer">Start Class</a></h3>

      </ul>
    </div>
  );
}

export default Module;
