import React from 'react'
import CityList from './CityList'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const cities = [
    {city: "Rosario", country: "Argentina"},
    {city: "Asunción", country: "Paraguay"},
    {city: "Santiago de Chile", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"},
]

test ("CityList render", async () => {
    
    const {findAllByRole} = render(<CityList cities={cities} />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})