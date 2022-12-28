import React from 'react'
import { Grid, Typography, Link } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'
import WelcomeScreen from '../components/WelcomeScreen'

const NotFoundPage = props => {
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
                    <WiRain />
                  </IconContext.Provider>
                </Grid>
                <Grid container item xs={12}
                  direction='column'
                  justifyContent='center'
                  alignItems='center'>
                    <Typography variant='h4' color='inherit'>
                      404 | La página no existe
                    </Typography>
                    <Link to='/' color='inherit' aria-label='menu' component={LinkRouter}>
                      Vovler al inicio
                    </Link>
                </Grid>
            </Grid>
          </div>
      </Grid>
    </WelcomeScreen>
  )
}

export default NotFoundPage
