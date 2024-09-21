import React from 'react'
import { useState } from 'react'
import './module.css'

function Module({name, url}) {
  return (
    <>
      <div className = "module">
        <h1 id = "Module">Module {name}</h1>
        <h5 id = "description">
          Insert Description For Module
        </h5>
          <ul>
            <li><h3>Student Pre-Survey</h3></li>
            <li><h3><a href = {url}>Lesson Slides</a></h3></li>
            <li><h3>Student Post-Survey</h3></li>
          </ul>
      </div>
    </>
  )
}

export default Module