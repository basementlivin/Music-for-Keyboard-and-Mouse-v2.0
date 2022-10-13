import { Link } from "react-router-dom"

const Footer = (props) => {
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

export default Footer