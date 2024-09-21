import React from 'react'
import { useState } from "react";
import { Route, Link, useNavigate } from 'react-router-dom';

import { Box, Stack, Select, MenuItem, FormControl, InputLabel, TextField, Button, Typography } from '@mui/material'
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./../Firebase";

export default function StudentForm() {

  const [name, setName] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState('');
  const [module, setModule] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new document in the 'student_data' collection
      const newStudentData = {
        name: name,
        confidence_before: confidenceLevel,
        lesson_num: module,
      };

      // Use setDoc to store data with a generated id
      const studentDocRef = doc(firestore, 'student_data', name);
      await setDoc(studentDocRef, newStudentData);

      console.log('Student data successfully added!');
      // Redirect to another page, for example, to '/student'
      navigate('/student');

    } catch (error) {
      console.error("Error adding student data: ", error);
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
          PRE - SURVEY
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
            label="What is your name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            <InputLabel id="confidence-level-label">Confidence Level 1-10</InputLabel>
            <Select
              labelId="confidence-level-label"
              id="confidence-level-select"
              label="Confidence Level"
              value={confidenceLevel}
              onChange={(e) => setConfidenceLevel(e.target.value)}
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
            <InputLabel id="module-label">Module #</InputLabel>
            <Select
              labelId="module-label"
              id="module-select"
              label="Module"
              value={module}
              onChange={(e) => setModule(e.target.value)}
            >
              {[...Array(8).keys()].map((i) => (
                <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
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
