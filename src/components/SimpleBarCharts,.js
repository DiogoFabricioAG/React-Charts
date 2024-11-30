import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { time: "10:00", Humedad: 86.2, Temperatura: 21.3, Presión: 1000.7, Sonido: 84.2, Viento: 3.1 },
  { time: "11:00", Humedad: 80.5, Temperatura: 22.1, Presión: 1001.5, Sonido: 85.0, Viento: 3.3 },
  { time: "12:00", Humedad: 75.0, Temperatura: 23.0, Presión: 1002.2, Sonido: 83.5, Viento: 4.0 },
  { time: "13:00", Humedad: 70.8, Temperatura: 24.0, Presión: 1001.0, Sonido: 82.3, Viento: 3.8 },
  { time: "14:00", Humedad: 68.0, Temperatura: 25.5, Presión: 1000.5, Sonido: 81.7, Viento: 4.5 },
]

export const SimpleBarCharts = () => {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" label={{ value: "Hora", position: "insideBottomRight", offset: -10 }} />
        <YAxis label={{ value: "Valores", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Humedad" fill="#8884d8" />
        <Bar dataKey="Temperatura" fill="#82ca9d" />
        <Bar dataKey="Presión" fill="#ffc658" />
        <Bar dataKey="Sonido" fill="#ff8042" />
        <Bar dataKey="Viento" fill="#00c49f" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarCharts
