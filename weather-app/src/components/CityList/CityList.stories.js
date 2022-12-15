import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

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

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")}/>
