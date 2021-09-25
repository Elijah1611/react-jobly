import React, { useEffect, useState } from 'react'
import CompanyCard from '../components/CompanyCard'
import Protected from '../routes/Protected'
import { useAppState, useActions } from './../overmind'
import { Container } from '@mui/material';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';

function JobBoard() {
    const state = useAppState()
    const actions = useActions()

    useEffect(() => {
        actions.getJobs()
    }, [])

    return (
        <Protected>
            <Container>
                <SearchBar type="job" />
                {
                    state.filteredJobs.length > 0
                        ? (state.filteredJobs.map(job => <JobCard key={job.id} {...job} />))
                        : (state.jobs.map(job => <JobCard key={job.id} {...job} />))
                }
            </Container>
        </Protected>
    )
}

export default JobBoard
