import React from 'react'
import CityInfo from './CityInfo'
import {render} from '@testing-library/react'

test ("CityInfo render", async () => {
    // AAA Arrange Act Assert

    const city = "Rosario"
    const country = "Argentina"

    const {findAllByRole} = render(<CityInfo city={city} country={country} />)

    const cityAndCountryComponents = await findAllByRole("heading")

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})