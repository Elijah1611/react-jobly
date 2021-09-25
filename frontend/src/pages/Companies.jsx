import React, { useEffect, useState } from 'react'
import CompanyCard from '../components/CompanyCard'
import Protected from '../routes/Protected'
import { useAppState, useActions } from './../overmind'
import { Container } from '@mui/material';
import SearchBar from '../components/SearchBar';

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
                <SearchBar type="company" />
                {
                    state.filteredCompanies.length > 0
                        ? (state.filteredCompanies.map(c => <CompanyCard key={c.id} {...c} />))
                        : (state.companies.map(c => <CompanyCard key={c.id} {...c} />))
                }
            </Container>
        </Protected>
    )
}

export default Companies
