import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            <div className="archive-wrapper">
            <h1 className="archive-header">Music for Keyboard and Mouse, The Collected Recordings (2022—present)</h1>
                {recordings.map(recording => (
                <div className="recording-wrapper">
                    <div className="recording-rule"></div>
                        <ul className="recording-details" key={recording._id}>
                            <li>{recording.location}</li>
                            <li>{recording.environment}</li>
                            <Link to={`/archive/${recording._id}`}>edit recording details</Link>
                        </ul>
                    </div>
                ))}
                <div className="recording-rule"></div>
            </div>
        </div>
    )
}