import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList  from './../components/CityList'
import AppFrame from './../components/AppFrame'
import { Paper } from '@mui/material'

const cities = [
  {city: "Rosario", country: "Argentina"},
  {city: "Asunción", country: "Paraguay"},
  {city: "Santiago de Chile", country: "Chile"},
  {city: "Buenos Aires", country: "Argentina"},
]

const MainPage = () => {

  const history = useHistory()

  const onClickHandler = () => {
    history.push("/city")
  }

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  )
}

export default MainPage