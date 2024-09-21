import React from 'react'
import PreConfidenceChart from '../components/PreConfidenceChart'
import PostConfidenceChart from '../components/PostConfidenceChart'
import SatisfactionAfterChart from '../components/SatisfactionAfterChart'
import StudentFeedback from '../components/StudentFeedback'
import TutorFeedback from '../components/TutorFeedback'


function Admin() {
  return (
    <div>
      <h1>Pre-Confidence Survey</h1>
      <PreConfidenceChart />
      <div style={{ marginBottom: '40px' }}></div>
      <h1>Post-Confidence Survey</h1>
      <PostConfidenceChart />
      <div style={{ marginBottom: '40px' }}></div>
      <h1>Satisfaction After Modules</h1>
      <SatisfactionAfterChart />
      <div style={{ marginBottom: '40px' }}></div>
      <h1>View Feedback</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px' }}>
        <StudentFeedback />
        <TutorFeedback />
      </div>
    </div>
  )
}

export default Admin;
