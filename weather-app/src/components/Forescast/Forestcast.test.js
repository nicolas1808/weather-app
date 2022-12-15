import React from 'react'
import Forescast from './Forestcast'
import {render} from '@testing-library/react'

const ForestcastItemList = [
    { hour:18, state:"sunny", temperature:17, weekday:"Lunes" },
    { hour:18, state:"sunny", temperature:21, weekday:"Martes" },
    { hour:18, state:"cloud", temperature:15, weekday:"miércoles" },
    { hour:18, state:"fog", temperature:20, weekday:"Jueves" },
    { hour:18, state:"sunny", temperature:21, weekday:"Viernes" },
    { hour:18, state:"sunny", temperature:25, weekday:"Sábado" },
    { hour:18, state:"rain", temperature:23, weekday:"Domingo" },
]

test ("Forecast render", async () => {
    const { findAllByTestId } = render (<Forescast ForestcastItemList={ForestcastItemList} />)

    const ForestcastItems = await findAllByTestId("forecast-item-container")

    expect(ForestcastItems).toHaveLength(7)
})
