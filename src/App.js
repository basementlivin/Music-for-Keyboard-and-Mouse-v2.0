import React from "react"
import { Routes, Route } from "react-router-dom"
import SplashPage from "./pages/SplashPage"
import { NewPerformer } from "./pages/NewPerformer"
import Archive from "./pages/Archive"
import Performance from "./pages/Performance"
import {ShowRecordingDetails} from "./pages/ShowRecordingDetails"
import LogPerformance from "./pages/LogPerformance"
import Footer from "./components/Footer"
import "./styles/app/App.css"


export default function Main () {
    return (
        <>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/register" element={<NewPerformer />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/log" element={<LogPerformance />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/archive/:id" element={<ShowRecordingDetails />} />
            </Routes>
            <Footer />
        </>
    )
}