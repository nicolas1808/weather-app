import React from 'react'
import CityList from './CityList'

export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    {city: "Rosario", country: "Argentina"},
    {city: "Asunción", country: "Paraguay"},
    {city: "Santiago de Chile", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"},
]

export const CityListExample = () => <CityList cities={cities}/>
