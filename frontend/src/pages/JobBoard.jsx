import React, { useEffect, useState } from 'react'
import CompanyCard from '../components/CompanyCard'
import Protected from '../routes/Protected'
import { useAppState, useActions } from './../overmind'
import { Container } from '@mui/material';
import JobCard from '../components/JobCard';

function JobBoard() {
    const state = useAppState()
    const actions = useActions()

    useEffect(() => {
        actions.getJobs()
    }, [])

    console.log(state.jobs)
    return (
        <Protected>
            <Container>
                {
                    state.jobs.map(job => <JobCard key={job.id} {...job} />)
                }
            </Container>
        </Protected>
    )
}

export default JobBoard
