import React, { useEffect } from 'react'
import Protected from '../routes/Protected'
import { useAppState, useActions } from './../overmind'
import { useParams } from 'react-router-dom'
import { Container, Typography, Grid, Card } from '@mui/material'
import JobCard from '../components/JobCard'

function CompanyDetails() {
    const { handle } = useParams()
    const state = useAppState()
    const actions = useActions()

    useEffect(() => {
        if (!state.company) {
            actions.getCompanyByHandle(handle)
        }
    }, [])

    return (
        <Protected>
            {
                state.company ? (
                    <Container>
                        <Grid container direction="row" justifyContent="space-between" sx={{ margin: '2rem 0' }}>
                            <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography gutterBottom variant="h3" component="div">
                                    {state.company.name}
                                </Typography>
                                <Typography gutterBottom variant="body1" color="text.secondary">
                                    {state.company.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Number of Employees: {state.company.numEmployees}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {<img src={state.company.logoUrl} alt={handle} width="250px" /> || null}
                            </Grid>
                        </Grid>
                        <Grid container direction="column">
                            {
                                state.company.jobs.map(job => (
                                    <Card key={job.id}>
                                        <JobCard {...job} />
                                    </Card>
                                ))
                            }
                        </Grid>
                    </Container>
                ) : (
                    <Container sx={{ height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h2" component="h1">Loading...</Typography>
                    </Container>
                )
            }
        </Protected>
    )
}

export default CompanyDetails
