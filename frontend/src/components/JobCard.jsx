import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { useAppState, useActions } from './../overmind'

const JobCard = ({ id, title, salary, equity }) => {
    const state = useAppState()
    const actions = useActions()
    const [disabledApp, setDisabledApp] = useState(false)

    const isApplied = (id) => state.user.applications.includes(id)

    const numberWithCommas = (num) => {
        return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        if (isApplied(id)) {
            setDisabledApp(true)
        }
    }, [])

    const applyToJob = () => {
        if (!isApplied(id)) {
            actions.applyToJob({ username: state.user.username, jobId: id })
            setDisabledApp(true)
        }
    }

    return (
        <Card raised sx={{ margin: '2rem', display: 'flex', justifyContent: 'space-between', borderRadius: '.5rem' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Salary: {salary ? '$' + numberWithCommas(salary) : 'Not Available'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Equity: {equity}%
                </Typography>
            </CardContent>
            <CardActions>
                {/* Add Apply Functionality */}
                <Button onClick={applyToJob} disabled={disabledApp} color="error" variant="contained" sx={{ margin: '0 1rem' }}>Apply</Button>
            </CardActions>
        </Card>
    )
}

export default JobCard