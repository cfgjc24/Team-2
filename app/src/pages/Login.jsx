import React from 'react'
import { TextField, FormLabel, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react'
import '../index.css'

export default function Login() {
  // State variables to store the form input
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [school, setSchool] = useState('')

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Log or use the form values
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
    console.log('School:', school);

    // handle auth 
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <FormLabel className="label">Username</FormLabel>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <FormLabel className="label">Password</FormLabel>
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <FormLabel className="label">Role</FormLabel>
          <TextField
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="form-group">
          <FormLabel className="label">School</FormLabel>
          <TextField
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <Button type="submit"
          variant="outlined"
          size="small"
          style={{ marginTop: '20px' }}>Login</Button>
      </form>
    </div>
  )
}