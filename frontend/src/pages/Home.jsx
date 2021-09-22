import React from 'react'
import { Grid, Typography } from '@mui/material'

function Home() {
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
                    Welcome Back, Jack!
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Home
