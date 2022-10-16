import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const ShowRecordingDetails = () => {
    const [recordingDeets, setRecordingDeets] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    
    const getLogs = async () => {
        const URL = `${BASE_URL}archive/${id}`
        console.log(URL)
        try {
            const response = await fetch(URL)
            const recordingDetails = await response.json()
            setRecordingDeets(recordingDetails)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setRecordingDeets({ ...recordingDeets, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const updateRecordingDeets = { ...recordingDeets }
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateRecordingDeets)
            }
            const response = await fetch(URL, options)
            const responseData = await response.json()
            setRecordingDeets({ location: "", environment: "", notes: "" })
            navigate("/archive")
        } catch (err) {
            console.log(err)
        }
    };

    const deletePerformanceLog = async () => {
        try {
            const options = { method: "DELETE" }
            const URL = `${BASE_URL}archive/${id}`
            console.log(URL)

            const response = await fetch(URL, options)
            const deletedLog = await response.json()
            console.log(deletedLog)
            navigate("/archive")
        } catch (err) {
            console.log(err)
            navigate("/archive/" + id)
        }
    };

    useEffect(() => {
        getLogs()
    }, []);

    return (
        <div>
            <h1>Edit performance log.</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={recordingDeets.location}
                        maxLength="80"
                        name="location"
                        placeholder={recordingDeets.location}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={recordingDeets.environment}
                        maxLength="50"
                        name="environment"
                        placeholder={recordingDeets.environment}
                        onChange={handleChange}
                        />
                    <input
                        type="text"
                        value={recordingDeets.notes}
                        maxLength="400"
                        name="notes"
                        placeholder={recordingDeets.notes}
                        onChange={handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </div>
    )
}
