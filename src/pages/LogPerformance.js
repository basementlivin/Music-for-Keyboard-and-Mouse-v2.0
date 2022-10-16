import React from "react"
import { useState } from "react"

export default function LogPerformance () {
    const URL = process.env.REACT_APP_BASE_URL + "archive";
    const [newLog, setNewLog] = useState({
        location: "",
        environment: "",
        notes: "",
    })

    const handleChange = (e) => {
        setNewLog({ ...newLog, [e.target.name] : e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPerformanceLog = { ...newLog }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPerformanceLog)
        }
        const response = await fetch (URL, options)
        const responseData = await response.json()
        setNewLog({ location: "", environment: "", notes: "" })
    } catch (err) {
        console.log(err)
    }
};

// todo: link performance log to specific performer ID!

    return (
        <div>
            <h1>Log your performance here.</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newLog.location}
                        maxLength="80"
                        name="location"
                        placeholder="Moultrie, Georgia, USA"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newLog.environment}
                        maxLength="50"
                        name="environment"
                        placeholder="In my office at the Humane Society"
                        onChange={handleChange}
                        />
                    <input
                        type="text"
                        value={newLog.notes}
                        maxLength="400"
                        name="notes"
                        placeholder="Additional notes (optional)..."
                        onChange={handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </div>
    )
}