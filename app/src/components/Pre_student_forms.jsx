import React from 'react'
import {Box, Stack, Select, MenuItem, FormControl, InputLabel, TextField, Button} from '@mui/material'
import { useState } from "react";


export default function StudentForm({module}) {

  const [name, setName] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState(''); 

  const handleChange = (e) => {
    setConfidenceLevel(e.target.value);
    console.log(e.target.value)
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
    >
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
        > 
        </TextField>

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
          <InputLabel id="demo-simple-select-label">Confidence Level 1-10</InputLabel>
            <Select
              abelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Module"
              value={confidenceLevel}
              onChange={handleChange}   
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
        </FormControl>

      </Box>
        <Box display={'flex'} justifyContent={'center'} width= '100%' >
        <Button variant="contained">Submit Form</Button>
        </Box>
    </Stack>


      
   </Box>
    

 )
}
