import React from 'react'
import PreConfidenceChart from '../components/PreConfidenceChart'
import PostConfidenceChart from '../components/PostConfidenceChart'
import StudentFeedback from '../components/StudentFeedback'
import TutorFeedback from '../components/TutorFeedback'


function Admin() {
  return (
    <div>
      <h1>Pre-Confidence Survey</h1>
      <PreConfidenceChart />
      <h1>Post-Confidence Survey</h1>
      <PostConfidenceChart />
      <h1>View Feedback</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StudentFeedback />
        <TutorFeedback />
      </div>
    </div>
  )
}

export default Admin;
