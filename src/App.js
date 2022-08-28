import { useEffect, useState } from 'react';

import axios from 'axios'

import Covid from './Covid';

import "./App.css"



export default function App() {
  const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json")
            const actualData = await res.json()
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])       
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getCovidData()
    }, [])

    return (
      <div className='App'>
        <h1>Covid-19 API Chart</h1>

        <Covid  arr={data}/>
      </div>
    );
}



