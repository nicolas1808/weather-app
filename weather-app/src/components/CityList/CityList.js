import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const renderCityAndCountry = eventOnClickCity => CityAndCountry => {
    const { city, country } = CityAndCountry
    
    return (
        <li key={city} onClick={eventOnClickCity} >
            <Grid container
                justify="center"
                alignItems="center"
            >
                <Grid item
                    md={8}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={4}>
                    <Weather temperature={15} state="sunny"/>
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
      {
        cities.map(CityAndCountry => renderCityAndCountry(onClickCity)(CityAndCountry))
      }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
