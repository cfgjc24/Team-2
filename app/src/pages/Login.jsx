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
    <div>
      <form class = "form">
  <div class = "username">
    <FormLabel>Username: </FormLabel>
    <TextField />
  </div>
  <div class = "password">
    <FormLabel>Password: </FormLabel>
    <TextField />
  </div>
  <div class = "password">
    <FormLabel>Role: </FormLabel>
    <TextField />
  </div>
  <div class = "password">
    <FormLabel>School: </FormLabel>
    <TextField />
  </div>
</form>
<button type = "submit">Submit</button>
    </div>
  )
}
