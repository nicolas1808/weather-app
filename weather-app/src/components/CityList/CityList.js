import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem } from '@mui/material'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const renderCityAndCountry = eventOnClickCity => CityAndCountry => {
    const { city, country } = CityAndCountry
    
    return (
        <ListItem 
          key={city} 
          onClick={eventOnClickCity} 
          button>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item
                    xs={12}
                    md={8}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    xs={12}
                    md={4}>
                    <Weather temperature={15} state="sunny"/>
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {
        cities.map(CityAndCountry => renderCityAndCountry(onClickCity)(CityAndCountry))
      }
    </List>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
