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
                <Route exact path="/companies/:id">
                    <CompanyDetails />
                </Route>
                <Route exact path="/companies">
                    <Companies />
                </Route>

                <Route exact path="/jobs/:id">
                    <Job />
                </Route>
                <Route exact path="/jobs">
                    <JobBoard />
                </Route>

                <Route exact path="/profile">
                    <Profile />
                </Route> 
                <Route exact path="/register">
                    <Register />
                </Route> 
                <Route exact path="/login">
                    <Login />
                </Route> 
                
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default JoblyRouter
