"use client"
import { AppBar, Typography, IconButton, Drawer, Box, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import Logo from '../assets/logo.png';


export default function Navbar() {

    return (
        <Box>
          <AppBar sx={{ backgroundColor: "white", height: '52px', width: '100%', boxShadow: 'none' }}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Link component={RouterLink} to="/" sx={{ color: 'white', textDecoration: 'none' }}>
                <img src={Logo} alt="Logo" style={{ width: '200px', height: 'auto', padding: '15px'}} />
              </Link>
            </Box>
          </AppBar>

        </Box>
      );
}
