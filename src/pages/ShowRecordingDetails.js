// import React from "react"
// import { useState } from "react"
// import { Navigate } from "react-router-dom";

// export default function ShowRecordingDetails () {

//     // todo: make this url make sense
//     const URL = `process.env.REACT_APP_BASE_URL + "archive/" + ${recordingdetails.id}`;
//     const [editLog, setEditLog] = useState("")

//     const updateRecordingLog = async (e) => {
//         e.preventDefault()

//         try {
//             await fetch(URL, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(editLog),
//             })
//             getRecordings()
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     const handleChange = event => {
//         setEditLog({ ...editLog, [event.target.name]: event.target.value })
//     }



//     const deletePerformanceLog = async () => {
//         try {
//             const options = {
//                 method: "DELETE"
//             }
//             const response = await fetch(URL, options)
//             const deletedPerformanceLog = await response.json()
//             Navigate("/archive")
//         } catch (err) {
//             console.log(err)
//             Navigate(URL)
//         }
//     }


//     return (
//         <div>
//             <h1>Edit or Delete Recording</h1>
//             <p>Add a form here.</p>
//         </div>
//     )
// }