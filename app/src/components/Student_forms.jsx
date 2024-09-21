import React from 'react'
import {Box, Stack, Select, MenuItem, FormControl, InputLabel, TextField, Button} from '@mui/material'
import { useState } from "react";


export default function StudentForm() {

  const [name, setName] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState(''); 

  const handleChange = (e) => {
    setConfidenceLevel(e.target.value);
  };
  
 return (
   <Box
   height="85vh"
   display="flex"
   flexDirection="column"
   justifyContent="flex-end"
   alignItems="center"
   bgcolor={'#2A92Ef'}
   sx={{ marginTop: "100px"}}
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
          <InputLabel id="demo-simple-select-label">From 1-10 how confident are you prior to this class</InputLabel>
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
      
    </Stack>

    <Button variant="contained" >Contained</Button>

      
   </Box>
    

 )
}
