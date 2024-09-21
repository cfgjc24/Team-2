import React from 'react'
import {TextField, FormLabel} from '@mui/material';
import { useState, useEffect } from 'react'
import { ReactDOM } from 'react'
import '../index.css'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [school, setSchool] = useState('')

  return (
    <div class = "login">
      <form>
  <div class = "form-group">
    <FormLabel class = "label">Username: </FormLabel>
    <TextField />
  </div>
  <div class = "form-group">
    <FormLabel class = "label">Password: </FormLabel>
    <TextField />
  </div>
  <div class = "form-group">
    <FormLabel class = "label">Role: </FormLabel>
    <TextField />
  </div>
  <div class = "form-group">
    <FormLabel class = "label">School: </FormLabel>
    <TextField />
  </div>
</form>
<button type = "submit">Submit</button>
    </div>
  )
}
