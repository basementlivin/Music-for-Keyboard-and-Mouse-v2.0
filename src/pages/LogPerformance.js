import React from "react"
import { useState } from "react"


const ARCHIVE_URL = process.env.REACT_APP_BASE_URL + "archive";
console.log(ARCHIVE_URL) // HEY MAN, LOOKS GOOD.

export default function LogPerformance () {
    const [newLog, setNewLog] = useState({
        location: "",
        environment: "",
        notes: "",
    })

    const handleChange = (e) => {
        setNewLog({ ...newLog, [e.target.name] : e.target.value })
    };

    const createLog = async (performanceData) => {
        try {
            const newPerformanceLog = await fetch(ARCHIVE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(performanceData),
            });
        } catch (err) {

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPerformanceLog = await createLog();
        setNewLog({
            location: "",
            environment: "",
            notes: "",
        })
    }


    return (
        <div>
            <h1>Log Your Performance</h1>
            <section>
                <h2>Log your performance here.</h2>
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
                </form>
            </section>
        </div>
    )
}