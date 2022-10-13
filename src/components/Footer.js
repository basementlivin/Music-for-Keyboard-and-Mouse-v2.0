import React from "react"
import { Link } from "react-router-dom"

export default function Footer (props) {
    return (
        <footer>
            <nav className="nav">
                <Link to="/">
                    <p>home</p>
                </Link>
            </nav>
        </footer>
    )
}