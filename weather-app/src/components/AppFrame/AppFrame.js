import React from 'react'
import PropTypes from 'prop-types'
import { Grid, AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const AppFrame = ({children}) => {
  return (
    <Grid container 
        justifyContent="center">
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton color='inherit' aria-label='menu' >
                    <Link top="/main" color="inherit" aria-label="menu" component={LinkRouter}>
                        <IconContext.Provider value={{size:'2em'}}>
                            <WiDaySunny />
                        </IconContext.Provider>
                    </Link>
                </IconButton>
                <Typography color="inherit" variant='h6'>Weather App</Typography>
            </Toolbar> 
        </AppBar>
        <Grid item
            xs={12}
            sm={11}
            md={10}
            lg={8}>
                {children}
        </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
    children : PropTypes.node
}

export default AppFrame
