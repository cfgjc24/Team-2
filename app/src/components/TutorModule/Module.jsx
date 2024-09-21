import React from 'react';
import './Module.css'; 

function Module({ name, url }) {
  return (
    <div className="module-card">
      <h1 id="Class">{name}</h1>
      <h5 id="description">Insert Description For {name}</h5>
      <ul>
        
        <li><h3><a href={url} target="_blank" rel="noopener noreferrer">Lesson Slides</a></h3></li>

      </ul>
    </div>
  );
}

export default Module;
