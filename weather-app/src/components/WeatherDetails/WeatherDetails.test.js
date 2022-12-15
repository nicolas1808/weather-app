import React from 'react'
import WeatherDetails from './WeatherDetails'
import { render } from '@testing-library/react'

test('WeatherDetails render', async () => {
    const { findByText } = render(<WeatherDetails humidity={80} wind={10} />)

    const humidity = await findByText(/80/)
    
    const wind = await findByText(/10/)

    expect(humidity).toHaveTextContent("Humedad: 80%")
    expect(wind).toHaveTextContent("Viento: 10 km/h")
})