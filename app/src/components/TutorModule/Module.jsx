import React from 'react';
import './Module.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function Module({ name, url }) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to Pre-Survey
  const handleSurveyClick = () => {
    navigate('/Tutor_Survey'); // Redirect to /presurvey when button is clicked
  };

  return (
    <div>
      <h1 id="Class">Class {name}</h1>
      <ul>

        <h3><a href={url} target="_blank" rel="noopener noreferrer">Start Class</a></h3>
        <li>
          <Button onClick={handleSurveyClick}>Tutor Post-Survey</Button>
        </li>
      </ul>
    </div>
  );
}

export default Module;
