import { Routes, Route } from "react-router-dom"
import SplashPage from "../pages/SplashPage"
import Archive from "../pages/Archive"
import Performance from "../pages/Performance"
import ShowRecordingDetails from "../pages/ShowRecordingDetails"


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/archive/:id" element={<ShowRecordingDetails />} />
            </Routes>
        </main>
    )
}

export default Main