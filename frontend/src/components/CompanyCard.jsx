import React from 'react'
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';


const CompanyCard = ({ name, handle, description, logoUrl, numEmployees }) => {

    const urlHandle = window.location.href
    console.log(urlHandle)

    return (
        <Link href={`/companies/${handle}`} underline="none">
            <Card raised sx={{ margin: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                        Employees: {numEmployees}
                    </Typography>
                </CardContent>
                <CardMedia>
                    {logoUrl ? <img src={logoUrl} alt={handle} width="100px" /> : null}
                </CardMedia>
            </Card>
        </Link>
    )
}

export default CompanyCard
