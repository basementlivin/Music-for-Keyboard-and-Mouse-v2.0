import React from "react"
import { Link } from "react-router-dom"

export default function Footer (props) {
    return (
        <>
            <nav className="site-nav">
                <Link className="nav-link" to="/">
                    <p>home</p>
                </Link>
                <Link className="nav-link" to="/register">
                    <p>register</p>
                </Link>
                <Link className="nav-link" to="/archive">
                    <p>archive</p>
                </Link>
            </nav>
        </>
    )
}