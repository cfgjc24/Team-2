import React from 'react'
import { useState } from 'react'
import PreConfidenceChart from '../components/PreConfidenceChart'
// import PostConfidenceChart from '../charts/Post-ConfidenceChart'

function Admin() {
  return (
    <div>
      <h1>Pre-Confidence Survey</h1>
      <PreConfidenceChart/>
    </div>
  )
}

export default Admin;