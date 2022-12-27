import React from 'react'
import Forescast from './Forestcast'
import {render} from '@testing-library/react'

const ForestcastItemList = [
    { hour:18, state:"sunny", temperature:17, weekDay:"Lunes" },
    { hour:18, state:"sunny", temperature:21, weekDay:"Martes" },
    { hour:18, state:"cloud", temperature:15, weekDay:"miércoles" },
    { hour:18, state:"fog", temperature:20, weekDay:"Jueves" },
    { hour:18, state:"sunny", temperature:21, weekDay:"Viernes" },
    { hour:18, state:"sunny", temperature:25, weekDay:"Sábado" },
    { hour:18, state:"rain", temperature:23, weekDay:"Domingo" },
]

test ("Forecast render", async () => {
    const { findAllByTestId } = render (<Forescast ForestcastItemList={ForestcastItemList} />)

    const ForestcastItems = await findAllByTestId("forecast-item-container")

    expect(ForestcastItems).toHaveLength(7)
})
