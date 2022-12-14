import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ForestcastChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"95%"} height={250}>
        <LineChart 
            margin={{ top: 20, bottom: 20, left: 10, right:10}} 
            data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="dayHour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="max" stroke="#FF0000" />
                <Line type="monotone" dataKey="min" stroke="#0000FF" />
        </LineChart>
    </ResponsiveContainer>
  )
}

ForestcastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
    })).isRequired,
}

export default ForestcastChart