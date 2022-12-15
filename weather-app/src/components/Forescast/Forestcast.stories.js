import React from 'react'
import Forestcast from './Forestcast'

export default {
    title: 'Forescast',
    component: Forestcast,
}

const forescastItemList = [
    { hour:18, state:"sunny", temperature:17, weekday:"Lunes" },
    { hour:18, state:"sunny", temperature:21, weekday:"Martes" },
    { hour:18, state:"cloud", temperature:15, weekday:"miércoles" },
    { hour:18, state:"fog", temperature:20, weekday:"Jueves" },
    { hour:18, state:"sunny", temperature:21, weekday:"Viernes" },
    { hour:18, state:"sunny", temperature:25, weekday:"Sábado" },
    { hour:18, state:"rain", temperature:23, weekday:"Domingo" },
]

export const ForestcastExample = () => <Forestcast ForestcastItemList={forescastItemList} />