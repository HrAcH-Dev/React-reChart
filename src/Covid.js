import React, { useState,useEffect } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Covid({ arr }) {
   const [data,setArr] = useState([
    {
      name: 'Deltadeaths',
      uv: arr.deltadeaths,
      amt: 2400,
    },
    {
      name: 'Migratedother',
      uv: arr.migratedother,
      amt: 2210,
    },
    {
      name: 'Deaths',
      uv: arr.deaths,
      amt: 2290,
    },
    {
      name: 'Confirmed',
      uv: arr.confirmed,
      amt: 2000,
    },
    {
      name: 'Deltadeaths',
      uv: arr.deltadeaths,
      amt: 2181,
    },
    {
      name: 'Migratedother',
      uv: arr.migratedother,
      amt: 2500,
    },
    
   ])

   return (
    <ResponsiveContainer width="50%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
   )
}
