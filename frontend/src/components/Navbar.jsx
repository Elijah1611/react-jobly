import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { useAppState, useActions } from './../overmind'

const Navbar = () => {
    let history = useHistory();
    const state = useAppState()
    const actions = useActions()


    const logout = () => {
        actions.logout()
        history.push("/login");
    }

    const isLoggedIn = window.localStorage.getItem('token')
    useEffect(() => {
        if (isLoggedIn) {
            actions.getUser()
        }
    }, [state.user.token])

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" color="#fff" underline="none">
                        Jobly
                    </Link>
                </Typography>

                {isLoggedIn ? <Button variant="link" href="/companies">Companies</Button> : null}
                {isLoggedIn ? <Button variant="link" href="/jobs">Jobs</Button> : null}
                {isLoggedIn ? <Button variant="link" href="/profile">Profile</Button> : null}
                {isLoggedIn ? <Button variant="link" href="/" onClick={logout}>Logout {state.user.username}</Button> : null}

                {!isLoggedIn ? <Button variant="link" href="/register">Register</Button> : null}
                {!isLoggedIn ? <Button variant="link" href="/login">Login</Button> : null}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
