import React from 'react'
import { useState } from 'react'
import './module.css'
import StudentForm from '../PreStudentForms'
import PostStudentForm from '../PostStudentForms'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Module({ name, url, description }) {  // Receive description prop

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to Pre-Survey
  const handlePreSurveyClick = () => {
    navigate('/presurvey'); // Redirect to /presurvey when button is clicked
  }; function sendModule(name) {
    StudentForm(name);
  }

  const handlePostSurveyClick = () => {
    navigate('/postsurvey'); // Redirect to /presurvey when button is clicked
  }; function sendModule(name) {
    PostStudentForm(name);
  }

  return (
    <>
      <div className="module">
        <h1 id="Module">Module {name}</h1>
        <h5 id="description">
          {description}  {/* Display the description */}
        </h5>
        <ul>
          <li>
            <Button onClick={handlePreSurveyClick}>Student Pre-Survey</Button>
          </li>
          <li><h3><a href={url} onClick={sendModule(name)}>Lesson Slides</a></h3></li>
          <li>
            <Button onClick={handlePostSurveyClick}>Student Post-Survey</Button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Module;
