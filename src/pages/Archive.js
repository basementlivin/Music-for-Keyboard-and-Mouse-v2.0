import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'react-router-dom'


export default function Archive () {
    const URL = process.env.REACT_APP_BASE_URL + "archive";
    const [recordings, setRecordings ] = useState([]);
    
    const getRecordings = async () => {
        try {
            const response = await fetch(URL)
            const allRecordings = await response.json()
            setRecordings(allRecordings)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{getRecordings()}, [])
    // console.log(recordings)
    // console.log(`Hey chum, looks like there are ${recordings.length} recordings available to render`)
    
    return (
        <div>
            <h1 className="archive-header">Music for Keyboard and Mouse, The Collected Recordings (2022—present)</h1>
            <div className="archive-wrapper">
                <div className="recording-divider"></div>
                    <div className="recording-wrapper">
                        <ul className="recording-details">
                            {recordings.map(recording => <li>{recording.name}</li>)}
                            {recordings.map(recording => <li>{recording.location}</li>)}
                            {recordings.map(recording => <li>{recording.environment}</li>)}
                        </ul>
                    </div>
                <div className="recording-divider"></div>
            </div>
        </div>
    )
}