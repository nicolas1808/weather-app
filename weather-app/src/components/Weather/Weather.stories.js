import React from 'react'
import Weather from './Weather'

export default {
    title: 'Weather',
    component: Weather
}

export const WeatherRain = () => <Weather temperature={10} state="rain" />
export const WeatherSunny = () => <Weather temperature={10} state="sunny" />