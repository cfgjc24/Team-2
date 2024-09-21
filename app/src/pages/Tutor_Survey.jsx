import React, { useState } from 'react';
import { Box, Stack, Select, MenuItem, FormControl, InputLabel, TextField, Button } from '@mui/material';

export default function StudentForm() {
  const [name, setName] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState('');
  const [attendanceLevel, setAttendanceLevel] = useState('');
  const [comments, setComments] = useState('');


  const handleConfidenceChange = (e) => {
    setConfidenceLevel(e.target.value);
  };

  const handleAttendanceChange = (e) => {
    setAttendanceLevel(e.target.value);
  };

  return (
    <Box
      height="85vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      bgcolor="#bcecfc"
      sx={{ marginTop: "100px" }}
    >
      <Stack width="70vw" height="600px" spacing={10}>
        <Box
          width="100%"
          minHeight="100px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#f0f0f0"
          paddingX={5}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="What is your name?"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Box
          width="100%"
          minHeight="100px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#f0f0f0"
          paddingX={5}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">From 1-10, how confident are you in your students after this class?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Confidence Level"
              value={confidenceLevel}
              onChange={handleConfidenceChange}
            >
              {[...Array(10).keys()].map((value) => (
                <MenuItem key={value + 1} value={value + 1}>{value + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          width="100%"
          minHeight="100px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#f0f0f0"
          paddingX={5}
        >
          <TextField
            id="int-number"
            label="How many students attended?"
            value={attendanceLevel}
            onChange={handleAttendanceChange}
            type="number"
          />
        </Box>

        <Box
          width="100%"
          minHeight="100px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#f0f0f0"
          paddingX={5}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Comments?"
            variant="outlined"
            value={comments}
            onChange={(e) => setComments(e.target.comments)}
          />
        </Box>





      </Stack>




      <Button variant="contained">Submit</Button>
    </Box>
  );
}
