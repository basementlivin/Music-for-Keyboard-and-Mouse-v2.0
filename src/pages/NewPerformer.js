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
        const newPerformer = await createPerformer()
        setNewPerformerForm({ name: "", email: "" })
    };

    const createPerformer = async (Performer) => {
        try {
            const newPerformer = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Performer)
            });
            console.log(newPerformer)
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
    <section>
        <h1>Enter your name and email.</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newPerformerForm.name}
                name="name"
                placeholder="John Cage"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newPerformerForm.email}
                name="email"
                placeholder="john@watermusic.com"
                onChange={handleChange}
            />
            <input type="submit" value="Submit" />
        </form>
    </section>
        </>
    )
}
