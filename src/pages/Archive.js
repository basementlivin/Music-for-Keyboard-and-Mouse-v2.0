import React from 'react';
import { useEffect, useState } from 'react';


export default function Archive () {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    console.log(BASE_URL);
    const [recordings, setRecordings ] = useState([]);
    const getRecordings = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allRecordings = await response.json()
            setRecordings(allRecordings)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{getRecordings()}, [])

    console.log(`Hey chum, looks like there are $%{recordings.length} available to render`)

    return (
        <div>
            <h1>Music for Keyboard and Mouse, The Collected Recordings (2022—present)</h1>
        </div>
    )
}