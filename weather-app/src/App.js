import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import Welcome from './pages/Welcome'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = props => {
  return (
    <Grid container
        justifyContent="center"
        direction="row">
        <Grid item
            xs={12}
            sm={11}
            md={10}
            lg={8}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route path="/main">
                        <MainPage />
                    </Route>
                    <Route path="/city">
                        <CityPage />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </Grid>
    </Grid>
  )
}

export default App
