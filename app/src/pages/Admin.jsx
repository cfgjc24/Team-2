import React from 'react'
import { useState } from 'react'
import PreConfidenceChart from '../components/PreConfidenceChart'
import PostConfidenceChart from '../components/PostConfidenceChart'

// import PostConfidenceChart from '../charts/Post-ConfidenceChart'

function Admin() {
  return (
    <div>
      <h1>Pre-Confidence Survey</h1>
      <PreConfidenceChart />
      <h1>Post-Confidence Survey</h1>
      <PostConfidenceChart />
    </div>
  )
}

export default Admin;