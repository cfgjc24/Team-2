import React from 'react'
import { useState } from 'react'
import './module.css'
import StudentForm from '../PreStudentForms'

function Module({ name, url, description }) {  // Receive description prop
  function sendModule(name) {
    StudentForm(name);
  }

  return (
    <>
      <div className="module">
        <h1 id="Module">Module {name}</h1>
        <h5 id="description">
          {description}  {/* Display the description */}
        </h5>
        <ul>
          <li><h3>Student Pre-Survey</h3></li>
          <li><h3><a href={url} onClick={() => sendModule(name)}>Lesson Slides</a></h3></li>
          <li><h3>Student Post-Survey</h3></li>
        </ul>
      </div>
    </>
  )
}

export default Module;
