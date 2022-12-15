import React from 'react'
import ForestcastItem from './ForestcastItem'

export default {
    title: 'ForescastItem',
    component: ForestcastItem,
}

export const LunesSoleado = () => <ForestcastItem weekDay="Lunes" hour={10} state="sunny" temperature={23} />