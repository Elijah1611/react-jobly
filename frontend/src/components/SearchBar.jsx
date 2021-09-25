import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material';
import { useAppState, useActions } from './../overmind'


const SearchBar = ({ type }) => {
    const state = useAppState()
    const actions = useActions()
    const [filterQuery, setFilterQuery] = useState('')

    const queryJobs = () => {
        if (filterQuery) {
            actions.searchJobs(filterQuery)
        }
        else {
            actions.clearSearchedJobs()
        }
    }

    const queryCompanies = () => {
        if (filterQuery) {
            actions.searchCompanies(filterQuery)
        }
        else {
            actions.clearSearchedCompanies()
        }
    }

    const searchQuery = () => {
        if (type == 'company') {
            queryCompanies()
        }

        if (type == 'job') {
            queryJobs()
        }
    }

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4, gap: '1rem' }} >
            <Grid item sm={12} md={6}>
                <TextField
                    variant="outlined"
                    id="filterJobs"
                    name="filterJobs"
                    label={type == 'job' ? 'Search Jobs' : 'Search Company'}
                    type="text"
                    size="small"
                    value={filterQuery}
                    onChange={e => setFilterQuery(e.target.value)}
                    fullWidth
                />
            </Grid>

            <Grid>
                <Button variant="contained" onClick={searchQuery}>
                    Search
                </Button>
            </Grid>
        </Grid>
    )
}

export default SearchBar
