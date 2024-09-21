import React from "react";
import PreConfidenceChart from "../components/PreConfidenceChart";
import PostConfidenceChart from "../components/PostConfidenceChart";
import SatisfactionAfterChart from "../components/SatisfactionAfterChart";
import StudentFeedback from "../components/StudentFeedback";
import TutorFeedback from "../components/TutorFeedback";
import Stack from "@mui/material/Stack";
import Navbar from "../components/navbar";

function Admin() {
  return (
    <div>
      <Navbar/>
      <h1>Pre and Post-Confidence Surveys</h1>
      <Stack direction="row" spacing={4} justifyContent="center">
        <div style={{ flex: 1, textAlign: "center" }}>
          <h1>Pre-Confidence Survey</h1>
          <PreConfidenceChart style={{ width: "100%", height: "400px" }} />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <h1>Post-Confidence Survey</h1>
          <PostConfidenceChart style={{ width: "100%", height: "400px" }} />
        </div>
      </Stack>

      <div style={{ marginBottom: "40px" }}></div>
      <h2>Satisfaction After Modules</h2>
      <SatisfactionAfterChart />
      <div style={{ marginBottom: "40px" }}></div>
      <h2>View Feedback</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
        <StudentFeedback />
        <TutorFeedback />
      </div>
    </div>
  );
}

export default Admin;
