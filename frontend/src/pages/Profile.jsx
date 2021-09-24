import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useActions, useAppState } from '../overmind'
import { Grid, Typography, TextField, Card, Button } from '@mui/material'
import Protected from '../routes/Protected'

function Profile() {
    const state = useAppState()
    const actions = useActions()
    const isLoggedIn = window.localStorage.getItem('token')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (isLoggedIn) {
            actions.getUser()
        }
    }, [state.user.token])

    useEffect(() => {
        if (isLoggedIn) {
            setFirstName(state.user.firstName)
            setLastName(state.user.lastName)
            setEmail(state.user.email)
        }
    }, [state.user.email])

    useEffect(() => {
        if (state.error) {
            setStatus('Invalid Input: ' + state.error.message)
        }
    }, [state.error])

    const handleSubmit = (e) => {
        e.preventDefault()

        const updateUser = {
            firstName,
            lastName,
            email,
            password
        }

        actions.updateUser(updateUser)

        setStatus('User Updated!')
    }

    return (
        <Protected>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={6}
                style={{ marginTop: '2rem' }}
            >
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
                                    Profile
                                </Typography>
                            </Grid>

                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid container item spacing={2} style={{ margin: '0 auto' }}>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="outlined"
                                                id="firstName"
                                                name="firstName"
                                                label="First Name"
                                                type="text"
                                                value={firstName}
                                                onChange={e => setFirstName(e.target.value)}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="outlined"
                                                id="lastName"
                                                name="lastName"
                                                label="Last Name"
                                                type="text"
                                                value={lastName}
                                                onChange={e => setLastName(e.target.value)}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container item spacing={2} style={{ margin: '0 auto' }}>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                id="username"
                                                name="username"
                                                label="Username"
                                                type="text"
                                                value={state.user.username}
                                                disabled
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container item spacing={2} style={{ margin: '0 auto' }}>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                id="email"
                                                name="email"
                                                label="Email"
                                                type="text"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                                fullWidth
                                            />
                                            {console.log(email)}
                                        </Grid>
                                    </Grid>

                                    <Grid container item spacing={2} style={{ margin: '0 auto', marginBottom: '.5rem' }}>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                id="password"
                                                name="password"
                                                label="Confirm Password"
                                                type="password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                helperText="Confirm password to make changes."
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container item justifyContent="center">
                                        <Grid item xs={10} style={{ margin: "1rem 0" }}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                type="submit"
                                            >
                                                Save Changes
                                            </Button>

                                            <p style={{ textAlign: 'center' }}>{status}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Protected>
    )
}

export default Profile
