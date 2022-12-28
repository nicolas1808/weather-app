import React from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import { Grid, Typography, Link } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const Welcome = () => {
  return (
    <WelcomeScreen>
      <Grid container
        justifyContent='center'
        direction='column'
        className='full'>
          <div className='highlight'>
            <Grid container item xs={12}
              justifyContent='center'
              alignItems='center'>
                <Grid item>
                  <IconContext.Provider value={{size:'6em'}}>
                    <WiDaySunny />
                  </IconContext.Provider>
                </Grid>
                <Grid container item xs={12}
                  direction='column'
                  justifyContent='center'
                  alignItems='center'>
                    <Typography variant='h4' color='inherit'>
                      Weahter App
                    </Typography>
                    <Link to='/main' color='inherit' aria-label='menu' component={LinkRouter}>
                      Ingresar
                    </Link>
                </Grid>
            </Grid>
          </div>
      </Grid>
    </WelcomeScreen>
  )
}

export default Welcome
