import React from 'react'
import {Box, Stack, Select, MenuItem, FormControl, InputLabel, TextField, Button, Typography} from '@mui/material'
import { useState } from "react";
import { Route, Link} from 'react-router-dom';


export default function StudentForm() {

  const [name, setName] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState(''); 
  const [module, setModule] = useState('')


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
                onChange={(e) => {
                  setConfidenceLevel(e.target.value)}}   
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
            <InputLabel id="demo-simple-select-label">Module #</InputLabel>
              <Select
                abelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Module"
                value={module}
                onChange={(e) => {
                  setModule(e.target.value);
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
              </Select>
          </FormControl>
      
        </Box>

          <Box display={'flex'} justifyContent={'center'} width= '100%' >
            <Link to = '/student' className='btn'> Submit Form</Link>
          </Box>
    </Stack>


      
   </Box>
    

 )
}
