import React from "react"
import { Routes, Route } from "react-router-dom"
import SplashPage from "./pages/SplashPage"
import { NewPerformer } from "./pages/NewPerformer"
import Archive from "./pages/Archive"
import Performance from "./pages/Performance"
import ShowRecordingDetails from "./pages/ShowRecordingDetails"
import LogPerformance from "./pages/LogPerformance"
import './App.css'


export default function Main () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/register" element={<NewPerformer />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/log" element={<LogPerformance />} />
                <Route path="/archive" element={<Archive />} />
                {/* <Route path="/archive/:id" element={<ShowRecordingDetails />} /> */}
            </Routes>
        </main>
    )
}