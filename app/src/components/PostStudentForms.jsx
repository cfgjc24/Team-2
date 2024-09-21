import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Select, MenuItem, FormControl, InputLabel, TextField, Button, Typography } from '@mui/material';
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./../Firebase"; // Make sure Firebase is correctly initialized

export default function PostStudentForm() {

  const [userId, setUserId] = useState('');
  const [confidenceAfter, setConfidenceAfter] = useState('');
  const [satisfactionAfter, setSatisfactionAfter] = useState('');
  const [feedback, setFeedback] = useState('');
  const [lessonNum, setLessonNum] = useState('');
  const [timeTaken, setTimeTaken] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new document in the 'student_data' collection with the required fields
      const newPostSurveyData = {
        user_id: userId,
        confidence_after: confidenceAfter,
        satisfaction_after: satisfactionAfter,
        feedback: feedback,
        lesson_num: lessonNum,
        time_taken: parseInt(timeTaken, 10)
      };

      // Use setDoc to store data with the userId as the document ID
      const studentDocRef = doc(firestore, 'student_data', userId);
      await setDoc(studentDocRef, newPostSurveyData);

      console.log('Post survey data successfully added!');
      // Redirect to another page, for example, to '/student'
      navigate('/student');

    } catch (error) {
      console.error("Error adding post survey data: ", error);
    }
  };

  return (
    <Box
      fullWidth
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor={'#ADD8E6'}
    >
      <Stack
        width={'70vw'}
        height={'600px'}
        spacing={10}
        justifyContent={'center'}
      >
        <Typography variant='h3' component={'h2'} textAlign={'center'}>
          POST - SURVEY
        </Typography>

        <Box
          width={'100%'}
          minHeight={'100px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          bgcolor={'#f0f0f0'}
          paddingX={5}
        >
          <TextField
            fullWidth id="outlined-basic"
            label="User ID"
            variant="outlined"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Box>

        <Box
          width={'100%'}
          minHeight={'100px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          bgcolor={'#f0f0f0'}
          paddingX={5}
        >
          <FormControl fullWidth>
            <InputLabel id="confidence-after-label">Confidence Level After 1-10</InputLabel>
            <Select
              labelId="confidence-after-label"
              id="confidence-after-select"
              label="Confidence Level After"
              value={confidenceAfter}
              onChange={(e) => setConfidenceAfter(e.target.value)}
            >
              {[...Array(10).keys()].map((i) => (
                <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          width={'100%'}
          minHeight={'100px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          bgcolor={'#f0f0f0'}
          paddingX={5}
        >
          <FormControl fullWidth>
            <InputLabel id="satisfaction-after-label">Satisfaction After 1-10</InputLabel>
            <Select
              labelId="satisfaction-after-label"
              id="satisfaction-after-select"
              label="Satisfaction After"
              value={satisfactionAfter}
              onChange={(e) => setSatisfactionAfter(e.target.value)}
            >
              {[...Array(10).keys()].map((i) => (
                <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          width={'100%'}
          minHeight={'100px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          bgcolor={'#f0f0f0'}
          paddingX={5}
        >
          <TextField
            fullWidth id="feedback"
            label="Feedback"
            variant="outlined"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Box>

        <Box
          width={'100%'}
          minHeight={'100px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          bgcolor={'#f0f0f0'}
          paddingX={5}
        >
          <FormControl fullWidth>
            <InputLabel id="lesson-num-label">Lesson #</InputLabel>
            <Select
              labelId="lesson-num-label"
              id="lesson-num-select"
              label="Lesson Number"
              value={lessonNum}
              onChange={(e) => setLessonNum(e.target.value)}
            >
              {[...Array(8).keys()].map((i) => (
                <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          width={'100%'}
          minHeight={'100px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          bgcolor={'#f0f0f0'}
          paddingX={5}
        >
          <TextField
            fullWidth id="time-taken"
            label="Time Taken (in minutes)"
            variant="outlined"
            value={timeTaken}
            onChange={(e) => setTimeTaken(e.target.value)}
            type="number"
          />
        </Box>

        <Box display={'flex'} justifyContent={'center'} width='100%' >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit Form
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
