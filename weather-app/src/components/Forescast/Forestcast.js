import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import ForestcastItem from './../ForestcastItem'
import { validValues } from '../IconState'

const renderForestcastItem = forestcast => {
    const {weekDay, hour, state, temperature} = forestcast
    return (
        <Grid data-testid='forecast-item-container' item key={`${weekDay}${hour}`}>
            <ForestcastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature}></ForestcastItem>
        </Grid>
    )
}
const Forestcast = ({ ForestcastItemList }) => {
  return (
    <Grid container 
        justifyContent="center"
        alignItems="center">
            {
                ForestcastItemList.map( forestcast => renderForestcastItem(forestcast))
            }
    </Grid>
  )
}

Forestcast.propTypes = {
    ForestcastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,
}

export default Forestcast
