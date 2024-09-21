import React from 'react'
import { useState } from 'react'
import './module.css'
import StudentForm from '../Pre_student_forms'

function Module({ name, url }) {
  function sendModule(name) {
    StudentForm(name);
  }
  return (
    <>
      <div className="module">
        <h1 id="Module">Module {name}</h1>
        <h5 id="description">
          Insert Description For Module
        </h5>
        <ul>
          <li><h3>Student Pre-Survey</h3></li>
          <li><h3><a href={url} onClick={sendModule(name)}>Lesson Slides</a></h3></li>
          <li><h3>Student Post-Survey</h3></li>
        </ul>
      </div>
    </>
  )
}

export default Module