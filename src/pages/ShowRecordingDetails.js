import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const ShowRecordingDetails = () => {
    const [recordingDeets, setRecordingDeets] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    const URL = `${BASE_URL}archive/${id}`

    
    const getLogs = async () => {
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
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(recordingDeets)
            }
            const response = await fetch(URL, options)
            const responseData = await response.json()
            navigate("/archive")
        } catch (err) {
            console.log(err)
        }
    };

    const deletePerformanceLog = async () => {
        try {
            const options = { method: "DELETE" }

            const response = await fetch(URL, options)
            const deletedLog = await response.json()
            navigate("/archive")
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getLogs()
    }, []);

    return (
        <>
            {
                recordingDeets && (<section className="form-wrapper">
                <h1 className="form-header">Update your performance log.</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-rule"></div>
                    <input
                        type="text"
                        autoComplete="off"
                        value={recordingDeets.location}
                        maxLength="80"
                        name="location"
                        placeholder={recordingDeets.location}
                        onChange={handleChange}
                    />
                    <div className="form-rule"></div>
                    <input
                        type="text"
                        autoComplete="off"
                        value={recordingDeets.environment}
                        maxLength="50"
                        name="environment"
                        placeholder={recordingDeets.environment}
                        onChange={handleChange}
                        />
                    <div className="form-rule"></div>
                    <input
                        type="text"
                        autoComplete="off"
                        value={recordingDeets.notes}
                        maxLength="400"
                        name="notes"
                        placeholder={recordingDeets.notes}
                        onChange={handleChange}
                    />
                    <div className="form-rule"></div>
                    <input className="form-submit" type="submit" value="Submit edits." />
                </form>
            </section>)
            }
            <p className="form-delete" onClick={() => deletePerformanceLog()}>or click here to delete recording.</p>
        </>
    )
}