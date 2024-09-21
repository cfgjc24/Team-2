"use client"
import { AppBar, Typography, IconButton, Drawer, Box, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsOpen(false)
    }

    return (
        <Box>
            <AppBar sx={{ backgroundColor: "Black", height: '40px'}}>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}   >
                    <Link component={RouterLink} to="/" sx={{ color: 'white', textDecoration: 'none' }}>
                            Home
                    </Link>
                    <IconButton size="large" color="inherit" onClick={handleOpenDrawer} style={{position: 'absolute', left: '650px'}} alignItems='right'>
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </AppBar>
            <Drawer anchor="right" open={isOpen} onClose={handleCloseDrawer}>   
                <Box display="flex" flexDirection="column" alignItems="space-between" justifyContent='space-between' height={'100vw'}>
                    <Typography p={2} sx={{ fontWeight: "bold", fontSize: "30px", color: "red" }}>Profile</Typography>
                    <Button onClick= {() => {
                        handleCloseDrawer()
                    }}>
                        
                    </Button>
                </Box>
            </Drawer>
        </Box>
    )
}
