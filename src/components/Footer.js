import React from "react"
import { Link } from "react-router-dom"

export default function Footer (props) {
    return (
        <footer>
            <nav className="nav">
                <Link to="/">
                    <p>home</p>
                </Link>
                <Link to="/register">
                    <p>register</p>
                </Link>
                <Link to="/archive">
                    <p>archive</p>
                </Link>
            </nav>
        </footer>
    )
}