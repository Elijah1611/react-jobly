import React, { useEffect, useState } from 'react'
import CompanyCard from '../components/CompanyCard'
import Protected from '../routes/Protected'
import { useAppState, useActions } from './../overmind'
import { Container } from '@mui/material';

function Companies() {
    const state = useAppState()
    const actions = useActions()

    useEffect(() => {
        actions.getCompanies()
    }, [])

    console.log(state.companies)
    return (
        <Protected>
            <Container>
                {
                    state.companies.map(c => <CompanyCard key={c.handle} {...c} />)
                }
            </Container>
        </Protected>
    )
}

export default Companies
