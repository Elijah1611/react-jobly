import React from 'react'
import { Grid, Typography, TextField, Card, Button } from '@mui/material'

const Register = () => {
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
                                Create An Account
                            </Typography>
                        </Grid>

                        <form>
                            <Grid container spacing={2}>
                                <Grid container item spacing={2} style={{ margin: '0 auto' }}>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="outlined"
                                            id="firstName"
                                            name="firstName"
                                            label="First Name"
                                            type="text"
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
                                            required
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
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container item spacing={2} style={{ margin: '0 auto' }}>
                                    <Grid item xs={6}>
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
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="outlined"
                                            id="passwordConfirm"
                                            name="passwordConfirm"
                                            label="Confirm Password"
                                            type="password"
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container item justifyContent="center">
                                    Already Have An Account? Log In!
                                    <Grid item xs={10} style={{ margin: "1rem 0" }}>
                                        <Button
                                            fullWidth
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                        >
                                            Sign in
                                        </Button>
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

export default Register
