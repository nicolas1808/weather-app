import React from 'react'
import { useHistory } from 'react-router-dom'
import  CityList  from './../components/CityList'

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
    <div>
      <h2>Lista de ciudades</h2>
      <CityList cities={cities} onClickCity={onClickHandler} />
    </div>
  )
}

export default MainPage