import React, { useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { useAppState, useActions } from './../overmind'

function Home() {
    const state = useAppState()
    const actions = useActions()
    const isLoggedIn = !!window.localStorage.getItem('token')

    useEffect(() => {
        if (isLoggedIn) {
            actions.getUser()
        }
    }, [isLoggedIn])

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} style={{ marginTop: '15rem' }}>
            <Grid item xs={12}>
                <Typography variant="h1" component="h1" textAlign="center">
                    Jobly
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="headline" component="h2" textAlign="center">
                    All the jobs in one, convenient place.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3" component="h3" textAlign="center">
                    {isLoggedIn ? `Welcome Back, ${state.user.username}!` : null}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Home
