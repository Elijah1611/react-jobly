import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Jobly
                </Typography>

                <Button variant="link" href="/register">Register</Button>

                <Button variant="link" href="/login">Login</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
