import React from 'react'
import { Grid } from '@mui/material'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import ForestcastChart from '../components/ForestcastChart'
import Forestcast from '../components/Forescast/Forestcast'
import AppFrame from '../components/AppFrame'

const dataExample = [
  {
    "dayHour": "Jue 18",
    "min": 14,
    "max": 22,
  },
  {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
  },
  {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
  },
  {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
  },
  {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
  },
  {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
  }
]

const forescastItemListExample = [
  { hour:18, state:"sunny", temperature:17, weekDay:"Lunes" },
  { hour:18, state:"sunny", temperature:21, weekDay:"Martes" },
  { hour:18, state:"cloud", temperature:15, weekDay:"Miércoles" },
  { hour:18, state:"fog", temperature:20, weekDay:"Jueves" },
  { hour:18, state:"sunny", temperature:21, weekDay:"Viernes" },
  { hour:18, state:"sunny", temperature:25, weekDay:"Sábado" },
  { hour:18, state:"rain", temperature:23, weekDay:"Domingo" }
]

const CityPage = () => {
  const city = 'Buenos Aires'
  const country = 'Argentina'
  const state = 'cloudy'
  const temperature = 25
  const humidity = 60
  const wind = 33
  const data = dataExample
  const forescastItemList = forescastItemListExample

  return (
    <AppFrame>
      <Grid container
        justifyContent="center"
        direction="column"
        spacing={2}>
        <Grid item container
          justifyContent="center"
          alignItems="flex-end"
          xs={12} >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12} 
          justifyContent="center">
            <Weather state={state} temperature={temperature} />
            <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item >
          <ForestcastChart data={data} />
        </Grid>
        <Grid item >
          <Forestcast ForestcastItemList={forescastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  )
}

export default CityPage