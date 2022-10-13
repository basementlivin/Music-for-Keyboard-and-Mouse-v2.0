import { useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://music-for-keyboard-and-mouse.herokuapp.com/archive";
console.log(BASE_URL);
// todo: figure out why the above isn't pulling the URL from .env !!

const Archive = (props) => {
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

export default Archive