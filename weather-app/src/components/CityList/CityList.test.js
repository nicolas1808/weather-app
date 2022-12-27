import React from 'react'
import CityList from './CityList'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const cities = [
    {city: "Rosario", country: "Argentina"},
    {city: "Asunción", country: "Paraguay"},
    {city: "Santiago de Chile", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"},
]

test ("CityList renders", async () => {
    
    const {findAllByRole} = render(<CityList cities={cities} />)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test ('CityList click on item', async () => {
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render (<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})