import React, { useState } from 'react';
import { FormLabel, TextField, Button } from '@mui/material';
import '../index.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [school, setSchool] = useState('');

  return (
    <div>
      <h1 class = "login-header"><strong>Sign In To FGI</strong></h1>
    <div className="login-container">
     
      <form className="login-form">
      
        <div className="form-group">
          <FormLabel className="label">Username:</FormLabel>
          <TextField
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <FormLabel className="label">Password:</FormLabel>
          <TextField
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <FormLabel className="label">Role:</FormLabel>
          <TextField
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <FormLabel className="label">School:</FormLabel>
          <TextField
            
            fullWidth
            variant="outlined"
          />
        </div>
        <Button type="submit" variant="contained" color="primary" className="submit-button">
          Submit
        </Button>
      </form>
    </div>
    </div>
  );
}
