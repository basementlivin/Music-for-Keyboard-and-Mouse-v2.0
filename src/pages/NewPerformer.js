import React from 'react'
import { useState } from 'react'

export const NewPerformer = () => {
    const URL = process.env.REACT_APP_BASE_URL + "performers";
    console.log(URL)
    const [newPerformerForm, setNewPerformerForm] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        setNewPerformerForm({ ...newPerformerForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newPerformer = { ...newPerformerForm }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPerformer)
            }
            const response = await fetch(URL, options)
            const responseData = await response.json()
            setNewPerformerForm({ name: "", email: "" })
            // todo after successful POST request, navigate to performance page
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
    <section>
        <h1>Enter your name and email.</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                required
                value={newPerformerForm.name}
                name="name"
                placeholder="John Cage"
                onChange={handleChange}
            />
            <input
                type="text"
                required
                value={newPerformerForm.email}
                name="email"
                placeholder="johnny@watermusic.net"
                onChange={handleChange}
            />
            <input type="submit" value="Submit" />
        </form>
    </section>
        </>
    )
}
