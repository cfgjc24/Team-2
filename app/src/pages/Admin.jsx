import React from "react";
import PreConfidenceChart from "../components/PreConfidenceChart";
import PostConfidenceChart from "../components/PostConfidenceChart";
import SatisfactionAfterChart from "../components/SatisfactionAfterChart";
import StudentFeedback from "../components/StudentFeedback";
import TutorFeedback from "../components/TutorFeedback";
import Stack from "@mui/material/Stack";

function Admin() {
  return (
    <div>
      <h1>Pre and Post-Confidence Surveys</h1>
      <Stack direction="row" spacing={4} justifyContent="center">
        <div style={{ flex: 1 }}>
          <h2>Pre-Confidence Survey</h2>
          <PreConfidenceChart />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Post-Confidence Survey</h2>
          <PostConfidenceChart />
        </div>
      </Stack>

      <div style={{ marginBottom: "40px" }}></div>
      <h1>Satisfaction After Modules</h1>
      <SatisfactionAfterChart />
      <div style={{ marginBottom: "40px" }}></div>
      <h1>View Feedback</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
        <StudentFeedback />
        <TutorFeedback />
      </div>
    </div>
  );
}

export default Admin;
