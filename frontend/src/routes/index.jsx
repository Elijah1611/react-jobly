import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './../pages/Home'
import Profile from '../pages/Profile'
import JobBoard from '../pages/JobBoard'
import Job from '../pages/Job'
import Companies from '../pages/Companies'
import CompanyDetails from '../pages/CompanyDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'

function JoblyRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/companies/:id" component={<CompanyDetails />} />
                <Route exact path="/companies" component={<Companies />} />
                <Route exact path="/jobs/:id" component={<Job />} />
                <Route exact path="/jobs" component={<JobBoard />} />
                <Route exact path="/profile" component={<Profile />} />
                <Route exact path="/register" component={<Register />} />
                <Route exact path="/login" component={<Login />} />
                <Route exact path="/" component={<Home />} />
            </Switch>
        </Router>
    )
}

export default JoblyRouter
