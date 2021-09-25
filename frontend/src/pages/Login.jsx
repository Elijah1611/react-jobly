import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useAppState, useActions } from './../overmind'
import { Grid, Typography, TextField, Card, Button } from '@mui/material'

const Login = () => {
    let history = useHistory();
    const state = useAppState()
    const actions = useActions()

    const isLoggedIn = !!(window.localStorage.getItem('token'))

    useEffect(() => {
        if (isLoggedIn) {
            actions.getUser()
            history.push('/profile')
        }
    }, [state.user.token])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);

        actions.login(formProps)
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={6}
            style={{ marginTop: '2rem' }}
        >
            <Grid item xs={12} lg={9}>
                <Typography variant="h2" style={{ textAlign: "center" }}>
                    Jobly
                </Typography>
            </Grid>

            <Grid item xs={12} lg={9}>
                <Card
                    elevation={4}
                    style={{
                        width: "500px",
                        padding: "2rem",
                        margin: "0 auto",
                    }}
                >
                    <Grid container direction="column" spacing={4}>
                        <Grid container item direction="column">
                            <Typography
                                variant="h4"
                                style={{ textAlign: "center", marginBottom: "1rem" }}
                            >
                                Login Into Account
                            </Typography>
                        </Grid>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>

                                <Grid container item spacing={2} style={{ margin: '0 auto' }}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            id="username"
                                            name="username"
                                            label="Username"
                                            type="text"
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container item spacing={2} style={{ margin: '0 auto' }}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            id="password"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container item justifyContent="center">
                                    <Button href="/register" variant="link">
                                        Don't Have An Account? Sign Up!
                                    </Button>


                                    <Grid item xs={10} style={{ margin: "1rem 0" }}>
                                        <Button
                                            fullWidth
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                        >
                                            Sign in
                                        </Button>
                                        <p>{state.error?.message}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Login
